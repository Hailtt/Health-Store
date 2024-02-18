import React from 'react';
import { Link } from '@components/primitive';
import { MENU_LANGUAGE, MENU_CURRENCY } from './constant';
import { map } from 'lodash';
export default function TopMenu() {
  return (
    <div className="ks-top-menu">
      <div className="ks-top-menu-wrapper">
        <ul className="left">
          <div className="title _text-sm">
            Standard Flat Rate Shipping $7.95 – Free Shipping on orders of $50 or more!
          </div>
          <Link href="/" className="link _text-sm" title="">
            See Detail
            <span className="btn-detail">
              <i className="fa-solid fa-chevron-right fa-2xs"></i>
            </span>
          </Link>
        </ul>
        <ul className="right">
          <li className="language">
            <div className="selected">
              <span className="label _text-sm">Tiếng Việt</span>
              <span className="chevron">
                <i className="fa-thin fa-chevron-down fa-2xs icon _icon-hover -font-icon"></i>
              </span>
            </div>
            <ul className="menu">
              {map(MENU_LANGUAGE, (item) => (
                <li key={item.name} className="list">
                  <div className="choices">
                    <div className="other-choices">{item.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="monetary">
            <div className="selected">
              <span className="currency">
                <i className="fa-light fa-dong-sign fa-sm _icon-hover"></i>
              </span>
              <span className="label _text-sm">VNĐ</span>
              <span className="chevron">
                <i className="fa-thin fa-chevron-down fa-2xs icon _icon-hover -font-icon"></i>
              </span>
            </div>
            <ul className="menu">
              {map(MENU_CURRENCY, ({ icon, name }) => (
                <li key={name} className="list">
                  <div className="choices">
                    <i className={icon} />
                    <div className="name">{name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
