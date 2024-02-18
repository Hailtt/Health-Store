import { Button, Link, Image } from '@components/primitive';
import { GroupInput } from '@components/compound';
import {
  BRAND,
  ABOUT_LINKS,
  HELP_CENTER_LINKS,
  SHOP_LINKS,
  CONTACT_LINKS,
  SERVICE,
} from './constant';
import { map } from 'lodash';
import { useSubscribeMutation } from '@/query/subscribers/subscribe-mutation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { mutate } = useSubscribeMutation();

  const { values, touched, errors, resetForm, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email(),
    }),
    onSubmit: (data) => {
      mutate(data.email.trim());
      resetForm();
    },
  });

  return (
    <footer className="ks-footer">
      <section className="ks-footer-contact">
        <div className="ks-container wrapper">
          <div className="images">
            <Image src="/images/ft1_decor1.png" alt="" objectFit="cover" className="image" />
          </div>
          <div className="title">
            <div className="heading">Theo dõi tin tức</div>
            <div className="description">
              Hãy đăng kí để được cập nhật kiến thức về sức khỏe và thông tin ưu đãi từ chúng tôi.
            </div>
          </div>
          <div className="search">
            <GroupInput
              type="text"
              placeholder="Nhập email của bạn"
              className="container"
              name="email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={({ name, value }: { name: string; value: string | number }) => {
                return setFieldValue(name, value);
              }}
              fadePlaceholderShown
              endAdornment={
                <Button className="btn" onClick={() => handleSubmit()}>
                  Đăng ký
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <section className="ks-footer-services">
        <div className="ks-container wrapper">
          <div className="row">
            {map(SERVICE, ({ className, description, title }) => (
              <div className="col-12 col-sm-6 col-md-3 col-lg info" key={`service-item-${title}`}>
                <div className="ks-footer-service">
                  <span className="icon">
                    <i className={className}></i>
                  </span>
                  <p className="heading">{title}</p>
                  <p className="description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="images">
          <Image src="/images/ft1_decor2.png" className="image" objectFit="cover" alt="image" />
        </div>
      </section>

      <div className="top">
        <div className="ks-container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="footer-widget">
                <Image src="/images/logo.png" className="logo" objectFit="contain" alt="image" />
              </div>
            </div>
            <div className="col-12 order-md-12 col-md-3 col-lg-2">
              <div className="footer-widget">
                <h3 className="heading">Về chúng tôi</h3>
                <ul className="menu">
                  {map(ABOUT_LINKS, ({ label, route }) => (
                    <li className="item" key={`footer-menu-item-${label}`}>
                      <Link
                        href={route}
                        textTransform="capitalize"
                        color="primary"
                        className="link"
                        title={label}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 order-md-12 col-md-3 col-lg-2">
              <div className="footer-widget">
                <h3 className="heading">Cửa hàng</h3>
                <ul className="menu">
                  {map(SHOP_LINKS, ({ label, route }) => (
                    <li className="item" key={`footer-menu-item-${label}`}>
                      <Link
                        href={route}
                        textTransform="capitalize"
                        color="primary"
                        className="link"
                        title={label}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 order-md-12 col-md-3 col-lg-2">
              <div className="footer-widget">
                <h3 className="heading">Danh mục</h3>
                <ul className="menu">
                  {map(HELP_CENTER_LINKS, ({ label, route }) => (
                    <li className="item" key={`footer-menu-item-${label}`}>
                      <Link
                        href={route}
                        textTransform="capitalize"
                        color="primary"
                        className="link"
                        title={label}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-3 order-lg-12">
              <div className="footer-widget">
                <h3 className="heading">Công ty Ánh Dương</h3>
                {map(CONTACT_LINKS, ({ address, branch, phone1, phone2, web }) => (
                  <div className="address" key={`footer-contact-item-${address}`}>
                    Trụ sở: {address}
                    <br />
                    Chi Nhánh: {branch}
                    <br />
                    Hotline: {phone1}- {phone2}
                    <br />
                    Web: {web}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
        <span className="title">PAYMENTS WE ACCEPT</span>
        <Image src="/images/payment.png" className="image" objectFit="cover" alt="image" />
      </div>

      <div className="ks-container wrapper">
        <div className="bottom">
          <div className="title">
            <p>Copyright © 2023 TeaPoz. All rights reserved</p>
          </div>
          <div className="item">
            <div className="brand">
              {map(BRAND, ({ className }) => (
                <Button
                  key={`footer-menu-item-${className}`}
                  className="button"
                  iconOnly
                  variant="outlined"
                  noBorder
                >
                  <span className="icon">
                    <i className={className} />
                  </span>
                </Button>
              ))}
            </div>

            <div className="scroll" onClick={scrollToTop}>
              <span className="title">Back to top</span>
              <Button iconOnly variant="outlined" className="icon" noBorder>
                <i className="fa-sharp fa-light fa-arrow-up" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
