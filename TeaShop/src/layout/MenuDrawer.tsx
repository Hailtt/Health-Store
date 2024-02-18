import React, { useState } from 'react';
import { Drawer, Collapse } from '@mui/material';
import { MENU_LIST } from './constant';
import { map } from 'lodash';
import { Link } from '@components/primitive';

interface IMenuDrawerProps {
  onToggleDrawer?: () => void;
  isOpen?: boolean;
}

export default function MenuDrawer({ onToggleDrawer, isOpen }: IMenuDrawerProps) {
  const [dropdown, setDropdown] = useState<string>('');
  const [subDropdown, setSubDropDown] = useState<string>('');

  return (
    <Drawer anchor="left" open={isOpen} onClose={onToggleDrawer}>
      <div className="ks-menu-drawer">
        <div className="header">
          <button onClick={onToggleDrawer} className="action">
            <i className="fa-regular fa-xmark fa-xs" />
          </button>
        </div>

        <ul className="menu">
          {map(MENU_LIST, (item) => (
            <li className="item" key={`menu-${item.label}`}>
              <Link
                rightIcon={
                  item.submenu && (
                    <button className="btn">
                      <span className="chevron">
                        <i
                          className={`${
                            dropdown !== item.label
                              ? 'fa-solid fa-chevron-right fa-2xs'
                              : 'fa-solid fa-chevron-down fa-2xs'
                          }`}
                        />
                      </span>
                    </button>
                  )
                }
                className="link _link-size"
                title={item.label}
                href={item.route}
              >
                {item.label}
                <div
                  onClick={() => {
                    item.submenu && setDropdown(dropdown !== item.label ? item.label : '');
                  }}
                  className="overlay"
                />
              </Link>

              <Collapse in={dropdown === item.label} timeout="auto" unmountOnExit>
                <div className="ks-menu-drawer-content">
                  <ul className="sub">
                    {map(item.submenu, (subItem) => (
                      <li
                        onClick={() => {
                          subItem.submenu &&
                            setSubDropDown(subDropdown !== subItem.label ? subItem.label : '');
                        }}
                        className="item"
                        key={`sub-${subItem.label}`}
                      >
                        <Link
                          className="link _link-size"
                          title={subItem.label}
                          href={subItem.route}
                        >
                          {subItem.label}
                        </Link>
                        {subItem.submenu && (
                          <button className="btn">
                            <span className="chevron">
                              <i
                                className={`${
                                  subDropdown !== subItem.label
                                    ? 'fa-solid fa-chevron-right fa-2xs'
                                    : 'fa-solid fa-chevron-down fa-2xs'
                                }`}
                              ></i>
                            </span>
                          </button>
                        )}
                        <Collapse in={subDropdown === subItem.label} timeout="auto" unmountOnExit>
                          <div className="ks-menu-drawer-children">
                            <ul className="child">
                              {map(subItem.submenu, (child) => (
                                <li className="item" key={`child-${child.label}`}>
                                  <Link
                                    className="link _link-size"
                                    title={child.label}
                                    href={child.route}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Collapse>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}
