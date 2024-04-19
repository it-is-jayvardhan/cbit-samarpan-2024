// src/components/ImageCarousel.js
import Carousel from './Carousel.js';

const Home = () => {
    // Sample image URLs (replace with your actual image URLs)

    const sampleImages = [
        // {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img1.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img2.jpeg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img3.jpeg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img4.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img5.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img7%20(2).jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img7.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img8.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img9.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img11.jpg?raw=true'},
        {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img12.jpg?raw=true'},
        // {url:'https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/homepage/img10.jpgraw=true'},
        // Add more image URLs as needed
    ];

    return (
        <div >
          
            <Carousel images={sampleImages} />
        </div>
    );
};
export default Home;