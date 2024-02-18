import { Image, Link } from '@components/primitive';
import { FC } from 'react';
import { IBlog } from '@interfaces/blog';
import { isEmpty, map } from 'lodash';

interface IBlogCardProps {
  data: IBlog;
}

export const BlogCard: FC<IBlogCardProps> = ({ data }) => {
  const { name, images, tags } = data;

  return (
    <div className="ks-blog-card">
      <div className="thumbnail">
        <Link className="tag" href="/" title="">
          <Image
            src={!isEmpty(images) ? images[0] : ''}
            alt={name}
            objectFit="cover"
            className="image"
            ratio="square"
          />
        </Link>

        <div className="poster">
          <Link className="tag" href="/" title="" size="xs" textTransform="uppercase">
            <b className="strong">22</b>
            May
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="meta">
          {tags.length > 1 ? (
            <Link className="tag" href="/" title="" size="xs" color="primary">
              {map(tags, (tag, index) => {
                if (index === 0) {
                  return `${tag} `;
                } else return ` & ${tag} `;
              })}
            </Link>
          ) : (
            <Link className="tag" href="/" title="" size="xs">
              {tags[0]}
            </Link>
          )}
        </div>

        <Link className="name" href="/" size="lg" title="" color="secondary">
          {name}
        </Link>
      </div>

      <div className="more">
        <Link
          href="/"
          className="link"
          size="sm"
          color="black"
          underline
          title=""
          rightIcon={<i className="fa-regular fa-chevron-right icon" />}
        >
          Đọc tiếp
        </Link>
      </div>
    </div>
  );
};
