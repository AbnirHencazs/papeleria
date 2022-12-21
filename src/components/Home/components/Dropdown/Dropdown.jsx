import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../../assets/icons/arrow.svg';
import styles from './Dropdown.module.scss';
const Dropdown = ({ title, subtitle, list }) => {
  const [dropdown, setDropdown] = useState(false);
  const [secDropdown, setSecDropdown] = useState({ name: '' });
  const [thirdDropdown, setThirdDropdown] = useState({ name: '' });
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
  return (
    <div className={styles.dropdown__container} onClick={() => setDropdown(!dropdown)}>
      <div>
        {title} <span>{subtitle}</span>
      </div>
      <ArrowIcon />
      {dropdown && (
        <div className={styles.dropdown__menu}>
          {list?.map((item) => (
            <>
              <div
                key={item.code}
                className={styles.item_container}
                onClick={(event) => showProducts(event, item)}>
                {item.name}
              </div>
              {secDropdown.name && (
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
                        {thirdDropdown.name && (
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
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  list: PropTypes.array
};

export default Dropdown;
