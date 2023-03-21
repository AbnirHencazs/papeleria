import { useState } from 'react';
import styles from './DropdownMenu.module.scss';
import PropTypes from 'prop-types';

const DropdownMenu = ({ list }) => {
  const [secDropdown, setSecDropdown] = useState({ name: '' });
  const [thirdDropdown, setThirdDropdown] = useState({ name: '' });
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
    <div className={styles.dropdownMenuContainer}>
      <div className={styles.firstMenu}>
        {list?.map((item) => (
          <>
            <div
              key={item.code}
              className={styles.itemContainer}
              onClick={(event) => showProducts(event, item)}>
              {item.name}
            </div>
            {secDropdown.name && (
              <div className={styles.secMenu}>
                {item?.productList.map((product) =>
                  item.name === secDropdown.name ? (
                    <>
                      <div
                        key={product.code * 2}
                        className={styles.itemContainer}
                        onClick={(e) => showMoreProducts(e, product)}>
                        {product.name}
                      </div>
                      {thirdDropdown.name && (
                        <div className={styles.thirdMenu}>
                          {product?.productList?.map((p) =>
                            product.name === thirdDropdown.name ? (
                              <div key={p.code} className={styles.itemContainer}>
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
    </div>
  );
};

DropdownMenu.propTypes = {
  list: PropTypes.array
};

export default DropdownMenu;
