import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../../assets/icons/arrow.svg';
import styles from './Dropdown.module.scss';
const Dropdown = ({ title, subtitle, list }) => {
  const [dropdown, setDropdown] = useState(false);
  const [secDropdown, setSecDropdown] = useState({ name: '' });
  const [thirdDropdown, setThirdDropdown] = useState({ name: '' });
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const ArrowIcon = () => <img src={arrow} alt="arrow" />;
  const showProducts = (event, item) => {
    event.stopPropagation();
    if (item.name === secDropdown.name) {
      setSecDropdown({ name: '' });
      return;
    }
    setThirdDropdown({ name: '' });
    setSecDropdown({ name: item.name });
  };
  const showMoreProducts = (ev, product) => {
    ev.stopPropagation();
    if (product.name === thirdDropdown.name) {
      setThirdDropdown({ name: '' });
      return;
    }
    setThirdDropdown({ name: product.name });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <>
      {windowSize[0] <= 780 && dropdown && (
        <div className={styles.mobileMenu}>
          <ul className={styles.listContainer}>
            <li className={styles.listItem} onClick={() => setDropdown(false)}>
              test
            </li>
          </ul>
        </div>
      )}
      <div className={styles.dropdown__container} onClick={() => setDropdown(!dropdown)}>
        <div>
          {title} <span>{subtitle}</span>
        </div>
        <ArrowIcon />
        {windowSize[0] > 780 && dropdown && (
          <div className={styles.dropdown__menu}>
            {list?.map((item) => (
              <>
                <div
                  key={item.code}
                  className={styles.item_container}
                  onClick={(event) => showProducts(event, item)}>
                  {item.name}
                </div>
                {windowSize[0] > 780 && secDropdown.name && (
                  <div className={styles.dropdown__sec_menu}>
                    {item?.productList.map((product) =>
                      item.name === secDropdown.name ? (
                        <>
                          <div
                            key={product.code * 2}
                            className={styles.item_container}
                            onClick={(e) => showMoreProducts(e, product)}>
                            {product.name}
                          </div>
                          {windowSize[0] > 780 && thirdDropdown.name && (
                            <div className={styles.dropdown__sec_menu}>
                              {product?.productList?.map((p) =>
                                product.name === thirdDropdown.name ? (
                                  <div key={p.code} className={styles.item_container}>
                                    {p.name}
                                  </div>
                                ) : null
                              )}
                            </div>
                          )}
                        </>
                      ) : null
                    )}
                  </div>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  list: PropTypes.array
};

export default Dropdown;
