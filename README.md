# Vector Visualiser

Welcome to the **Vector Visualiser**! This tool allows you to visualize 3D vectors, calculate distances and angles between them, and interact with them in a user-friendly interface.

## Features

- **Add Vectors**: Input the start and direction coordinates to add vectors to the visualizer.
- **Edit and Delete Vectors**: Easily modify or remove vectors from the list.
- **3D Plotting**: Visualize vectors in a 3D space using Plotly.
- **Distance and Angle Calculation**: Select two vectors to calculate and display the distance and angle between them.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/vector-visualiser.git
    ```

2. Navigate to the project directory:

    ```sh
    cd vector-visualiser
    ```

### Usage

1. Open `index.html` or navigate to `https://vector-visualiser.vercel.app` in your web browser.
2. Use the interface to add, edit, and delete vectors.
3. Select vectors from the dropdown to calculate the distance and angle between them.

## File Structure

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `heyy.js`: The JavaScript file containing the logic for vector operations and plotting.

## Code Overview

### JavaScript (`heyy.js`)

- **addVector**: Adds a new vector to the list and updates the plot.
- **updateList**: Updates the HTML list of vectors.
- **editVector**: Allows editing of an existing vector.
- **deleteVector**: Deletes a vector from the list.
- **updatePlot**: Plots the vectors in a 3D space using Plotly.
- **calculateDistance**: Calculates the distance between two vectors.
- **calculateAngle**: Calculates the angle between two vectors.
- **updateVectorSelectors**: Updates the dropdown selectors for vector selection.

### CSS (`style.css`)

- Styles for the main container, vector list, and input fields.
- Flexbox layout for responsive design.
- Button styling for better user interaction.

### HTML (`index.html`)

- Structure of the application including input fields, buttons, and containers for vector list and plot.
- Links to external Plotly library and internal CSS and JS files.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Plotly](https://plotly.com/javascript/) for the 3D plotting library.
- [Google Fonts](https://fonts.google.com/) for the Montserrat font.

Enjoy visualizing your vectors! If you have any questions or feedback, feel free to open an issue or contact us.

---
