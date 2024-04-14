import React from 'react';

const BeamSvg = ({ children }) => {
    return (
        <>
            <svg width="172" height="100" viewBox="0 0 172 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="stroke-gray-300 fill-gray-400 dark:fill-gray-500 dark:stroke-gray-700">
                <path
                    d="M2 2V43.3726C2 47.616 3.68571 51.6857 6.68629 54.6863L45.3137 93.3137C48.3143 96.3143 52.384 98 56.6274 98H170"
                    stroke="currentStroke" stroke-width="2" fill="none"></path>
                <circle cx="170" cy="98" r="2" fill="currentFill" stroke="none"></circle>
                <circle cx="2" cy="2" r="2" fill="currentFill" stroke="none"></circle>
            </svg>
            {children}
        </>
    );
};

export default BeamSvg;