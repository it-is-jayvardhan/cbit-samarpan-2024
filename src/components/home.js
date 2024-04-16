// src/components/ImageCarousel.js
import Carousel from './Carousel.js';;
const Home = () => {
    // Sample image URLs (replace with your actual image URLs)
    const sampleImages = [
        {url:'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img1.jpeg?raw=true'},
        { url: 'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/im1.jpg?raw=true' },
        { url: 'https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img4.jpg?raw=true' },
        // Add more image URLs as needed
    ];

    return (
        <div>
            {/* Other components */}
            <Carousel images={sampleImages} />
            {/* Other components */}
        </div>
    );
};
export default Home;