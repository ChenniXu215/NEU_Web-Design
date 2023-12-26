import React from "react";

import './SkipLink.css';

function SkipLink({targetId}) {
    const skipToContent = () => {
        const mainContent = document.getElementById(targetId);
        if (mainContent) {
            mainContent.tabIndex = -1;
            mainContent.focus();
        }
    }

    return (
        <>
            <a className="skip-to-main" href={`#${targetId}`} onClick={skipToContent}>
                Skip to Main Content
            </a>
        </>
    );
}

export default SkipLink;