import KsLayout from '@/layout';
import { useBlogsQuery } from '@/query/blogs/get-blogs';
import { useProductCategoriesQuery } from '@/query/categories/get-categories';
import { useProductsQuery } from '@/query/products/get-products';
import { breakpoints } from '@/utils/constants';
import { routes } from '@/utils/routes';
import { BlogSlide, ProductSlides } from '@components/compound';
import { Button, Image, Link } from '@components/primitive';
import { LIMIT } from '@utils/limit';
import { map } from 'lodash';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerCard from './BannerCard';
import { BANNERS, QUANTITY, SLIDES, TESTIMONIALS } from './constants';
import Slide from './Slide';
import Testimonial from './Testimonial';

const Home = () => {
  const { data: products } = useProductsQuery({ limit: LIMIT.HOME_PRODUCTS, page: 1 });
  const { data: blogs } = useBlogsQuery({ limit: LIMIT.HOME_BLOGS, page: 1 });
  const { data: categories } = useProductCategoriesQuery({
    limit: LIMIT.HOME_COLLECTIONS,
    page: 1,
  });

  return (
    <KsLayout title="Home 1">
      <div className="ks-home">
        <section className="ks-home-slides">
          <Button
            className="action -left"
            iconOnly
            circle
            color="light"
            endAdornment={<i className="fa-light fa-chevron-left fa-xl icon" />}
          />
          <Swiper
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            loop
            allowTouchMove={false}
            navigation={{
              nextEl: '.ks-home-slides > .action.-right',
              prevEl: '.ks-home-slides > .action.-left',
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            effect="fade"
            speed={1500}
            pagination={{
              clickable: true,
            }}
            className="swiper"
          >
            {map(SLIDES, ({ image, listTitle, caption, color }, idx) => (
              <SwiperSlide key={`home-slide-${idx}`}>
                <Slide image={image} listTitle={listTitle} caption={caption} color={color} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="action -right"
            iconOnly
            circle
            color="light"
            endAdornment={<i className="fa-light fa-chevron-right fa-xl icon" />}
          />
        </section>

        <section className="ks-home-banners">
          <div className="ks-container content">
            <div className="wrapper">
              {map(BANNERS, (banner, idx) => (
                <BannerCard
                  data={banner}
                  action="Mua ngay"
                  size="small"
                  key={`home-banner-${idx}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="ks-home-products">
          <div className="ks-container content">
            <div className="header">
              <h2 className="title">Sản Phẩm Bán Chạy</h2>
              <div className="readmore -bottom">
                <Link
                  href={routes.PRODUCTS}
                  className="action"
                  title=""
                  underline
                  color="primary"
                  rightIcon={<i className="fa-regular fa-chevron-right icon" />}
                >
                  Xem thêm
                </Link>
              </div>
            </div>
            <ProductSlides products={products?.items || []} />
          </div>
        </section>

        <section className="ks-home-collections">
          <div className="ks-container content">
            <div className="header">
              <h2 className="title">Bộ sưu tập</h2>
            </div>
            <div className="grid">
              {map(categories?.items, ({ id, name, image }) => (
                <div className="card" key={`collection-${id}`}>
                  <div className="ks-home-collection">
                    <div className="thumbnail">
                      <Link
                        className="link"
                        href={{
                          pathname: routes.PRODUCTS,
                          query: {
                            category: id,
                          },
                        }}
                        title={name}
                      >
                        <Image
                          src={image}
                          alt=""
                          objectFit="cover"
                          className="image"
                          ratio="square"
                        />
                      </Link>
                    </div>
                    <div className="container">
                      <Link
                        href={{
                          pathname: routes.PRODUCTS,
                          query: {
                            category: id,
                          },
                        }}
                        className="title"
                        color="white"
                        size="lg"
                        title={name}
                      >
                        {name}
                      </Link>
                      <div className="btn">
                        <Link
                          href={{
                            pathname: routes.PRODUCTS,
                            query: {
                              category: id,
                            },
                          }}
                          title={name}
                          className="link"
                          size="sm"
                          color="white"
                          rightIcon={<i className="fa-regular fa-chevron-right icon" />}
                        >
                          Mua ngay
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ks-home-quantity">
          <div className="ks-container content">
            {map(QUANTITY, (item, idx) => (
              <div key={`quantity-${idx}`} className="quantity">
                <div className="image">
                  <div className={item.classNameIcon}>{item.image}</div>
                </div>
                <div className="title">{item.title}</div>
                <div className="name">{item.name}</div>
                <div className="description">{item.description}</div>
                <Link
                  className="link"
                  href="/"
                  title=""
                  rightIcon={<i className="fa-solid fa-chevron-right fa-xs icon" />}
                  underline
                  color="black"
                  size="sm"
                >
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="ks-home-testimonials">
          <div className="ks-container content">
            <div className="header">
              <h2 className="title">Ý kiến khách hàng</h2>
            </div>
            <Swiper
              breakpoints={{
                [breakpoints.xl]: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                [breakpoints.md]: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                [breakpoints.xs]: {
                  slidesPerView: 1,
                },
              }}
              modules={[Autoplay]}
              loop
              speed={700}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              className="swiper"
            >
              {map(TESTIMONIALS, ({ image, name, province, city, district, review }, idx) => (
                <SwiperSlide key={`testimonial-${idx}`}>
                  <Testimonial
                    image={image}
                    name={name}
                    province={province}
                    city={city}
                    district={district}
                    review={review}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {blogs?.items.length !== 0 && (
          <section className="ks-home-blogs">
            <div className="ks-container content">
              <div className="header">
                <h2 className="title">TIN MỚI NHẤT</h2>
                <div className="viewmore -bottom">
                  <Link
                    href="/"
                    className="action"
                    title=""
                    underline
                    color="primary"
                    rightIcon={<i className="fa-regular fa-chevron-right icon" />}
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>

              <BlogSlide blogs={blogs?.items || []} />
            </div>
          </section>
        )}

        <section className="ks-home-trailer">
          <iframe
            className="video"
            src="https://player.vimeo.com/video/735831672?muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963"
            allowFullScreen
          />
          <span className="overlay" />
          <div className="content">
            <div className="info">
              <p className="heading">TAKE A trip</p>
              <h2 className="title">
                Vì sức khỏe cộng đồng <br />
                Phòng hỗ trợ trị liệu miễn phí 100%
              </h2>
              <ul className="description">
                <li className="item">** Phục hồi chức năng vận động do tai biến mạch máu não **</li>
                <li className="item">** Gai cột sóng, thoát vị đĩa đệm, thoái hóa đốt sống **</li>
                <li className="item">** Đau vai cổ gáy, thần kinh tọa, tê bì chân tay **</li>
              </ul>
              <Button
                className="button"
                variant="outlined"
                endAdornment={<i className="fa-solid fa-chevron-right icon" />}
              >
                Xem tất cả sản phẩm
              </Button>
            </div>
          </div>
        </section>
      </div>
    </KsLayout>
  );
};

export default Home;
