import { Drawer } from '@mui/material';
import { map, pickBy } from 'lodash';
import { FC, useState } from 'react';
import { CART } from './constant';
import { Button, Image } from '@components/primitive';

interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<ICartDrawerProps> = ({ open, onClose }) => {
  const [cart, setCart] = useState(CART);

  const handleDeleteProduct = (idx: number) => {
    setCart((prev) => prev.filter((item, index) => index !== idx));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="ks-cart-drawer">
        <div className="header">
          <span className="title">Giỏ hàng</span>
          <span className="close" onClick={onClose}>
            ĐÓNG <i className="fa-light fa-xmark icon" />
          </span>
        </div>

        <div className="content">
          <ul className="products">
            {cart.length !== 0 ? (
              map(cart, ({ images, name, price, count }, idx) => (
                <li className="item" key={`cart-${idx}`}>
                  <Image
                    src={images[0]}
                    alt="cart"
                    objectFit="contain"
                    ratio="square"
                    className="image"
                  />
                  <div className="info">
                    <div className="name">{name}</div>
                    <div className="group">
                      {count} x <span className="price">${price}</span>
                    </div>
                  </div>
                  <span className="close" onClick={() => handleDeleteProduct(idx)}>
                    <i className="fa-light fa-xmark icon" />
                  </span>
                </li>
              ))
            ) : (
              <p className="empty">No products in the cart.</p>
            )}
          </ul>
        </div>

        {cart.length !== 0 && (
          <div className="footer">
            <div className="total">
              <span className="subtotal">Tổng:</span>
              <span className="price">$1,272</span>
            </div>
            <Button fullWidth color="light" className="button cart">
              Xem giỏ hàng
            </Button>
            <Button fullWidth className="button checkout">
              Thanh toán
            </Button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
