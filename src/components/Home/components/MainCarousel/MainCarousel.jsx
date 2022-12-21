import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import carousel from '../../../../assets/images/carousel.png';
import carousel2 from '../../../../assets/images/carousel2.png';
import whatsapp from '../../../../assets/icons/whatsapp.svg';
// import arrow from '../../../../assets/icons/arrow.svg';
import styles from './MainCarousel.module.scss';
import Dropdown from '../Dropdown/Dropdown';

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

  const categoryList = [
    {
      code: 1,
      name: 'Muebles',
      productList: [
        { name: 'Ejecutivos', code: 1 },
        { name: 'Operativos', code: 2 },
        { name: 'Credenzas', code: 57 },
        { name: 'Mámparas', code: 3 },
        { name: 'Mesas de juntas', code: 4 },
        { name: 'Recepción', code: 4 },
        { name: 'Comedores', code: 7 },
        { name: 'Archiveros', code: 8 },
        { name: 'Home office', code: 9 },
        { name: 'Lockers', code: 50 },
        { name: 'Estantes y soportes', code: 52 },
        { name: 'Gabinetes y libreros', code: 55 },
        { name: 'Cajoneras', code: 56 },
        { name: 'Accesorios', code: 53 },
        { name: 'Piezas por separado' }
      ]
    },
    {
      code: 2,
      name: 'Sillas',
      productList: [
        { name: 'Pentakill', code: 1 },
        { name: 'Diego', code: 2 },
        { name: 'Es', code: 57 },
        { name: 'mi', code: 3 },
        { name: 'Mesa de juntas', code: 4 },
        { name: 'Recepción', code: 4 },
        { name: 'Comedores', code: 7 },
        { name: 'Archiveros', code: 8 },
        { name: 'Home office', code: 9 },
        { name: 'Lockers', code: 50 },
        { name: 'Estantes y soportes', code: 52 },
        { name: 'Gabinetes y libreros', code: 55 },
        { name: 'Cajoneras', code: 56 },
        { name: 'Accesorios', code: 53 },
        { name: 'Piezas por separado' }
      ]
    },
    {
      code: 3,
      name: 'Escolar',
      productList: []
    },
    {
      code: 4,
      name: 'Oficina',
      productList: []
    },
    {
      code: 5,
      name: 'Papel',
      productList: []
    },
    {
      code: 6,
      name: 'Consumibles',
      productList: []
    },
    {
      code: 7,
      name: 'Limpieza',
      productList: []
    },
    {
      code: 8,
      name: 'Restaurante',
      productList: []
    },
    {
      code: 9,
      name: 'Paquetes',
      productList: []
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // const ArrowIcon = () => <img src={arrow} alt="arrow" />

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
        <Dropdown title="Regístrate" subtitle="Regístrate y cotiza" />

        <Dropdown title="Categorías" subtitle="Filtra tus productos" list={categoryList} />

        <Dropdown title="Productos" subtitle="Conoce nuestros productos" />
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
