import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, Row, Col } from 'reactstrap';
import carousel from '../../../../assets/images/carousel.png';
import carousel2 from '../../../../assets/images/carousel2.png';
import styles from './SecondaryCarousel.module.scss';

const SecondaryCarousel = () => {
  const items = [
    {
      src: carousel,
      title: 'PLANO 4 HAKEN 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non turpis enim. Donec ac cursus augue. Morbi ipsum ante, con- sequat laoreet elementum quis, placerat in urna. Ut quis porta felis. Nam malesuada massa lectus, sit amet consequat urna sus- cipit iaculis. Morbi gravida lobortis condimentum.',
      price: '$15,000',
      key: 1
    },
    {
      src: carousel2,
      title: 'PLANO 5 HAKEN 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non turpis enim. Donec ac cursus augue. Morbi ipsum ante, con- sequat laoreet elementum quis, placerat in urna. Ut quis porta felis. Nam malesuada massa lectus, sit amet consequat urna sus- cipit iaculis. Morbi gravida lobortis condimentum.',
      price: '$10,000',
      key: 2
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

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
        <Row className={styles.row}>
          <Col lg={4} className={styles.leftCol}>
            <img src={item.src} alt={item.altText} />
          </Col>
          <Col lg={8} className={styles.rightCol}>
            <div className={styles.rightColContainer}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h2>{item.price}</h2>
              <button>Añadir al carrito</button>
            </div>
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <div className={styles.root}>
      <Carousel
        activeIndex={activeIndex}
        pause={false}
        ride="carousel"
        next={next}
        previous={previous}>
        <CarouselIndicators
          className={styles.indicators}
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default SecondaryCarousel;
