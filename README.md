# URL Shortener

Tired of long, clunky URLs? This URL Shortener transforms them into neat, shareable links in seconds!

## ✨ Why Use This URL Shortener?

*   **Simplify Your Links:** Turn unwieldy web addresses into concise links perfect for sharing on social media, emails, or anywhere space is tight.
*   **Brand Your Links:** Use custom aliases to create memorable and trustworthy short URLs.
*   **Go Mobile-Friendly:** Instantly generate QR codes for your links, making them easy to share in print or on mobile devices.
*   **Track Your History:** Keep an eye on your recently shortened URLs for quick access.
*   **User-Friendly Interface:** Enjoy a clean, intuitive design with light and dark modes for comfortable viewing.

## Features

- **Effortless URL Shortening**: Quickly transform long URLs into short, easy-to-share links.
- **Personalized Aliases**: Customize your short links with memorable custom aliases.
- **Instant QR Codes**: Generate QR codes for your links on the fly, ready for print or digital sharing.
- **Comfortable Viewing with Dark Mode**: Switch between light and dark themes for a pleasant user experience.
- **Convenient URL History**: Easily access and manage your recently shortened links.
- **Quick Copy-to-Clipboard**: Copy shortened URLs with a single click.
- **Seamless Responsive Design**: Enjoy a consistent experience across desktops, tablets, and mobile devices.



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

2. Create a `config.js` file in the project's root directory. This file will store your API credentials. Add the following content to it:
```javascript
const config = {
    RAPIDAPI_KEY: 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
    RAPIDAPI_HOST: 'url-shortener-service.p.rapidapi.com' // This is typically fixed for the service
};
```
> **Important**: The `config.js` file is used directly by the client-side JavaScript. While it's excluded from Git version control (see `.gitignore`), the `RAPIDAPI_KEY` will be visible in browser developer tools during API requests.

3. Obtain your RapidAPI Key:
   - Sign up or log in at [RapidAPI](https://rapidapi.com).
   - Subscribe to the [URL Shortener Service](https://rapidapi.com/collection/url-shortener-apis) (or a similar one if this specific service changes). Ensure the service matches the `RAPIDAPI_HOST` in `config.js`.
   - Find your API key (often labeled `X-RapidAPI-Key`) and paste it as the value for `RAPIDAPI_KEY` in your `config.js` file.

4. Run the application:
   - For the best development experience, open `index.html` using a local development server. Many code editors (like VS Code) offer "Live Server" extensions that provide this functionality with auto-reloading.
   - Alternatively, you can open `index.html` directly in your web browser, but some browser features might work more reliably with a server.

> **Note**: The `config.js` file is correctly included in `.gitignore` to prevent your API keys from being accidentally committed to version control.

## Usage

1. Enter the long URL you want to shorten into the input field.
2. (Optional) If you want a specific short identifier, enter your desired custom alias.
3. Click the "Shorten" button or press Enter.
4. The shortened URL and a QR code will be displayed. You can then:
    - Copy the shortened URL to your clipboard.
    - Download the QR code as a PNG image.
    - Open the shortened URL directly.
5. Your recent shortened URLs will appear in the "URL History" section for easy access.
6. Toggle between light and dark themes using the moon/sun icon in the navigation bar.

## Features in Detail

### Effortless URL Shortening
- Instant URL shortening with input validation to ensure you provide valid web addresses.
- Support for personalized custom aliases for branded and memorable links.
- Clear error handling and user-friendly notifications for a smooth experience.

### Instant QR Code Generation
- Automatic QR code generation immediately after shortening a URL.
- Option to download QR codes as high-quality PNG images.
- Smart QR codes that adapt to the selected light or dark theme.

### Convenient URL History
- Locally stores up to 10 of your most recent URLs for quick retrieval.
- Utilizes persistent storage (localStorage) so your history is saved across sessions.
- Offers one-click copy and direct opening of links from the history.
- Functionality to delete individual URLs or clear the entire history.

### Dark Mode & Theme Customization
- Easily toggle between a sleek dark mode and a clean light mode.
- Remembers your theme preference across sessions for a consistent experience.
- Smooth, visually appealing transitions when switching themes.

## ⚙️ How it Works

This URL Shortener is a client-side application, meaning all the core functionality runs directly in your web browser. Here’s a breakdown of how it operates:

*   **The Interface (HTML & CSS):**
    *   `index.html`: Provides the basic structure of the web page, including input fields, buttons, and areas to display results.
    *   `style.css`: Handles all aspects of presentation and appearance, including the overall layout, responsive design (ensuring it works well on different screen sizes), and the light/dark theme styling.

*   **The Brains (JavaScript - `script.js`):** This file contains the application's main logic:
    *   **User Input Handling:** Captures the long URL and any custom alias entered by the user.
    *   **Input Validation:** Performs checks to ensure the URL is valid and the custom alias (if provided) meets the required format.
    *   **API Interaction:** Manages requests to external API services:
        *   Sends the long URL (and custom alias, if any) to a URL shortening service via RapidAPI.
        *   Requests a QR code image from a QR code generation service based on the shortened URL.
    *   **Displaying Results:** Shows the shortened URL, the generated QR code, and any success or error messages to the user.
    *   **URL History Management:** Uses the browser's `localStorage` to save and retrieve the list of recently shortened URLs, allowing users to access their history across sessions.
    *   **Theme Toggling:** Manages the switching between light and dark visual themes and saves the user's preference in `localStorage`.

*   **Configuration (`config.js`):**
    *   This file is crucial for connecting to the external URL shortening service. It stores your personal `RAPIDAPI_KEY`, which authenticates your requests to the RapidAPI platform.

*   **External API Services:**
    *   **RapidAPI URL Shortener Service:** This third-party service takes your long URL and returns a compact, shortened version.
    *   **QR Server API:** This service is used to generate the QR code image for the shortened URL, which can then be easily scanned or downloaded.

In essence, `index.html` and `style.css` create what you see, while `script.js` manages the user interaction, communicates with external APIs (using credentials from `config.js`), and updates the page with the results.

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

2. Create a `config.js` file in the project's root directory. This file will store your API credentials. Add the following content to it:
```javascript
const config = {
    RAPIDAPI_KEY: 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
    RAPIDAPI_HOST: 'url-shortener-service.p.rapidapi.com' // This is typically fixed for the service
};
```
> **Important**: The `config.js` file is used directly by the client-side JavaScript. While it's excluded from Git version control (see `.gitignore`), the `RAPIDAPI_KEY` will be visible in browser developer tools during API requests.

3. Obtain your RapidAPI Key:
   - Sign up or log in at [RapidAPI](https://rapidapi.com).
   - Subscribe to the [URL Shortener Service](https://rapidapi.com/collection/url-shortener-apis) (or a similar one if this specific service changes). Ensure the service matches the `RAPIDAPI_HOST` in `config.js`.
   - Find your API key (often labeled `X-RapidAPI-Key`) and paste it as the value for `RAPIDAPI_KEY` in your `config.js` file.

4. Run the application:
   - For the best development experience, open `index.html` using a local development server. Many code editors (like VS Code) offer "Live Server" extensions that provide this functionality with auto-reloading.
   - Alternatively, you can open `index.html` directly in your web browser, but some browser features might work more reliably with a server.

> **Note**: The `config.js` file is correctly included in `.gitignore` to prevent your API keys from being accidentally committed to version control.

## Usage

1. Enter the long URL you want to shorten into the input field.
2. (Optional) If you want a specific short identifier, enter your desired custom alias.
3. Click the "Shorten" button or press Enter.
4. The shortened URL and a QR code will be displayed. You can then:
    - Copy the shortened URL to your clipboard.
    - Download the QR code as a PNG image.
    - Open the shortened URL directly.
5. Your recent shortened URLs will appear in the "URL History" section for easy access.
6. Toggle between light and dark themes using the moon/sun icon in the navigation bar.

## Security

- **API Key Management**: API keys are intended to be kept out of version control using the `config.js` file, which is listed in `.gitignore`.
- **Client-Side API Requests**: In the current implementation, API requests to the URL shortening service are made directly from the client-side (i.e., the user's browser). This means your `RAPIDAPI_KEY` from `config.js` will be visible in network requests via browser developer tools.
- **Recommendation for Enhanced Security**: For production applications or scenarios needing stricter API key protection, consider proxying API requests through a server-side backend. This backend would securely store the API key and make requests to the external service, preventing the key from being exposed directly to the client's browser.
- **Input Validation**: The application includes input validation for URLs and custom aliases to prevent basic injection attempts and ensure data integrity.

## 🤝 Contributing

We're excited that you're interested in contributing to the URL Shortener project! Your help is invaluable in making this tool even better. Whether it's reporting a bug, suggesting a new feature, or writing code, all contributions are welcome and appreciated.

Here are several ways you can get involved:

*   **Reporting Bugs:**
    Encountered a problem? We want to hear about it! Before submitting, please quickly check the [Issues tab](https://github.com/unshreif/Url-Shortener/issues) to see if the bug has already been reported. If not, please create a new issue and provide as much detail as possible, including:
    *   A clear and descriptive title.
    *   A step-by-step description of how to reproduce the bug.
    *   What you expected to happen.
    *   What actually happened (including any error messages).
    *   Information about your environment, such as your browser version and operating system (if relevant).

*   **Suggesting Enhancements or New Features:**
    Have an idea that could improve the URL Shortener? We'd love to hear it! Please open an issue on the [Issues tab](https://github.com/unshreif/Url-Shortener/issues), describing your suggestion:
    *   What the enhancement or feature is.
    *   Why it would be useful or beneficial to users.
    *   Any potential drawbacks or considerations.

*   **Code Contributions (Pull Requests):**
    If you're ready to contribute code, that's fantastic! Here's how you can do it:
    1.  **Fork the Repository:** Create your own copy of the project by clicking the "Fork" button at the top of the [repository page](https://github.com/unshreif/Url-Shortener).
    2.  **Create a Branch:** From the `main` branch in your fork, create a new branch for your changes. Choose a descriptive name, like `feature/add-analytics` or `bugfix/history-display-issue`. You can do this with `git checkout -b your-branch-name`.
    3.  **Make Your Changes:** Write your code, fix the bug, or add your feature. Try to adhere to the existing code style and keep your changes focused on the specific issue or feature you're addressing.
    4.  **Commit Your Changes:** Write clear, concise, and descriptive commit messages. This helps everyone understand the purpose of your changes.
    5.  **Push to Your Fork:** Push your committed changes to your forked repository on GitHub: `git push origin your-branch-name`.
    6.  **Open a Pull Request (PR):** Go to the original [Url-Shortener repository](https://github.com/unshreif/Url-Shortener) and you should see a prompt to create a Pull Request from your new branch. If not, navigate to the "Pull Requests" tab and click "New pull request".
    7.  **Describe Your PR:** Provide a clear title and description for your Pull Request. Explain what changes you've made and why. If your PR addresses an existing issue, be sure to link it (e.g., "Fixes #42" or "Closes #123").

    Once your PR is submitted, we'll review it as soon as we can. We may provide feedback or ask for changes.

*   **Questions?**
    If you have any questions about the contribution process or want to discuss an idea before working on it, feel free to open an issue on the [Issues tab](https://github.com/unshreif/Url-Shortener/issues).

Thank you for considering contributing to the URL Shortener project!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
