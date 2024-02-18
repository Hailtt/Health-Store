import { Image, Link } from '@components/primitive';
import { FC } from 'react';
import { IHomeBanner } from './constants';
import classNames from 'classnames';

export interface IBannerProps {
  data: IHomeBanner;
  action: string;
  size?: 'small' | 'medium';
  className?: string;
}

const BannerCard: FC<IBannerProps> = ({ data, action, size, className }) => {
  const { image, title, description, color } = data;
  return (
    <div
      className={classNames('ks-home-banner', `-${color}`, `-${size}`, className)}
      style={{ color: color || 'unset' }}
    >
      <div className="wrapper">
        <Link href="/" title="" className="link">
          <Image src={image || ''} alt={title} objectFit="cover" className="image" />
        </Link>
        <div className="info">
          <div className="inner">
            <h2 className="title">
              <Link href="" title="" className="link">
                {title}
              </Link>
            </h2>

            <p className="description">{description}</p>

            <Link
              href="/"
              title={title}
              color={color}
              size="sm"
              className="link"
              underline
              rightIcon={<i className="fa-regular fa-chevron-right icon" />}
            >
              {action}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
