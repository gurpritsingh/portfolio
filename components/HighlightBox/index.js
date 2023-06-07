import React from "react";

const HighlightBox = ({ children }) => {
    return (
        <div className="bg-sectionHighlight rounded-md py-10 px-8">
            {children}
        </div>
    )
};

export default HighlightBox;