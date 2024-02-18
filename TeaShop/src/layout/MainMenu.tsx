import React from 'react';
import { MENU_LIST } from './constant';
import { map, isEmpty } from 'lodash';
import { Link } from '@components/primitive';

export default function MainMenu() {
  return (
    <nav className="ks-main-menu">
      <div className="ks-menu-wrapper">
        <ul className="menu">
          {map(MENU_LIST, (item) => (
            <li className="item" key={item.label}>
              <Link className="link" title={item.label} href={item.route}>
                {item.label}
                {!isEmpty(item.submenu) && (
                  <span className="chevron">
                    <i className="fa-thin fa-chevron-down fa-sm icon"></i>
                  </span>
                )}
              </Link>
              <ul className="ks-main-menu-childrens">
                {map(item.submenu, (subItem) => (
                  <li className="item" key={subItem.label}>
                    <div className="wrapper">
                      <Link className="link" title={subItem.label} href={subItem.route}>
                        {subItem.label}
                      </Link>
                      {!isEmpty(subItem?.submenu) && (
                        <span className="chevron">
                          <i className="fa-solid fa-chevron-right fa-xs"></i>
                        </span>
                      )}
                    </div>
                    <ul className="child">
                      {!isEmpty(subItem?.submenu) &&
                        map(subItem?.submenu, (child) => (
                          <li className="item" key={child.label}>
                            <Link className="link" title={child.label} href={child.route}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
