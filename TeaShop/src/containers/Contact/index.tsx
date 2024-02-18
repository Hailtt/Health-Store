import KsLayout from '@/layout';
import { GroupInput, GroupTextarea } from '@components/compound';
import { Button, Link } from '@components/primitive';
import { Box, Modal } from '@mui/material';
import ClockIcon from '@svg/contact/hours.svg';
import LocationIcon from '@svg/contact/location.svg';
import MailIcon from '@svg/contact/mail.svg';
import { routes } from '@utils/routes';
import { useFormik } from 'formik';
import { ReactNode, useState } from 'react';
import * as Yup from 'yup';

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { values, errors, touched, setFieldValue, resetForm, handleSubmit, setFieldTouched } =
    useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        phone: Yup.string()
          .required()
          .matches(/^[0-9]/, 'Please enter a telephone number.'),
        email: Yup.string().email().required(),
        message: Yup.string().required(),
      }),
      onSubmit: (e) => {
        setOpen(true);
        resetForm();
        console.log(e);
      },
    });

  const handleChange = ({ name, value }: { name: string; value: string | number }) => {
    setFieldValue(name, value);
  };

  const handleBlur = ({ name }: { name: string }) => {
    setFieldTouched(name);
  };

  const breadcrumbs: ReactNode[] = [
    <Link href={routes.HOME} title="homepage" key="homepage" className="ks-page-header-link">
      Home Page
    </Link>,
    <p className="ks-page-header-text" key="contact">
      Contact
    </p>,
  ];

  return (
    <KsLayout
      title="Liên hệ"
      hasPageHeader
      pageHeaderTitle="Contact"
      hasOverlay
      breadcrumbsColor="white"
      pageHeaderBackground="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/page-bc-bg.jpg"
      breadcrumbs={breadcrumbs}
      colorTitle="white"
    >
      <div className="ks-contact ks-container">
        <section className="ks-contact-info">
          <h2 className="heading">Get In Touch</h2>
          <div className="details">
            <div className="email item">
              <h5 className="title">Contact</h5>
              <div className="text">
                T: + (406) 555-0120
                <br />
                E: support@example.com
              </div>
              <MailIcon className="icon" />
            </div>
            <div className="hours item">
              <h5 className="title">Hours</h5>
              <div className="text">
                <span className="day">Mon-Sat:</span>
                7.00 am – 8.00 pm
                <br />
                <span className="day">Sunday:</span>
                8.00 am – 6.00 pm
              </div>
              <ClockIcon className="icon" />
            </div>
            <div className="location item">
              <h5 className="title">Location</h5>
              <div className="text">
                2972 Westheimer Rd. Santa Ana,
                <br />
                Illinois, USA
              </div>
              <LocationIcon className="icon" />
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95500809775578!2d106.63221674696642!3d10.789843774724693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ff7cb435480278f%3A0xc9c59473500ef32!2sKytesoft%20Technology!5e0!3m2!1svi!2s!4v1689786658554!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="frame"
            />
          </div>

          <div className="message">
            <h2 className="heading">Leave Us a Message</h2>
            <p className="text">
              Fill all information details to consult with us to get sevices from us
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="container">
                <GroupInput
                  type="text"
                  placeholder="Name *"
                  className="group"
                  name="name"
                  onBlur={handleBlur}
                  fadePlaceholderShown
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  onChange={handleChange}
                />
                <GroupInput
                  type="text"
                  placeholder="Phone *"
                  className="group"
                  name="phone"
                  onBlur={handleBlur}
                  fadePlaceholderShown
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                  onChange={handleChange}
                />
                <GroupInput
                  type="text"
                  placeholder="Email *"
                  className="group"
                  name="email"
                  onBlur={handleBlur}
                  fadePlaceholderShown
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                />
                <GroupTextarea
                  className="group"
                  placeholder="Enter your message...."
                  name="message"
                  onBlur={handleBlur}
                  fadePlaceholderShown
                  value={values.message}
                  error={errors.message}
                  touched={touched.message}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                variant="outlined"
                endAdornment={<i className="fa-solid fa-chevron-right fa-xs" />}
                color="primary"
                className="button"
              >
                Send Your Message
              </Button>
            </form>
          </div>
        </section>

        <Modal open={open} onClose={() => setOpen(false)} className="ks-contact-modal">
          <Box className="box">
            <div className="wrapper">
              <i className="fa-duotone fa-check icon" />
            </div>

            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={() => setOpen(false)}
            >
              OK
            </Button>
            <p className="description">
              Cảm ơn đã đóng góp ý kiến về chúng tôi. Hãy kiểm tra Email của bạn để xem thông tin
              chi tiết.
            </p>
            <h3 className="header">Thành Công!</h3>
          </Box>
        </Modal>
      </div>
    </KsLayout>
  );
};

export default Contact;
