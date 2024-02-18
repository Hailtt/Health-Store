import { Checkbox } from '@components/primitive';
import { Collapse, Rating, Slider } from '@mui/material';
import classNames from 'classnames';
import { isArray, map } from 'lodash';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { CATEGORIES, INGREDIENTS, RATING, TEA_TYPE } from './constants';
import { useProductCategoriesQuery } from '../../query/categories/get-categories';

interface ISidebarProps {
  variant?: '-static' | '-drawer';
  onToggle?: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ variant, onToggle }) => {
  const router = useRouter();
  const { query } = router;

  const MIN_PRICE_DISTANCE = 5;

  const { data: categories } = useProductCategoriesQuery({ limit: 12, page: 1 });

  const category = String(query?.category || undefined);
  const minPrice = Number(query?.minPrice || 0);
  const maxPrice = Number(query?.maxPrice || 100);
  const typeTea = query?.typeTea || [];
  const ingredients = query?.ingredients || [];
  const rating = query?.rating || [];

  const [options, setOptions] = useState<string[]>([
    'categories',
    'price',
    'type',
    'ingredients',
    'rating',
  ]);
  const [price, setPrice] = useState<number[]>([minPrice, maxPrice]);

  useEffect(() => {
    minPrice > maxPrice ? setPrice([maxPrice, minPrice]) : setPrice([minPrice, maxPrice]);
  }, [maxPrice, minPrice]);

  const handleChangePrice = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) return;

    activeThumb === 0
      ? setPrice([Math.min(newValue[0], price[1] - MIN_PRICE_DISTANCE), price[1]])
      : setPrice([price[0], Math.max(newValue[1], price[0] + MIN_PRICE_DISTANCE)]);
  };

  const handleToggleCollapse = (key: string) => {
    setOptions(
      !options.includes(key) ? [...options, key] : options.filter((option) => option !== key),
    );
  };

  const handleChangeFilterCheckbox = ({
    checked,
    value,
    name,
    arr,
  }: {
    checked: boolean;
    value: string;
    name: string;
    arr: string | string[];
  }) => {
    if (!checked) {
      if (isArray(arr)) {
        const index = arr.indexOf(value);
        if (index !== -1) arr.splice(index, 1);
      }
      return router.push({
        query: {
          ...query,
          [name]: [...(isArray(arr) ? arr : [])],
          page: 1,
        },
      });
    } else {
      router.push({
        query: {
          ...query,
          page: 1,
          [name]: [value as string, ...(isArray(arr) ? arr : [arr])],
        },
      });
    }
  };

  return (
    <aside className={classNames('ks-products-sidebar', variant)}>
      <div className="header">
        <button onClick={onToggle} className="action">
          <i className="fa-regular fa-xmark fa-xs" />
        </button>
      </div>
      <div className="categories option">
        <div className="header">
          <span className="overlay" onClick={() => handleToggleCollapse('categories')} />
          <h3 className="title">Categories</h3>
          <i
            className={classNames(`fa-regular fa-chevron-up icon`, {
              '-down': !options.includes('categories'),
            })}
          />
        </div>

        <Collapse in={options.includes('categories')}>
          <ul className="ks-products-sidebar-categories">
            {map(categories?.items, ({ id, name }, idx) => (
              <li
                key={`sidebar-categories-${idx}`}
                className={classNames(`item`, { '-active': id === category })}
                onClick={() => {
                  router.push({ query: { ...query, category: id, page: 1 } });
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>

      <div className="price option">
        <div className="header">
          <span className="overlay" onClick={() => handleToggleCollapse('price')} />
          <h3 className="title">Price</h3>
          <i
            className={classNames(`fa-regular fa-chevron-up icon`, {
              '-down': !options.includes('price'),
            })}
          />
        </div>

        <Collapse in={options.includes('price')}>
          <div className="ks-products-sidebar-price">
            <Slider
              className="slider"
              getAriaLabel={() => 'Minimum distance'}
              value={price}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              disableSwap
            />

            <div className="wrapper">
              <span className="price">
                Price:
                <span className="range">
                  ${price[0]}.00 - ${price[1]}.00
                </span>
              </span>
              <span
                className="action"
                onClick={() => {
                  router.push({
                    query: { ...query, minPrice: price[0], maxPrice: price[1], page: 1 },
                  });
                }}
              >
                FILTER
              </span>
            </div>
          </div>
        </Collapse>
      </div>

      <div className="type option">
        <div className="header">
          <span className="overlay" onClick={() => handleToggleCollapse('type')} />
          <h3 className="title">Tea Type</h3>
          <i
            className={classNames(`fa-regular fa-chevron-up icon`, {
              '-down': !options.includes('type'),
            })}
          />
        </div>
        <Collapse in={options.includes('type')}>
          <ul className="ks-products-sidebar-type ">
            {map(TEA_TYPE, ({ label, value, count }, idx) => (
              <li key={`sidebar-type-${idx}`} className="item">
                <Checkbox
                  id={value}
                  onChange={({ value, checked }) =>
                    handleChangeFilterCheckbox({
                      checked: checked,
                      value: value as string,
                      name: 'typeTea',
                      arr: typeTea,
                    })
                  }
                  checked={typeTea.includes(value)}
                  value={value}
                  label={label}
                />

                <span className="count">{`(${count})`}</span>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>

      <div className="ingredients option">
        <div className="header">
          <span className="overlay" onClick={() => handleToggleCollapse('ingredients')} />
          <h3 className="title">Ingredients</h3>
          <i
            className={classNames(`fa-regular fa-chevron-up icon`, {
              '-down': !options.includes('ingredients'),
            })}
          />
        </div>
        <Collapse in={options.includes('ingredients')}>
          <ul className="ks-products-sidebar-ingredients ">
            {map(INGREDIENTS, ({ label, count, value }, idx) => (
              <li key={`sidebar-ingredients-${idx}`} className="item">
                <Checkbox
                  id={value}
                  onChange={({ value, checked }) =>
                    handleChangeFilterCheckbox({
                      checked: checked,
                      value: value as string,
                      name: 'ingredients',
                      arr: ingredients,
                    })
                  }
                  checked={ingredients.includes(value)}
                  value={value}
                  label={label}
                />

                <span className="count">{`(${count})`}</span>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>

      <div className="rating option">
        <div className="header">
          <span className="overlay" onClick={() => handleToggleCollapse('rating')} />
          <h3 className="title">Rating</h3>
          <i
            className={classNames(`fa-regular fa-chevron-up icon`, {
              '-down': !options.includes('rating'),
            })}
          />
        </div>
        <Collapse in={options.includes('rating')}>
          <ul className="ks-products-sidebar-rating ">
            {map(RATING, ({ value, count }, idx) => (
              <li key={`sidebar-rating-${idx}`} className="item">
                <Checkbox
                  onChange={({ value, checked }) =>
                    handleChangeFilterCheckbox({
                      checked: checked,
                      value: value as string,
                      name: 'rating',
                      arr: [],
                    })
                  }
                  checked={rating.includes(value as unknown as string)}
                  value={value}
                />
                <div className="rating">
                  <Rating value={value} readOnly />
                </div>
                <span className="count">{`(${count})`}</span>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
