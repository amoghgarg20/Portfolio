# Theme and Typography Enhancement

This portfolio now features enhanced typography and a dark/light mode toggle.

## Features Added

### Enhanced Typography
- **Google Fonts Integration**: Uses Inter font family with multiple weights (300-700)
- **Improved Readability**: Better font weights and spacing for headers and body text
- **Web-Safe Fallbacks**: Maintains compatibility with original OpenSans fonts as fallbacks

### Dark/Light Mode Toggle
- **Theme Toggle**: Located in the top navigation bar
- **Persistent Preferences**: User's theme choice is saved in localStorage
- **Smooth Transitions**: All theme changes are animated with CSS transitions
- **Accessibility**: Toggle includes proper ARIA labels and keyboard support
- **Mobile Responsive**: Toggle works seamlessly on mobile devices

## Usage

The theme toggle button is located in the top-right corner of the navigation bar:
- 🌙 icon indicates dark mode is active
- ☀️ icon indicates light mode is active

Simply click the toggle to switch between themes. Your preference will be automatically saved and restored on future visits.

## Technical Implementation

### CSS Variables
The theme system uses CSS custom properties for colors:
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background color  
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--accent-color`: Accent/link colors

### Components
- `ThemeToggle.js`: React component for the theme switcher
- `ThemeToggle.css`: Styles for the toggle button
- `themes.css`: CSS variables and theme definitions