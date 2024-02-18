import KsLayout from '@/layout';
import { Button, Image } from '@components/primitive';
import { Box, Modal } from '@mui/material';
import { map } from 'lodash';
import { useState } from 'react';
import { ARCHIVE, EXPERIENCE, PROCESS_ITEMS } from './constants';

const About = () => {
  const { title, action, header, image, text } = EXPERIENCE;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <KsLayout title="Giới thiệu">
      <div className="ks-about">
        <section className="ks-about-experience ks-container">
          <div className="wrapper row">
            <div className="left col-12 col-lg-6">
              <Image src={image} alt="experience" objectFit="cover" className="image" />
              <div className="widget">
                <Image
                  src="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/about-decor-2.png"
                  alt="widget"
                />
              </div>
            </div>

            <div className="right col-12 col-lg-6">
              <p className="header">{header}</p>
              <h1 className="title">{title}</h1>
              <p className="text">{text}</p>
              <Button
                variant="outlined"
                color="primary"
                className="action"
                endAdornment={<i className="fa-solid fa-chevron-right fa-2xs" />}
              >
                {action}
              </Button>

              <div className="widget">
                <Image
                  src="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/about-decor-1.png"
                  alt="widget"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ks-about-process">
          <div className="content">
            <div className="wrapper row">
              {map(PROCESS_ITEMS, ({ icon, title, description }, idx) => (
                <div className="item" key={idx}>
                  <div className="icon">{icon}</div>
                  <div className="box">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ks-about-trailer">
          <div className="ks-container content">
            <div className="wrapper">
              <div className="images">
                <Image
                  src="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/about-bg-4.jpg"
                  alt="trailer"
                  objectFit="contain"
                  className="image"
                  ratio="square"
                />
                <div className="buttons">
                  <Button onClick={handleOpen} className="button" circle>
                    <i className="fa-light fa-play icon" />
                  </Button>
                  <Modal open={open} onClose={handleClose} className="ks-about-modal">
                    <Box className="box">
                      <iframe
                        src="https://www.youtube.com/embed/spNpLl9NslA"
                        title="YouTube video player"
                        className="video"
                        allow="autoplay"
                      />
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ks-about-archivements">
          <div className="ks-container wrapper">
            <div className="heading">
              <h1 className="award">Award Winning</h1>
              <h6 className="text">what we archive</h6>
            </div>
            <div className="row">
              {map(ARCHIVE, ({ image, year, name }, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg info"
                  key={`archivement-item-${idx}`}
                >
                  <div className="ks-about-archivement">
                    <div className="images">
                      <Image src={image} className="image" alt="image" />
                    </div>
                  </div>
                  <div className="title">
                    <div className="year">{year}</div>
                    <div className="name">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </KsLayout>
  );
};

export default About;
