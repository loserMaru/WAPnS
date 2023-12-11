import React from 'react';

const CustomizableImage = (props) => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            style={props.style}
        />
    );
}

export default CustomizableImage;
