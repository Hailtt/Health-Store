import { Button, Image } from '@components/primitive';
import classNames from 'classnames';
import { FC } from 'react';
import { useSwiperSlide } from 'swiper/react';

interface ISlideProps {
  image: string;
  listTitle: string[];
  caption: string;
  color?: string;
}

const Slide: FC<ISlideProps> = ({ image, listTitle, caption, color }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={classNames(
        'ks-home-slide',
        { '-active': swiperSlide.isActive },
        { '-next': swiperSlide.isNext },
      )}
    >
      <div className="overlay"></div>

      <Image objectFit="cover" src={image} alt={image} className="image _overflow-hidden" />

      <div className="content">
        <div className="inner">
          {listTitle.map((title, idx) => (
            <h2 className="title _overflow-hidden" key={`title-${idx}`}>
              <span
                className={classNames(
                  `text _translateY-hidden `,
                  { '_translateY-show': swiperSlide.isActive },
                  `-${color}`,
                )}
              >
                {title}
              </span>
            </h2>
          ))}

          <div className="caption _overflow-hidden">
            <p
              className={classNames(
                `text _translateY-hidden`,
                { '_translateY-show': swiperSlide.isActive },
                `-${color}`,
              )}
            >
              {caption}
            </p>
          </div>

          <div className="ks-home-slide-button _overflow-hidden">
            <Button
              color="light"
              className={classNames(`action _delay _translateY-hidden`, {
                '_translateY-show': swiperSlide.isActive,
              })}
              endAdornment={<i className="fa-solid fa-angle-right fa-sm" />}
            >
              Shop Our Teas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
