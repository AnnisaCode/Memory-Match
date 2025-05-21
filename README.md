# Memory Match Game

A simple, modern, and secure memory card matching game built with HTML, CSS, and JavaScript.

## Features

- **Beautiful UI**: Modern card design, smooth flip animations, and responsive layout.
- **Restart Button**: Instantly restart the game without refreshing the page.
- **Victory Message**: Animated congratulatory message when all pairs are matched.
- **Fully English**: All texts, messages, and labels are in English.
- **Secure**: No use of `innerHTML` for dynamic content, preventing XSS vulnerabilities.
- **Mobile Friendly**: Responsive design for desktop and mobile devices.

## How to Play

1. Click any card to flip it over.
2. Flip another card to try to find its matching pair.
3. If the cards match, they stay flipped. If not, they flip back.
4. Match all pairs to win the game!
5. Click the **Restart Game** button to play again.

## Demo

![Memory Match Game Screenshot](https://i.imgur.com/1Q9QZ1A.png)

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari, etc.)

### Running Locally
1. Download or clone this repository.
2. Open `index.html` in your browser.

No installation or build steps required.

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # Styling for the game
├── app.js          # Game logic (JavaScript)
└── README.md       # This documentation
```

## Technologies Used
- HTML5
- CSS3 (with Bootstrap 4 for layout)
- Vanilla JavaScript (no frameworks)

## Security
- All dynamic DOM manipulations use `createElement` and `setAttribute`.
- No user input is directly injected into the DOM.
- No external dependencies except Bootstrap CDN for styling.

## Customization
- You can easily change the card images by editing the `cardsArray` in `app.js`.
- To add more pairs, simply add more objects to the array (make sure each image has a pair).

## License

This project is open source and free to use for any purpose.

---

**Enjoy playing and training your memory!** 