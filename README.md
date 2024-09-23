# Chrome Extension Project

## Overview
This project consists of two main components: a Chrome extension for grabbing the title of the current tab and a Node.js backend for scraping LinkedIn profiles.

## Table of Contents
- [Tab Title Extension](#tab-title-extension)
- [LinkedIn Profile Scraper](#linkedin-profile-scraper)
- [Installation](#installation)
- [Usage](#usage)
- [Video Explanations](#video-explanations)

## Tab Title Extension
This Chrome extension allows users to grab and display the title of the current tab.

### Features
- Displays the title of the active tab.
- Simple and intuitive user interface.

### Video Explanation
[Watch the Tab Title Extension Video](https://drive.google.com/file/d/1t7dhqu5uvg8i_haxLssgYu5l9YilGGhs/view?usp=sharing)

## LinkedIn Profile Scraper
This is a Node.js backend that scrapes LinkedIn profiles and saves the data into a SQLite database.

### Features
- Posts data such as name, location, and connection count to a backend API.
- Uses SQLite for data storage.

### Video Explanation
[Watch the LinkedIn Profile Scraper Video](https://drive.google.com/file/d/1drlKgWD0EI1dUrvsBNdMN00oScJqmA01/view?usp=sharing)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ChromeExtension-LinkedInScraper.git
   ```
2. Navigate to the `TabTitleExtension` folder and load the extension in Chrome.
3. Navigate to the `linkedin-profile-scraper` folder and install the dependencies:
   ```bash
   npm install
   ```
4. Create the SQLite database and the necessary tables.

## Usage
1. Open the Tab Title Extension in your browser and click the button to grab the current tab's title.
2. Start the Node.js server in the `linkedin-profile-scraper` folder:
   ```bash
   node index.js
   ```
3. Use the Chrome extension to open LinkedIn profiles and post the data to your backend.

## Contributing
Feel free to fork the repository and submit a pull request!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
