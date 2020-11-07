import React from 'react';
import Header from './header';
import Footer from './footer';
import { Drawer, Slider } from '../drawer/drawer';

type LayoutProps = {
  children: React.ReactNode;
  style?: Object;
};
export const Layout: React.FC<LayoutProps> = ({ children, style }) => (
  <main
    className="relative min-h-screen flex-grow"
    style={{
      minHeight: '-webkit-fill-available',
      WebkitOverflowScrolling: 'touch',
      ...style,
    }}
  >
    <Drawer />
    <Header />
    <div className="flex flex-col w-full h-screen flex-grow">
      <div className="pt-90px flex-auto">{children}</div>
      <Footer />
    </div>
    <Slider />
  </main>
);

export default Layout;
