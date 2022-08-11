import React, { useState } from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import chair from '../../../../assets/images/chair.jpg';
import chair2 from '../../../../assets/images/chair2.jpg';
import placeholder from '../../../../assets/images/placeholder.jpg';
import desk from '../../../../assets/images/desk.jpg';
import styles from './MostSearched.module.scss';

const MostSearched = () => {
  const mockProducts = [
    {
      imageLink: chair,
      title: 'Silla ejecutiva Reqüiez',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $19,600'
    },
    {
      imageLink: placeholder,
      title: 'Folder Oxford carta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $1.30'
    },
    {
      imageLink: desk,
      title: 'Haken Drei',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $15,500'
    },
    {
      imageLink: chair2,
      title: 'Sillón ejecutivo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $22,200'
    }
  ];

  const mockProducts2 = [
    {
      imageLink: chair,
      title: 'Silla ejecutiva Reqüiez',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $19,600'
    },
    {
      imageLink: placeholder,
      title: 'Folder Oxford carta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $1.30'
    }
  ];

  const items = [
    { products: mockProducts, key: 1 },
    { products: mockProducts2, key: 2 }
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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={styles.carouselItem}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}>
        <Row className={styles.row}>
          {item.products.map((product, index) => (
            <Col lg={3} key={index} className={styles.col}>
              <img src={product.imageLink} alt="" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button>Añadir al carrito</button>
            </Col>
          ))}
        </Row>
      </CarouselItem>
    );
  });

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Los más buscados</h2>
      <Carousel
        className={styles.carousel}
        activeIndex={activeIndex}
        interval={0}
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

export default MostSearched;
