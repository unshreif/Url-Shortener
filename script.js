// DOM Elements
const urlInput = document.getElementById('urlInput');
const shortenBtn = document.getElementById('shortenBtn');
const resultContainer = document.getElementById('result');
const urlHistory = document.getElementById('urlHistory');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const themeToggle = document.querySelector('.theme-toggle');
const clearHistoryBtn = document.getElementById('clearHistory');
const customSlug = document.getElementById('customSlug');

// API Configuration
const RAPIDAPI_KEY = '285636c500msh12b84f5a9d710b8p1dd115jsn9e73910313cf';
const RAPIDAPI_HOST = 'url-shortener-service.p.rapidapi.com';

// State
let urlHistoryData = JSON.parse(localStorage.getItem('urlHistory')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize
updateUrlHistory();
updateTheme();

// Event Listeners
shortenBtn.addEventListener('click', handleShorten);
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleShorten();
    }
});
themeToggle.addEventListener('click', toggleTheme);
clearHistoryBtn.addEventListener('click', clearHistory);
customSlug.addEventListener('input', validateCustomSlug);

// Theme Functions
function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    updateTheme();
}

function updateTheme() {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// History Functions
function clearHistory() {
    if (urlHistoryData.length === 0) {
        showNotification('History is already empty', 'error');
        return;
    }

    if (confirm('Are you sure you want to clear all history?')) {
        urlHistoryData = [];
        localStorage.setItem('urlHistory', JSON.stringify(urlHistoryData));
        updateUrlHistory();
        showNotification('History cleared successfully', 'success');
    }
}

// Custom URL Functions
function validateCustomSlug() {
    const slug = customSlug.value.trim();
    const isValid = /^[a-zA-Z0-9-_]+$/.test(slug);
    customSlug.style.borderColor = isValid ? 'var(--border-color)' : 'var(--error-color)';
    return isValid;
}

// URL Shortening Functions
async function handleShorten() {
    const url = urlInput.value.trim();
    const customSlugValue = customSlug.value.trim();
    
    if (!isValidUrl(url)) {
        showNotification('Please enter a valid URL', 'error');
        return;
    }

    if (customSlugValue && !validateCustomSlug()) {
        showNotification('Custom alias can only contain letters, numbers, hyphens, and underscores', 'error');
        return;
    }

    try {
        shortenBtn.disabled = true;
        shortenBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Shortening...</span>';
        
        const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY
            },
            body: `url=${encodeURIComponent(url)}${customSlugValue ? `&custom=${customSlugValue}` : ''}`
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        if (data.result_url) {
            showResult(url, data.result_url);
            addToHistory(url, data.result_url);
            showNotification('URL shortened successfully!', 'success');
            urlInput.value = '';
            customSlug.value = '';
        } else {
            throw new Error('Failed to get shortened URL');
        }
    } catch (error) {
        showNotification(error.message || 'Failed to shorten URL', 'error');
    } finally {
        shortenBtn.disabled = false;
        shortenBtn.innerHTML = '<i class="fas fa-magic"></i> <span>Shorten</span>';
    }
}

function showResult(originalUrl, shortenedUrl) {
    const qrCodeUrl = generateQRCodeUrl(shortenedUrl);
    resultContainer.innerHTML = `
        <div class="url-item">
            <div class="url-info">
                <div class="original-url">${originalUrl}</div>
                <div class="shortened-url">${shortenedUrl}</div>
            </div>
            <div class="url-actions">
                <button class="action-btn copy-btn" onclick="copyToClipboard('${shortenedUrl}')">
                    <i class="fas fa-copy"></i>
                </button>
                <a href="${shortenedUrl}" target="_blank" class="action-btn">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
        <div class="qr-code-container">
            <img src="${qrCodeUrl}" alt="QR Code" class="qr-code-image">
            <div class="qr-code-actions">
                <a href="${qrCodeUrl}" download="qr-code.png" class="action-btn">
                    <i class="fas fa-download"></i> Download QR
                </a>
            </div>
        </div>
    `;
    resultContainer.classList.add('show');
}

function generateQRCodeUrl(url) {
    const size = '200x200';
    const foreground = isDarkMode ? 'ffffff' : '000000';
    const background = isDarkMode ? '1f2937' : 'ffffff';
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(url)}&color=${foreground}&bgcolor=${background}`;
}

function addToHistory(originalUrl, shortenedUrl) {
    urlHistoryData.unshift({
        originalUrl,
        shortenedUrl,
        timestamp: new Date().toISOString()
    });

    // Keep only last 10 URLs
    if (urlHistoryData.length > 10) {
        urlHistoryData.pop();
    }

    localStorage.setItem('urlHistory', JSON.stringify(urlHistoryData));
    updateUrlHistory();
}

function updateUrlHistory() {
    urlHistory.innerHTML = urlHistoryData.map((item, index) => `
        <div class="url-item">
            <div class="url-info">
                <div class="original-url">${item.originalUrl}</div>
                <div class="shortened-url">${item.shortenedUrl}</div>
            </div>
            <div class="url-actions">
                <button class="action-btn copy-btn" onclick="copyToClipboard('${item.shortenedUrl}')">
                    <i class="fas fa-copy"></i>
                </button>
                <a href="${item.shortenedUrl}" target="_blank" class="action-btn">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <button class="action-btn" onclick="showQRCode('${item.shortenedUrl}')">
                    <i class="fas fa-qrcode"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteFromHistory(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function showQRCode(url) {
    const qrCodeUrl = generateQRCodeUrl(url);
    resultContainer.innerHTML = `
        <div class="qr-code-container">
            <img src="${qrCodeUrl}" alt="QR Code" class="qr-code-image">
            <div class="qr-code-actions">
                <a href="${qrCodeUrl}" download="qr-code.png" class="action-btn">
                    <i class="fas fa-download"></i> Download QR
                </a>
            </div>
        </div>
    `;
    resultContainer.classList.add('show');
}

function deleteFromHistory(index) {
    urlHistoryData.splice(index, 1);
    localStorage.setItem('urlHistory', JSON.stringify(urlHistoryData));
    updateUrlHistory();
    showNotification('URL removed from history', 'success');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showNotification('Copied to clipboard!', 'success'))
        .catch(() => showNotification('Failed to copy to clipboard', 'error'));
}

function showNotification(message, type = 'success') {
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
} 