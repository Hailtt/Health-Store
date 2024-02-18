import KsLayout from '@/layout';
import { Image, Link } from '@components/primitive';
import { routes } from '@utils/routes';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { DISTRIBUTION, URL_IMAGES } from './constants';
import { map } from 'lodash';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Distribution = () => {
  const breadcrumbs: ReactNode[] = [
    <Link href={routes.HOME} title="homepage" key="homepage" className="ks-page-header-link">
      Trang Chủ
    </Link>,
    <p className="ks-page-header-text" key="shop">
      Hệ Thống Phân Phối
    </p>,
  ];

  const [expandedCity, setExpandedCity] = useState<string | false>('');
  const [expandedDistrict, setExpandedDistrict] = useState<string | false>('');

  const handleChangeCity = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpandedCity(newExpanded ? panel : false);
    setExpandedDistrict(newExpanded ? panel : false);
  };

  const handleChangeDistrict = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpandedDistrict(newExpanded ? panel : false);
  };

  return (
    <KsLayout
      title="Hệ Thống Phân Phối"
      hasPageHeader
      pageHeaderTitle="Hệ Thống Phân Phối"
      pageHeaderBackground="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/shop-bc-bg.jpg"
      breadcrumbs={breadcrumbs}
    >
      <div className="ks-distribution ks-container">
        <div className="ks-distribution-layout">
          <div className="content">
            <h1 className="title">Hệ Thống Phân Phối</h1>

            {map(DISTRIBUTION, ({ province, districts }, index) => (
              <ul className="city" key={`city-${index}`}>
                <Accordion
                  expanded={expandedCity === `city-${province}}`}
                  onChange={handleChangeCity(`city-${province}}`)}
                  className="accordion"
                >
                  <AccordionSummary aria-controls="panel1d-content" className="summary">
                    <div className="inner">
                      {expandedCity === `city-${province}}` ? (
                        <i className="fa-regular fa-minus icon" />
                      ) : (
                        <i className="fa-solid fa-plus-large icon" />
                      )}
                      <p className="city -text">{province}</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    {map(districts, ({ name, branchs }, index) => (
                      <li className="district" key={`district-${index}`}>
                        <Accordion
                          expanded={expandedDistrict === `district-${name}`}
                          onChange={handleChangeDistrict(`district-${name}`)}
                        >
                          <AccordionSummary aria-controls="panel1d-content">
                            <div className="inner">
                              {expandedDistrict === `district-${name}` ? (
                                <i className="fa-regular fa-minus icon" />
                              ) : (
                                <i className="fa-solid fa-plus-large icon" />
                              )}

                              <p className="district -text">{name}</p>
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            {map(branchs, (branch, index) => (
                              <div className="branch -text" key={`branch-${index}`}>
                                <Link href="/" title="" className="link -text">
                                  {branch}
                                </Link>
                              </div>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </li>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </ul>
            ))}
          </div>
          <div className="sidebar">
            {map(URL_IMAGES, (urlImage, index) => (
              <Link href="/" title="" key={`link-image-${index}`} className="link">
                <Image src={urlImage} alt="image" className="image" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </KsLayout>
  );
};

export default Distribution;
