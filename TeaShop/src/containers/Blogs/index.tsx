import KsLayout from '@/layout';
import Sidebar from './Sidebar';
import { Button, Image, Link } from '@components/primitive';
import { routes } from '@utils/routes';
import { isEmpty, map } from 'lodash';
import { BLOGS } from './constants';
import { useRouter } from 'next/router';
import { Pagination } from '@components/compound';

export const Blogs = () => {
  const router = useRouter();

  const { query } = router;

  const page = Number(query?.page || 1);

  const breadcrumbs: React.ReactNode[] = [
    <Link href={routes.HOME} title="homepage" key="homepage" className="ks-page-header-link">
      Home Page
    </Link>,
    <p className="ks-page-header-text" key="shop">
      Blog
    </p>,
  ];

  return (
    <KsLayout
      title="Tin Tức"
      hasPageHeader
      pageHeaderTitle="Blog"
      pageHeaderBackground="https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/shop-bc-bg.jpg"
      breadcrumbs={breadcrumbs}
    >
      <div className="ks-blogs ks-container">
        <div className="ks-blogs-layout">
          <div className="content">
            {map(BLOGS, ({ images, name, tags, description }, idx) => (
              <div className="blog" key={`blog-${idx}`}>
                <div className="thumbnail">
                  <Link className="link" href="/abc" title="">
                    <Image
                      src={!isEmpty(images) ? images[0] : ''}
                      alt={name}
                      objectFit="cover"
                      className="image"
                      ratio="square"
                    />
                  </Link>
                  <div className="poster">
                    <Link className="link" href="/abc" title="" size="xs" textTransform="uppercase">
                      <b className="strong">22</b>
                      May
                    </Link>
                  </div>
                </div>

                <div className="content">
                  <div className="meta">
                    <div className="inner">
                      {tags.length > 1 ? (
                        <div className="tags">
                          {map(tags, (tag, index) =>
                            index === 0 ? (
                              <Link className="tag" href="/" title="" size="xs" key={index}>
                                {tag}
                              </Link>
                            ) : (
                              <Link className="tag" href="/" title="" size="xs" key={index}>
                                , {tag}
                              </Link>
                            ),
                          )}
                        </div>
                      ) : (
                        <div className="tags">
                          <Link className="tag" href="/" title="" size="xs">
                            {tags[0]}
                          </Link>
                        </div>
                      )}
                      <span className="dash">|</span>
                    </div>
                    <p className="author">
                      Post by <strong className="strong">Admin</strong>
                    </p>
                  </div>
                  <h3 className="text">
                    <Link className="link" href="/slug" size="lg" title="" color="secondary">
                      {name}
                    </Link>
                  </h3>
                </div>

                <p className="description">{description}</p>

                <Button
                  variant="outlined"
                  endAdornment={<i className="fa-solid fa-chevron-right icon"></i>}
                  color="primary"
                  className="button"
                >
                  Đọc tiếp
                </Button>
              </div>
            ))}
          </div>

          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
        <Pagination
          count={10}
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
      </div>
    </KsLayout>
  );
};

export default Blogs;
