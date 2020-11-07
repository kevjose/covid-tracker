import React from 'react';
const Footer: React.FC = () => (
  <footer className="w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
      Copyright &copy; 2020{' '}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="/"
      >
        C19 Tracker
      </a>{' '}
      All rights reserved
    </p>
  </footer>
);

export default Footer;
