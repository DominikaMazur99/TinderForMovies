import React, { useState } from "react";
import { Button, Tooltip } from "./IconButton.style";

const IconButton = ({ content, tooltip }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <Button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {content}
            </Button>
            {showTooltip && tooltip && <Tooltip>{tooltip}</Tooltip>}
        </div>
    );
};

export default IconButton;
