import React from 'react';
import './image.css'; // Import CSS file for styling

const Image = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <button onClick={() => handleClick('prev')}>&#60;</button>
      <button onClick={() => handleClick('next')}>&#62;</button>
    </div>
  );
};

export default Image;
