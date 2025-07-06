import React, { useEffect } from 'react';

const AccessibilityFeatures = () => {
  useEffect(() => {
    // Focus management for keyboard navigation
    const handleKeyDown = (event) => {
      // Skip to main content with Alt+M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Skip to navigation with Alt+N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.getElementById('main-navigation');
        if (navigation) {
          navigation.focus();
          navigation.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50">
        <a
          href="#main-content"
          className="bg-amber-600 text-white px-4 py-2 rounded-br-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          Pular para o conteúdo principal (Alt+M)
        </a>
        <a
          href="#main-navigation"
          className="bg-amber-600 text-white px-4 py-2 rounded-br-lg ml-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          Pular para a navegação (Alt+N)
        </a>
      </div>

      {/* Screen Reader Announcements */}
      <div
        id="announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  );
};

export default AccessibilityFeatures;

