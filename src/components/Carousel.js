import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent } from '@mui/material';

const ImageCarousel = ({ images }) => {
    const cardStyle = {
        padding: '16px', // Add padding to the card
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow
    };

    const imageStyle = {
        width: '100%', // Make the image fill the card
        height: 'auto', // Maintain aspect ratio
    };

    return (
        <Carousel>
            {images.map((image, index) => (
                <Card key={index} style={cardStyle}>
                    <CardContent>
                        <img
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            style={imageStyle}
                        />
                    </CardContent>
                </Card>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
