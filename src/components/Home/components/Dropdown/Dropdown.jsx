import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../../assets/icons/arrow.svg';
import styles from './Dropdown.module.scss';
const Dropdown = ({ title, subtitle, list }) => {
  const [dropdown, setDropdown] = useState(false);
  const [secDropdown, setSecDropdown] = useState({ name: '', show: false });
  const ArrowIcon = () => <img src={arrow} alt="arrow" />;
  const showProducts = (event, item) => {
    event.stopPropagation();
    setSecDropdown({ name: item.name, show: !secDropdown.show });
  };
  return (
    <div className={styles.dropdown__container} onClick={() => setDropdown(!dropdown)}>
      <div>
        {title} <span>{subtitle}</span>
      </div>
      <ArrowIcon />
      {dropdown && (
        <div className={styles.dropdown__menu}>
          {list.map((item) => (
            <>
              <div
                key={item.code}
                className={styles.item_container}
                onClick={(event) => showProducts(event, item)}>
                {item.name}
              </div>
              {secDropdown.show && (
                <div className={styles.dropdown__sec_menu}>
                  {item?.productList.map((product) =>
                    item.name === secDropdown.name ? (
                      <div key={product.code * 2} className={styles.item_container}>
                        {product.name}
                      </div>
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
