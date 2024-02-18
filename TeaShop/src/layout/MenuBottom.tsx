import React from 'react';
import { Link } from '@components/primitive';
import { MENU_BOTTOM } from './constant';
import { map } from 'lodash';
export default function MenuBottom() {
  return (
    <div className="ks-menu-bottom">
      <div className="wrapper">
        {map(MENU_BOTTOM, (item) => (
          <div key={item.title} className="actions">
            <Link href={item.route} title="" className="action">
              <span>
                <i className={item.className}></i>
              </span>
            </Link>
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
