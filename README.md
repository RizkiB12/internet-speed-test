---

# Internet Speed Test Application

This is a web-based application that measures internet speed by loading images from the web. The project is built using **HTML**, **CSS**, and **JavaScript**, with responsive design and dynamic content rendering.

## Features

- **Internet Speed Test**: Measures internet speed by loading random images from the Picsum API.
- **Responsive Design**: The application is responsive, ensuring compatibility with different screen sizes.
- **Real-time Speed Display**: Displays the internet speed in bits, kilobits, and megabits dynamically.
- **Dynamic Background Animation**: Includes a smooth, moving gradient background for a modern look.

## Project Structure

```
/
│-- index.html          # Main HTML file for the application
│-- css/
│   └── style.css       # Custom CSS for styling
│-- js/
│   └── script.js       # JavaScript for the speed test functionality
└── img/speedometer.png # Folder for images or other assets (optional)
```

## How It Works

1. **Image Load**: The app measures the time taken to load an image from the web (via the Picsum API).
2. **Speed Calculation**: It calculates the internet speed in bits, kilobits, and megabits per second, based on the image size and load time.
3. **Multiple Tests**: The app runs a series of tests and computes the average speed.
4. **Real-time Display**: The calculated speeds are displayed dynamically without refreshing the page.

## Technologies Used

- **HTML5**: For the structure and layout of the application.
- **CSS3**: To style the application with a moving gradient background and hover effects.
- **JavaScript**: For measuring and calculating the internet speed based on image load times.
- **Picsum API**: For fetching random images to use in the speed test.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/internet-speed-test.git
   ```
2. Navigate to the project folder:
   ```bash
   cd internet-speed-test
   ```
3. Open the `index.html` file in your browser to run the application:
   ```bash
   open index.html
   ```

## Future Enhancements

- Add an option to test different file types for speed measurement.
- Implement a graphical display of the speed results.
- Add localization to support multiple languages.

## Credits

- **Picsum API**: [Picsum](https://picsum.photos/) for random images.
- **Google Fonts**: [Poppins](https://fonts.google.com/specimen/Poppins) for typography.

---

Feel free to adjust this README to fit your project's needs!
