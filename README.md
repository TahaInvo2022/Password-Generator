# Password Generator

This project is a Password Generator built with React and Vite. It leverages Vite for fast builds and hot module replacement (HMR), ensuring a smooth development experience. The project utilizes core React concepts such as `useEffect`, `useCallback`, and `useRef`.

## Getting Started

### Prerequisites

Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/password-generator.git
    cd password-generator
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

Start the development server with Vite:
```sh
npm run dev
```
Your app should now be running on http://localhost:3000.

Building for Production
To build the app for production, run:

```sh
Copy code
npm run build
```
This will bundle your app into static files for production.

Linting
To lint your code with ESLint, run:

```sh
Copy code
npm run lint
```
# Core Concepts
## useEffect
The useEffect hook allows you to perform side effects in your components. It runs after the render and can clean up after itself if necessary.

## useCallback
The useCallback hook returns a memoized callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

## useRef
The useRef hook returns a mutable ref object. This object persists for the full lifetime of the component and can be used to access DOM elements or store mutable values that don't cause a re-render when updated.

# Plugins
This project uses the following Vite plugins:

@vitejs/plugin-react for integrating React with Babel for Fast Refresh.
@vitejs/plugin-react-swc for integrating React with SWC for Fast Refresh.

# License
This project is licensed under the MIT License.