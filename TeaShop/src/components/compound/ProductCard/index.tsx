import { Badge, Button, Image, Link } from '@components/primitive';
import { Rating } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { IProduct } from '@interfaces/product';
import { routes } from '@utils/routes';
import { Tooltip } from '@components/compound';
import { isEmpty } from 'lodash';
export interface IProductCardProps {
  data: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const { id, images, name, price, rating, discount } = data;

  const [activeThumb, setActiveThumb] = useState<string>('');

  useEffect(() => {
    if (isEmpty(images)) return;

    if (!images[0]) return;

    if (!images[1]) return setActiveThumb(images[0]);

    setActiveThumb(images[1]);
  }, [images]);

  return (
    <div className="ks-product-card">
      <div className="thumbnail">
        <Link
          title={name}
          href={{
            pathname: routes.PRODUCT,
            query: {
              slug: id,
            },
          }}
          className="images"
        >
          <Image
            src={!isEmpty(images) ? images[0] : ''}
            alt={!isEmpty(images) ? images[0] : ''}
            objectFit="cover"
            className="image -main"
            ratio="square"
          />
          <Image
            src={activeThumb}
            alt={activeThumb}
            objectFit="cover"
            className="image -secondary"
          />
        </Link>

        {discount && <Badge label={`${discount}% OFF`} className="badge" />}

        <div className="actions">
          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Add to wishlist" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-heart icon"></i>
              </span>
            </Tooltip>
          </Button>

          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Compare" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-arrow-down-arrow-up fa-rotate-270"></i>
              </span>
            </Tooltip>
          </Button>
          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Quick View" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-magnifying-glass-plus"></i>
              </span>
            </Tooltip>
          </Button>
        </div>
      </div>

      <div className="content">
        <div className="rating">
          <Rating precision={0.5} value={Number(rating)} readOnly size="small" />
        </div>
        <div className="name">
          <Link
            title={name}
            className="link"
            href={{
              pathname: routes.PRODUCT,
              query: {
                slug: id,
              },
            }}
          >
            {name}
          </Link>
        </div>

        <div className="footer">
          <p className="price">
            <span className="">
              {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
              })}
            </span>
          </p>

          <div className="buy">
            <Button className="button" iconOnly variant="outlined" noBorder>
              <Tooltip title="Select options" placement="top" arrow>
                <i className="fa-light fa-bag-shopping icon" />
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
