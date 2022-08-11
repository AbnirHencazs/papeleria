import {
  Brands,
  Categories,
  Footer,
  MainCarousel,
  MostSearched,
  SecondaryCarousel,
  Navbar
} from './components';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <MainCarousel />
      <Categories />
      <Brands />
      <MostSearched />
      <SecondaryCarousel />
      <Footer />
    </div>
  );
};

export default Home;
