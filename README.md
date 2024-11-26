# Interactive Color Grid Generator

## Description
An interactive web application that dynamically generates a grid of colored squares. Users can input the number of grid items, and each square changes color on mouse hover with a random RGB color.

## Features
- Dynamic grid generation based on user input
- Random color generation on hover
- Responsive design
- Smooth color transition effects

## Technologies Used
- HTML
- CSS
- Vanilla JavaScript

## How It Works
1. User is prompted to enter a number
2. Grid is generated with squares (number * 70 items)
3. Hovering over squares triggers color change:
   - Mouse enter: Random RGB color applied
   - Mouse leave: Reverts to original color after 1 second

## Color Scheme
The project uses a custom color palette defined in CSS variables:
- Background: Light Gray (`#eef0f2`)
- Font Color: Dark Blue (`#13293d`)
- Section Border: Soft Orange (`#ffaf87`)
- Grid Elements: Teal (`#0d7e83`)

## Setup
1. Download the HTML, CSS, and JavaScript files
2. Open the HTML file in a web browser
3. Enter a number when prompted
4. Interact with the generated grid

## Customization
- Modify color variables in CSS `:root` section
- Adjust grid layout by changing `grid-template-columns`
- Modify square size in `.inside--box` CSS class

## Potential Improvements
- Add color lock/freeze functionality
- Implement color palette selection
- Create save/export feature for generated grids


## Author
Salman Hashemi
