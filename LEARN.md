# URL Shortener - Learning Guide

## Overview
This URL shortener is a modern web application that allows users to convert long URLs into shorter, more manageable links. It includes features like custom aliases, QR code generation, and a history tracking system.

## Features

### 1. URL Shortening
- Convert long URLs into shorter links
- Support for custom aliases (optional)
- Real-time URL validation
- Copy shortened URLs to clipboard
- Open shortened URLs in new tab

### 2. QR Code Generation
- Generate QR codes for shortened URLs
- Download QR codes as PNG images
- Dark/light mode support for QR codes

### 3. History Management
- Track up to 10 recent shortened URLs
- View original and shortened URLs
- Delete individual URLs from history
- Clear entire history
- Persistent storage using localStorage

### 4. User Interface
- Modern, responsive design
- Dark/light mode toggle
- Intuitive navigation
- Real-time notifications
- Mobile-friendly layout

## Technical Implementation

### Frontend Structure
- `index.html`: Main application structure
- `style.css`: Styling and responsive design
- `script.js`: Core application logic
- `config.js`: Configuration settings

### Key Components

#### URL Shortening
```javascript
async function handleShorten() {
    // Validates URL
    // Makes API request to shortening service
    // Handles response and updates UI
}
```

#### QR Code Generation
```javascript
function generateQRCodeUrl(url) {
    // Generates QR code URL using external API
    // Supports dark/light mode
}
```

#### History Management
```javascript
function addToHistory(originalUrl, shortenedUrl) {
    // Adds URL to history
    // Maintains maximum of 10 entries
    // Persists to localStorage
}
```

## API Integration

The application uses the RapidAPI URL Shortener service. To use the application:

1. Sign up for a RapidAPI account
2. Subscribe to the URL Shortener API
3. Add your API key to `config.js`:
```javascript
const config = {
    RAPIDAPI_HOST: 'url-shortener-service.p.rapidapi.com',
    RAPIDAPI_KEY: 'your-api-key-here'
};
```

## Local Development

1. Clone the repository
2. Add your API configuration to `config.js`
3. Open `index.html` in a web browser
4. Start shortening URLs!

## Best Practices

1. **URL Validation**
   - Always validate URLs before shortening
   - Use proper error handling for invalid URLs

2. **Custom Aliases**
   - Only allow alphanumeric characters, hyphens, and underscores
   - Validate custom aliases before submission

3. **Error Handling**
   - Show user-friendly error messages
   - Handle API failures gracefully
   - Provide feedback for all user actions

4. **Security**
   - Validate all user input
   - Use HTTPS for API calls
   - Sanitize URLs before processing

## Browser Support

The application works on modern browsers that support:
- ES6+ JavaScript
- localStorage API
- Fetch API
- CSS Grid and Flexbox

## Contributing

Feel free to contribute to this project by:
1. Reporting bugs
2. Suggesting new features
3. Improving documentation
4. Submitting pull requests

## License

This project is licensed under the MIT License - see the LICENSE file for details. 