# Microfrontend with React.js, React Module, and Next.js

## Overview

This project demonstrates a **microfrontend architecture** built using **React.js**, a separate **React Module**, and **Next.js** (version 18.2.0). All applications are integrated using **Webpack Module Federation** to enable seamless communication and synchronization between the container app and the remote apps.

## Features

- **Container App**: Built with React.js, it serves as the host application and manages data flow between microfrontends.
- **Next.js Remote App**: Built with Next.js, it exposes components to the container app using Module Federation.
- **React Module Remote App**: Built with React.js, it exposes product components to the container app using Module Federation.
- **Webpack Integration**: All projects use Webpack for bundling and Module Federation for synchronizing operations between the apps.
- **Dynamic Component Loading**: The container app dynamically loads components from both remote apps at runtime.
- **Tailwind CSS Styling**: The React Module uses Tailwind CSS for modern, responsive styling.

## Exposed Components

### From the **Next.js remote app**:

1. **CardComponent**:
   - Displays a card with `title`, `image`, and `text` props.
   - Successfully integrated into the container app.

2. **ServiceComponent**:
   - Displays a service description with `title`, `description`, and `image` props.
   - Dynamically imported and rendered in the container app.

### From the **React Module remote app**:

1. **Product**:
   - Displays product information with `name`, `price`, `image`, and `description` props.
   - Features a modern design with Tailwind CSS styling.
   - Successfully integrated into the container app.

### From the **Container app**:

1. **Layout**:
   - Provides a reusable layout structure with a header, footer, and content area.
   - Exposed from the container app and successfully imported into other apps.
   - Used in the `ServiceComponent` to wrap its content.

## Setup Instructions

1. **Build and Start the Next.js App**:
   - Navigate to the `next-module` directory:
     ```bash
     cd next-module
     ```
   - Build the Next.js app:
     ```bash
     npm run build
     ```
   - Start the Next.js app in production mode:
     ```bash
     npm start
     ```

2. **Build and Start the React Module App**:
   - Navigate to the [react-module](http://_vscodecontentref_/0) directory:
     ```bash
     cd react-module
     ```
   - Build the React Module app:
     ```bash
     npm run build
     ```
   - Start the React Module app:
     ```bash
     npm start
     ```

3. **Start the Container App**:
   - Navigate to the container directory:
     ```bash
     cd container
     ```
   - Build the container app:
     ```bash
     npm run build
     ```
   - Start the container app:
     ```bash
     npm run start
     ```

4. **Access the Application**:
   - Open your browser and navigate to the container app (default: `http://localhost:3001`).
   - The container app will dynamically load components from both remote apps.

## Notes

- Ensure both the Next.js app and React Module app are running before starting the container app to avoid errors when loading remote components.
- The `remoteEntry.js` file from the Next.js app must be accessible at `http://localhost:3000/_next/static/chunks/remoteEntry.js`.
- The `remoteEntry.js` file from the React Module app must be accessible at `http://localhost:3002/remoteentry.js`.
- The `remoteEntry.js` file from the container app must be accessible at `http://localhost:3001/remoteEntry.js`.

## Troubleshooting

- If the Next.js `remoteEntry.js` file is not found (404 error), ensure the `publicPath` is correctly set in the `next.config.js` file:
  ```javascript
  config.output.publicPath = 'http://localhost:3000/_next/';