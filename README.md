# URL Shortener

A modern, feature-rich URL shortener web application that allows users to create short, manageable links from long URLs.

## Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Custom Aliases**: Create custom short URLs with your preferred alias
- **QR Code Generation**: Generate QR codes for your shortened URLs
- **Dark Mode**: Toggle between light and dark themes
- **URL History**: Keep track of your recently shortened URLs
- **Copy to Clipboard**: One-click copy of shortened URLs
- **Responsive Design**: Works seamlessly on all devices



## Demo

You can access the live demo [here](https://url-shortener-theta-silk.vercel.app/).

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)
- RapidAPI URL Shortener Service
- QR Server API

## Setup

1. Clone the repository:
```bash
git clone https://github.com/unshreif/Url-Shortener.git
cd Url-Shortener
```

2. Open `index.html` in your web browser or use a local server.

3. Get your RapidAPI key:
   - Sign up at [RapidAPI](https://rapidapi.com)
   - Subscribe to the URL Shortener Service
   - Replace the `RAPIDAPI_KEY` in `script.js` with your key

## Usage

1. Enter a long URL in the input field
2. (Optional) Add a custom alias for your shortened URL
3. Click "Shorten" or press Enter
4. Copy the shortened URL or download its QR code
5. View your URL history below
6. Toggle dark mode using the moon/sun icon in the navbar

## Features in Detail

### URL Shortening
- Instant URL shortening with validation
- Support for custom aliases
- Error handling and user notifications

### QR Code Generation
- Automatic QR code generation for shortened URLs
- Download QR codes as PNG images
- Theme-aware QR codes (adapts to light/dark mode)

### URL History
- Stores up to 10 recent URLs
- Persistent storage using localStorage
- One-click copy and open functionality
- Delete individual URLs or clear entire history

### Theme Support
- Light and dark mode
- Theme preference persistence
- Smooth transitions between themes

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**GitHub** : [@unshreif](https://github.com/unshreif)

**Linkedin** : [unshreif](https://www.linkedin.com/in/unshreif/)

