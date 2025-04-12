// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <header>
      <h1>My E-commerce Site</h1>
      <nav>
        <a href="/">Home</a> | <a href="/products">Products</a> | <a href="/cart">Cart</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer>© 2023 My E-commerce Site</footer>
  </div>
);

export default Layout;
