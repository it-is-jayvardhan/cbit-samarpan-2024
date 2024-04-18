// src/components/ImageCarousel.js
import Carousel from './Carousel.js';
import { Navigate, useNavigate, } from 'react-router-dom';
import { useSwipeable, } from 'react-swipeable';
const Home = () => {
    // Sample image URLs (replace with your actual image URLs)
    const history = useNavigate();

    const handlers = useSwipeable({
        
        onSwipedRight: () => Navigate('/Registration'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    const sampleImages = [
        {url:'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img1.jpeg?raw=true'},
        { url: 'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/im1.jpg?raw=true' },
        { url: 'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img4.jpg?raw=true' },
        {url:'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img5.jpeg?raw=true'},
        {url:'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/im3.jpg?raw=true'},
        {url:'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/invitation.jpeg?raw=true'},
        // Add more image URLs as needed
    ];

    return (
        <div {...handlers}>
            {/* Other components */}
            <Carousel images={sampleImages} />
            {/* Other components */}
        </div>
    );
};
export default Home;