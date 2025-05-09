# Microfrontend with React.js and Next.js

## Overview

This project demonstrates a **microfrontend architecture** built using **React.js** and **Next.js** (version 18.2.0). Both applications are integrated using **Webpack Module Federation** to enable seamless communication and synchronization between the container app and the remote app.

## Features

- **Container App**: Built with React.js, it serves as the host application and manages data flow between microfrontends.
- **Remote App**: Built with Next.js, it exposes components to the container app using Module Federation.
- **Webpack Integration**: Both projects use Webpack for bundling and Module Federation for synchronizing operations between the apps.
- **Dynamic Component Loading**: The container app dynamically loads components (`CardComponent`, `ServiceComponent`, and `Layout`) from the remote app at runtime.

## Exposed Components

The following components are exposed from the **Next.js remote app** and successfully imported into the **React container app**:

1. **CardComponent**:
   - Displays a card with `title`, `image`, and `text` props.
   - Successfully integrated into the container app.

2. **ServiceComponent**:
   - Displays a service description with `title`, `description`, and `image` props.
   - Dynamically imported and rendered in the container app.

3. **Layout**:
   - Provides a reusable layout structure with a header, footer, and content area.
   - Exposed from the container app and successfully imported into the Next.js app.
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

2. **Start the Container App**:
   - Navigate to the [container](http://_vscodecontentref_/1) directory:
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

3. **Access the Application**:
   - Open your browser and navigate to the container app (default: `http://localhost:3001`).
   - The container app will dynamically load components from the Next.js app.

## Notes

- Ensure the Next.js app is running before starting the container app to avoid errors when loading remote components.
- The `remoteEntry.js` file from the Next.js app must be accessible at `http://localhost:3000/_next/static/chunks/remoteEntry.js`.
- The `remoteEntry.js` file from the container app must be accessible at `http://localhost:3001/remoteEntry.js`.

## Troubleshooting

- If the `remoteEntry.js` file is not found (404 error), ensure the `publicPath` is correctly set in the `next.config.js` file:
  ```javascript
  config.output.publicPath = 'http://localhost:3000/_next/';