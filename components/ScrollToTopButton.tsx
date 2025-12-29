import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="glass-panel p-4 rounded-full text-brand-blue dark:text-brand-cyan hover:scale-110 active:scale-95 transition-all duration-300 group shadow-lg"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
