import { FC } from 'react';
import { BlogCard } from '../BlogCard';
import { map } from 'lodash';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import { breakpoints } from '@/utils/constants';
import { IBlog } from '@interfaces/blog';

interface IBlogSlideProps {
  blogs: IBlog[];
}

export const BlogSlide: FC<IBlogSlideProps> = ({ blogs }) => {
  return (
    <div className="ks-blog-slide">
      <Swiper
        breakpoints={{
          [breakpoints.sm]: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          [breakpoints.md]: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          [breakpoints.lg]: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          [breakpoints.xl]: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{
          clickable: false,
        }}
        className="swiper"
      >
        {map(blogs, (it, idx) => (
          <SwiperSlide key={`blog-slide-${idx}`}>
            <BlogCard data={it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
