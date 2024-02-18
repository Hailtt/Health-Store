import React, { useState, useRef, FormEvent } from 'react';
import { GroupInput } from '@components/compound';
import { Button, Link, Image } from '@components/primitive';
import UserIcon from '@svg/user.svg';
import HeartIcon from '@svg/heart.svg';
import { Popper, ClickAwayListener } from '@mui/material';
import { routes } from '@utils/routes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CartDrawer from './CartDrawer';
interface IMidMenuProps {
  onOpenDrawer: () => void;
}
export default function MidMenu({ onOpenDrawer }: IMidMenuProps) {
  const router = useRouter();
  const buttonEle = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openCartDrawer, setOpenCartDrawer] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchValue) return;

    router.push({
      pathname: routes.PRODUCTS,
      query: {
        name: searchValue,
      },
    });
  };

  useEffect(() => {
    if (!router.query?.name) return;

    setSearchValue(String(router.query?.name));
  }, [router]);

  return (
    <>
      <Popper className="ks-popper" placement="bottom-end" anchorEl={buttonEle.current} open={open}>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="ks-popper-auth">
            <div className="content">
              <form className="form">
                <div className="header">
                  <p className="title">Đăng nhập</p>
                  <Link title="" href={routes.AUTH} className="action">
                    Tạo tài khoản
                  </Link>
                </div>
                <div className="group">
                  <GroupInput
                    className="container -mb-10"
                    type="email"
                    placeholder="Tài khoản"
                    label="Tài khoản hoặc Email"
                    fadePlaceholderShown
                    name="email"
                    autoComplete="email"
                  />
                  <GroupInput
                    className="container -mb-10"
                    type="password"
                    placeholder="Mật khẩu"
                    label="Mật khẩu"
                    fadePlaceholderShown
                  />
                  <Button fullWidth>ĐĂNG NHẬP</Button>
                  <div className="forgot">
                    <Link className="link" href="/" title="forgot-password">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
      <div className="ks-mid-menu">
        <div className="ks-mid-menu-wrapper">
          <button onClick={onOpenDrawer} className="burger">
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </button>

          <div className="brand">
            <Link href={routes.HOME} title="">
              <Image className="logo" src="/images/logo.png" alt="logo" objectFit="contain" />
            </Link>
          </div>

          <form onSubmit={handleSearch} className="search">
            <GroupInput
              onChange={({ value }) => setSearchValue(String(value))}
              type="text"
              placeholder="Bạn đang tìm sản phẩm nào?"
              className="container"
              fadePlaceholderShown
              value={searchValue}
              endAdornment={
                <Button type="submit" className="btn">
                  Tìm Kiếm
                </Button>
              }
            />
          </form>

          <div className="actions">
            <button onClick={() => setOpen(true)} ref={buttonEle} className="btn">
              <span className="icon">
                <UserIcon />
              </span>
              <span className="btn-name">Đăng nhập / Đăng ký</span>
            </button>

            <button className="btn">
              <span className="icon">
                <HeartIcon />
              </span>
              <span className="quantity">(0)</span>
            </button>

            <button className="btn" onClick={() => setOpenCartDrawer(true)}>
              <span className="icon">
                <i className="fa-light fa-bag-shopping fa-xl " />
              </span>
              <span className="quantity">(0)</span>
            </button>

            <CartDrawer open={openCartDrawer} onClose={() => setOpenCartDrawer(false)} />
          </div>
        </div>
      </div>
    </>
  );
}
