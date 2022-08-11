import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import carousel from '../../../../assets/images/carousel.png';
import carousel2 from '../../../../assets/images/carousel2.png';
import styles from './SecondaryCarousel.module.scss';

const SecondaryCarousel = () => {
  const items = [
    {
      src: carousel,
      key: 1
    },
    {
      src: carousel2,
      key: 2
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={styles.carouselItem}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className={styles.root}>
      <h3>SecondaryCarousel</h3>
      <Carousel
        activeIndex={activeIndex}
        pause={false}
        ride="carousel"
        next={next}
        previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
};

export default SecondaryCarousel;
