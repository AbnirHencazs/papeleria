import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import carousel from '../../../../assets/images/carousel.png';
import carousel2 from '../../../../assets/images/carousel2.png';
import whatsapp from '../../../../assets/icons/whatsapp.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import styles from './MainCarousel.module.scss';

const MainCarousel = () => {
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

  const ArrowIcon = () => <img src={arrow} alt="arrow" />;

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
      <Carousel
        className={styles.carousel}
        activeIndex={activeIndex}
        pause={false}
        ride="carousel"
        next={next}
        previous={previous}>
        {slides}
      </Carousel>

      <div className={styles.links}>
        <a href="/login">
          <div>
            Regístrate <span>Regístrate y cotiza</span>
          </div>
          <ArrowIcon />
        </a>
        <a href="">
          <div>
            Categorías <span>Filtra tus productos</span>
          </div>
          <ArrowIcon />
        </a>
        <a href="/profile/tabs">
          <div>
            Productos <span>Conoce nuestros productos</span>
          </div>
          <ArrowIcon />
        </a>
      </div>

      <div className={styles.footer}>
        <a href="">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default MainCarousel;
