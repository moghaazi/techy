'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => setIsVisible(window.scrollY > 500);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            style={{
                all: 'unset',
                fontSize: '1.5rem',
                position: 'fixed',
                right: '20px',
                bottom: '40px',
                cursor: 'pointer',
                transform: 'scale(1.8)',
                opacity: isVisible ? 1 : 0,
                transition: '0.3s',
                zIndex: 100,
            }}
            onClick={scrollToTop}
        >
            🔝
        </button>
    );
}
