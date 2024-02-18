import KsLayout from '@/layout';
import { useProductsQuery } from '@/query/products/get-products';
import { Pagination, ProductCard } from '@components/compound';
import { Link } from '@components/primitive';
import BannerCard from '@containers/Home/BannerCard';
import { Drawer, FormControl, Input, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { LIMIT } from '@utils/limit';
import { routes } from '@utils/routes';
import { ceil, isEmpty, map } from 'lodash';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { PRODUCT_BANNER, SHOW_ITEMS, SORT_ITEMS } from './constants';
import Sidebar from './Sidebar';

const Products = () => {
  const router = useRouter();

  const { query } = router;

  const page = Number(query?.page || 1);
  const sort = String(query?.sort || SORT_ITEMS[0].value);
  const limit = Number(query?.limit || LIMIT.PRODUCTS_FILTER);
  const category = String(query?.category || undefined);
  const name = String(query?.name || undefined);

  const { data: products } = useProductsQuery({ limit, page, category, name });

  const breadcrumbs: ReactNode[] = [
    <Link href={routes.HOME} title="homepage" key="homepage" className="ks-page-header-link">
      Home Page
    </Link>,
    <p className="ks-page-header-text" key="shop">
      Product
    </p>,
  ];

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const handleCloseDrawer = () => setIsOpenDrawer(false);

  const handleOpenDrawer = () => setIsOpenDrawer(true);

  return (
    <KsLayout
      title="Danh sách sản phẩm"
      hasPageHeader
      pageHeaderTitle="Product"
      pageHeaderBackground="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/shop-bc-bg.jpg"
      breadcrumbs={breadcrumbs}
    >
      <div className="ks-products">
        <div className="ks-container content">
          <div className="row wrapper">
            <div className="col-12 col-xl-2">
              <Sidebar variant="-static" />
            </div>

            <div className="col-12 col-xl-10">
              <section className="ks-products-banners">
                <div className="ks-container content">
                  <p className="description">
                    Choose from over 75 tea blends – from the classic Earl Grey to the award-winning
                    Blueberry Merlot – our whole leaf teas are available in a variety of package
                    types. We hope our teas provide you with some well-deserved comfort during your
                    day.
                  </p>
                  <div className="wrapper">
                    <BannerCard data={PRODUCT_BANNER} action="Sản phẩm bán chạy" size="medium" />
                  </div>
                </div>
              </section>

              <section className="ks-products-filters">
                <div className="ks-container content">
                  <div className="sorts">
                    <div className="actions">
                      <button onClick={handleOpenDrawer} className="filter">
                        <i className="fa-regular fa-sliders-simple icon" />
                        <strong className="text">Filter</strong>
                      </button>
                      <div className="sort">
                        <FormControl>
                          <Select
                            value={sort}
                            onChange={(e) =>
                              router.push({
                                query: {
                                  ...query,
                                  sort: e.target.value,
                                },
                              })
                            }
                            input={<Input disableUnderline className="select-input" />}
                          >
                            {map(SORT_ITEMS, (it, idx) => (
                              <MenuItem value={it.value} key={`soft-item-${idx}`}>
                                {it.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>

                      <div className="show">
                        <span className="text">Show</span>
                        <FormControl>
                          <Select
                            value={limit}
                            onChange={(e) =>
                              router.push({
                                query: {
                                  ...query,
                                  limit: e.target.value,
                                },
                              })
                            }
                            input={<Input disableUnderline className="select-input" />}
                          >
                            {map(SHOW_ITEMS, (it, idx) => (
                              <MenuItem
                                className="ks-products-menu-item"
                                value={it.value}
                                key={`show-item-${idx}`}
                              >
                                {it.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div className="info">
                      <p className="text">
                        Showing 1–{limit || LIMIT.PRODUCTS_FILTER} of {products?.total || 0} results
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="ks-products-result-filter">
                <div className="ks-container content">
                  <div className="row wrapper">
                    {isEmpty(products?.items) ? (
                      <div className="col-12 empty-result">Empty Result</div>
                    ) : (
                      map(products?.items, (item, idx) => (
                        <div
                          className="col-12 col-md-4 col-lg-4 item"
                          key={`product-result-${idx}`}
                        >
                          <ProductCard data={item} />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </section>

              {!isEmpty(products?.items) && (
                <Pagination
                  count={ceil((products?.total || 0) / limit)}
                  page={page}
                  onChange={(p) => {
                    router.push(
                      {
                        query: { ...query, page: p },
                      },
                      undefined,
                      { shallow: true, scroll: true },
                    );
                  }}
                />
              )}
            </div>
          </div>

          <Drawer anchor="left" open={isOpenDrawer} onClose={handleCloseDrawer}>
            <Sidebar variant="-drawer" onToggle={handleCloseDrawer} />
          </Drawer>
        </div>
      </div>
    </KsLayout>
  );
};

export default Products;
