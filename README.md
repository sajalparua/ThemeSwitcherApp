# ThemeSwitcherApp

A React application that demonstrates theme switching, product listing, and routing.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [License](#license)

## Features

- **Theme Switching:** Choose between three unique themes (Minimalist, Dark Mode, Colorful).
- **Product Listing:** Displays products with categories and details.
- **Routing:** Includes Home, About, and Contact pages.
- **Responsive Design:** Built with Bootstrap for mobile and desktop.
- **Sidebar Layout:** Theme 2 features a sidebar for navigation.



## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sajalparua/ThemeSwitcherApp.git  
cd theme_switch_app
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── component/      # Reusable components (Header, Footer, Layout, Sidebar)
  ├── context/        # Theme context provider
  ├── pages/          # Main pages (Home, About, Contact)
  ├── sevice/         # API service functions
  ├── themes/         # Theme CSS files
  ├── App.js          # Main app component
  └── index.js        # Entry point
```

## Tech Stack

- React
- React Router
- Bootstrap
- Context API

## License

MIT License
