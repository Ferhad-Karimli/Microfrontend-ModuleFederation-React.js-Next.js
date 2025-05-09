import React from 'react';
import './layout.css'; // Optional: Add styles for the layout

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Microfrontend Layout</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <p>&copy; 2025 Microfrontend Platform</p>
      </footer>
    </div>
  );
};

export default Layout;