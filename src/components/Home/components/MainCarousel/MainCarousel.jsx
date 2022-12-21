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
        { name: 'Recepción', code: 5 },
        { name: 'Comedores', code: 6 },
        { name: 'Sofás', code: 7 },
        { name: 'Archiveros', code: 8 },
        { name: 'Home office', code: 9 },
        { name: 'Lockers', code: 50 },
        { name: 'Estantes y soportes', code: 52 },
        { name: 'Gabinetes y libreros', code: 55 },
        { name: 'Cajoneras', code: 56 },
        { name: 'Accesorios', code: 53 },
        { name: 'Piezas por separadooo', code: 54 }
      ]
    },
    {
      code: 2,
      name: 'Sillas',
      productList: [
        { name: 'Ejecutivas', code: 11 },
        { name: 'Operativas', code: 12 },
        { name: 'Visitantes y eventos', code: 13 },
        { name: 'Bancas', code: 14 },
        { name: 'Industrial', code: 15 },
        { name: 'Accesorios por separado', code: 51 }
      ]
    },
    {
      code: 3,
      name: 'Escolar',
      productList: [
        {
          name: 'Artículos escolares',
          code: 16,
          productList: [
            { name: 'Escritura' },
            { name: 'Borradores y correctores', code: 2 },
            { name: 'Calculadoras', code: 3 },
            { name: 'Juegos de geometría, abacos y reglas', code: 4 },
            { name: 'Manualidades', code: 5 },
            { name: 'Pegamentos', code: 6 },
            { name: 'Plastilinas', code: 7 },
            { name: 'Sacapuntas', code: 8 },
            { name: 'Silicón y aplicador', code: 9 },
            { name: 'Tijeras', code: 10 }
          ]
        },
        {
          name: 'Cuadernos y libretas',
          code: 18,
          productList: [
            { name: 'Blocks', code: 16 },
            { name: 'Cuadernos', code: 17 },
            { name: 'Libretas', code: 18 },
            { name: 'Libros', code: 19 }
          ]
        },
        {
          name: 'Dibujo',
          code: 19,
          productList: [
            { name: 'Pintura', code: 78 },
            { name: 'Crayones', code: 20 },
            { name: 'Lápices de colores', code: 21 },
            { name: 'Marcadores y plumones', code: 22 }
          ]
        },
        {
          name: 'Diccionarios y libros',
          code: 20,
          productList: [{ name: 'Diccionarios', code: 23 }]
        }
      ]
    },
    {
      code: 4,
      name: 'Oficina',
      productList: [
        {
          name: 'Archivo',
          code: 21,
          productList: [
            { name: 'Archivadores', code: 24 },
            { name: 'Bolsas de empaque', code: 80 },
            { name: 'Cajas', code: 25 },
            { name: 'Carpetas y separadores', code: 26 },
            { name: 'Folders', code: 27 },
            { name: 'Micas y protectores', code: 28 },
            { name: 'Pastas plásticas y arillos', code: 87 },
            { name: 'Porta documentos', code: 29 },
            { name: 'Sobres', code: 91 },
            { name: 'Gafetes', code: 30 }
          ]
        },
        {
          name: 'Artículos para escritorio',
          code: 22,
          productList: [
            { name: 'Agarra papeles', code: 31 },
            { name: 'Broches', code: 32 },
            { name: 'Clips y pines', code: 33 },
            { name: 'Correctores', code: 34 },
            { name: 'Cuenta fácil', code: 35 },
            { name: 'Cuchillas, tijeras y guillotinas', code: 36 },
            { name: 'Etiquetas y refuerzos', code: 82 },
            { name: 'Engrapadoras y desengrapadoras', code: 37 },
            { name: 'Foliador', code: 38 },
            { name: 'Libretas y blocks', code: 39 },
            { name: 'Lupas e imanes', code: 83 },
            { name: 'Ligas', code: 40 },
            { name: 'Micas y protectores', code: 41 },
            { name: 'Notas adhesivas', code: 42 },
            { name: 'Organizadores, charolas y tablas', code: 43 },
            { name: 'Perforadoras', code: 44 },
            { name: 'Reglas y cinta métrica', code: 81 },
            { name: 'Sacapuntas', code: 90 }
          ]
        },
        {
          name: 'Artículos para oficina',
          code: 23,
          productList: [
            { name: 'Agendas', code: 79 },
            { name: 'Baterías', code: 45 },
            { name: 'Cajas para dinero', code: 46 },
            { name: 'Cojines y sellos', code: 47 },
            { name: 'Contables', code: 48 },
            { name: 'Gafetes', code: 49 },
            { name: 'Mochilas y maletines', code: 50 },
            { name: 'Plástico de emplaye', code: 88 },
            { name: 'Pegamentos instantáneos', code: 51 },
            { name: 'Relojes', code: 89 },
            { name: 'Portafolio', code: 52 }
          ]
        },
        {
          name: 'Calculadoras y sumadoras',
          code: 24,
          productList: [
            { name: 'Calculadoras', code: 53 },
            { name: 'Calculadoras con impresión', code: 54 },
            { name: 'Papel para sumadoras', code: 55 }
          ]
        },
        {
          name: 'Cintas adhesivas',
          code: 17,
          productList: [
            { name: 'Cintas canela', code: 11 },
            { name: 'Cintas especiales', code: 12 },
            { name: 'Cintas masking tape', code: 13 },
            { name: 'Cintas transparentes', code: 14 },
            { name: 'Despachadores', code: 15 }
          ]
        },
        {
          name: 'Corchos y pizarrones',
          code: 25,
          productList: [
            { name: 'Artículos para pizarrón', code: 57 },
            { name: 'Corchos', code: 58 },
            { name: 'Pizarrones y pintarrones', code: 59 }
          ]
        },
        {
          name: 'Escritura',
          code: 26,
          productList: [
            { name: 'Bolígrafos', code: 60 },
            { name: 'Crayones industriales y especiales', code: 61 },
            { name: 'Correctores', code: 62 },
            { name: 'Lapiceros y puntillas', code: 63 },
            { name: 'Marcadores de cera', code: 84 },
            { name: 'Marcadores para cristal', code: 64 },
            { name: 'Marcadores permanentes', code: 65 },
            { name: 'Marcatextos', code: 66 },
            { name: 'Plumones', code: 67 }
          ]
        }
      ]
    },
    {
      code: 5,
      name: 'Papel',
      productList: [
        {
          name: 'Hojas de papel',
          code: 27,
          productList: [
            { name: 'Papel carta blanco', code: 68 },
            { name: 'Papel carta color', code: 69 },
            { name: 'Papel especial', code: 85 },
            { name: 'Papel china', code: 70 },
            { name: 'Papel contac', code: 71 },
            { name: 'Papel corrugado', code: 72 },
            { name: 'Papel crepé', code: 73 },
            { name: 'Papel foamy', code: 74 },
            { name: 'Papel p/plotter y pliegos', code: 86 },
            { name: 'Papel lustre', code: 75 },
            { name: 'Papel oficio', code: 76 },
            { name: 'Papel stock o pelado', code: 77 }
          ]
        },
        { name: 'Cartulinas', code: 28 },
        { name: 'Etiquetas', code: 29 },
        { name: 'Pliegos', code: 30 },
        { name: 'Rollos', code: 31 }
      ]
    },
    {
      code: 6,
      name: 'Consumibles',
      productList: [
        { name: 'Toners', code: 32 },
        { name: 'Tintas y cartuchos', code: 33 },
        { name: 'Accesorios de cómputo', code: 34 },
        { name: 'Accesorios de impresión', code: 35 },
        { name: 'Impresoras', code: 49 }
      ]
    },
    {
      code: 7,
      name: 'Limpieza',
      productList: [
        { name: 'Bebidas', code: 46 },
        { name: 'Aromatizantes', code: 36 },
        { name: 'Bolsas y cestos de basura', code: 37 },
        { name: 'Cafetería', code: 38 },
        { name: 'Covid-19', code: 39 },
        { name: 'Desechables', code: 40 },
        { name: 'Detergentes', code: 41 },
        { name: 'Electrodomésticos', code: 47 },
        { name: 'Higiene y botiquín', code: 42 },
        { name: 'Utensilios de cocina', code: 48 },
        { name: 'Utensilios de limpieza', code: 43 }
      ]
    },
    {
      code: 8,
      name: 'Restaurante',
      productList: [
        { name: 'Mesas', code: 44 },
        { name: 'Sillas', code: 45 }
      ]
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
        <Dropdown title="Regístrate" subtitle="Regístrate y cotiza" list={[]} />

        <Dropdown title="Categorías" subtitle="Filtra tus productos" list={categoryList} />

        <Dropdown title="Productos" subtitle="Conoce nuestros productos" list={[]} />
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
