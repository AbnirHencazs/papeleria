import { Row, Col } from 'reactstrap';
import muebles from '../../../../assets/images/muebles.png';
import silleria from '../../../../assets/images/silleria.png';
import papeleria from '../../../../assets/images/papeleria.png';
import limpieza from '../../../../assets/images/limpieza.png';
import consumibles from '../../../../assets/images/consumibles.png';
import styles from './Categories.module.scss';

const Categories = () => {
  const mockCategories = [
    { imageLink: muebles, label: 'Muebles de oficina' },
    { imageLink: silleria, label: 'Sillería' },
    { imageLink: papeleria, label: 'Papelería' },
    { imageLink: limpieza, label: 'Limpieza y Cafetería' },
    { imageLink: consumibles, label: 'Consumibles de computo y accesorios' }
  ];

  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        {mockCategories.map((category, index) => (
          <Col key={index} className={styles.col}>
            <a href="">
              <img src={category.imageLink} alt={index} />
              <p>{category.label}</p>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
