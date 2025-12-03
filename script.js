const urlInput = document.getElementById('urlInput');
const customSlug = document.getElementById('customSlug');
const shortenBtn = document.getElementById('shortenBtn');
const resultContainer = document.getElementById('result');
const notification = document.getElementById('notification');


shortenBtn.addEventListener('click', handleShorten);
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleShorten();
});


async function handleShorten() {
    const url = urlInput.value.trim();
    const slug = customSlug.value.trim();

    if (!isValidUrl(url)) {
        showNotification('Please enter a valid URL', 'error');
        shakeElement(urlInput);
        return;
    }

    if (slug && !/^[a-zA-Z0-9-_]+$/.test(slug)) {
        showNotification('Invalid alias format', 'error');
        shakeElement(customSlug);
        return;
    }

    setLoading(true);

    try {
        const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': config.RAPIDAPI_HOST,
                'x-rapidapi-key': config.RAPIDAPI_KEY
            },
            body: `url=${encodeURIComponent(url)}${slug ? `&custom=${slug}` : ''}`
        });

        const data = await response.json();

        if (data.error) throw new Error(data.error);

        if (data.result_url) {
            showResult(url, data.result_url);
            showNotification('Link shortened successfully!', 'success');
            urlInput.value = '';
            customSlug.value = '';
        } else {
            throw new Error('Unknown error occurred');
        }

    } catch (error) {
        showNotification(error.message || 'Failed to shorten URL', 'error');
    } finally {
        setLoading(false);
    }
}

function showResult(original, short) {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(short)}&color=ffffff&bgcolor=000000`;

    resultContainer.innerHTML = `
        <div class="result-header">
            <span class="success-badge"><i class="fas fa-check"></i> Ready to share</span>
            <button class="icon-btn" onclick="closeResult()"><i class="fas fa-times"></i></button>
        </div>
        <div class="short-url-box">
            <a href="${short}" target="_blank">${short}</a>
            <div class="action-buttons">
                <button class="icon-btn" onclick="copyToClipboard('${short}')" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <a href="${short}" target="_blank" class="icon-btn" title="Open">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
        <div class="qr-code-wrapper">
            <img src="${qrUrl}" alt="QR Code">
        </div>
    `;

    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeResult() {
    resultContainer.classList.add('hidden');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    });
}

function setLoading(isLoading) {
    if (isLoading) {
        shortenBtn.disabled = true;
        shortenBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    } else {
        shortenBtn.disabled = false;
        shortenBtn.innerHTML = '<span>Shorten Now</span><i class="fas fa-arrow-right"></i>';
    }
}

function showNotification(msg, type) {
    notification.textContent = msg;
    notification.className = `notification ${type} show`;
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function isValidUrl(str) {
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
}

function shakeElement(element) {
    element.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 400
    });
}


window.copyToClipboard = copyToClipboard;
window.closeResult = closeResult; 
