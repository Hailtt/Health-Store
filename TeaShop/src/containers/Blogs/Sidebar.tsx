import { GroupInput } from '@components/compound';
import BannerCard from '@containers/Home/BannerCard';
import { Button, Image } from '@components/primitive';
import { POPULAR_TAGS, BLOG_CATEGORIES, RECENT_POSTS } from './constants';
import { map } from 'lodash';
import { useRouter } from 'next/router';

const Sidebar = () => {
  return (
    <div className="ks-blogs-sidebar">
      <GroupInput
        className="search"
        endAdornment={<i className="fa-regular fa-magnifying-glass" />}
        placeholder="Search ..."
        fadePlaceholderShown
      />

      <h3 className="title">Recent Posts</h3>
      <ul className="cards">
        {map(RECENT_POSTS, ({ date, image, title }, idx) => (
          <li className="item" key={`recent-post-${idx}`}>
            <Image className="image" src={image} alt="card" objectFit="cover" />
            <div className="info">
              <div className="title">{title}</div>
              <div className="date">{date}</div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="title">Blog Categories</h3>
      <ul className="categories">
        {map(BLOG_CATEGORIES, (category, idx) => (
          <li key={`blog-categories-${idx}`} className="item">
            {category}
          </li>
        ))}
      </ul>

      <BannerCard
        className="banner"
        action="Mua ngay"
        data={{
          image: 'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/blog-sidebar.jpg',
          title: 'Green Tea',
          description: 'Rich Natural Taste',
          color: 'black',
        }}
      />

      <h3 className="title">Popular Tags</h3>
      <div className="tags">
        {map(POPULAR_TAGS, (tag, idx) => (
          <Button key={`popular-tag-${idx}`} variant="outlined" color="primary" className="action">
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
