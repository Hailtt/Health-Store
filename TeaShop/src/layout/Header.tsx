import React, { useState } from 'react';
import TopMenu from './TopMenu';
import MidMenu from './MidMenu';
import MainMenu from './MainMenu';
import MenuDrawer from './MenuDrawer';
export default function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleCloseDrawer = () => setIsOpenDrawer(false);
  const handleOpenDrawer = () => setIsOpenDrawer(true);
  return (
    <div className="ks-header-layout">
      <div className="icon -bottom"></div>
      <div className="icon -top"></div>
      <div className="ks-container">
        <TopMenu />
        <MidMenu onOpenDrawer={handleOpenDrawer} />
        <MainMenu />
      </div>
      <MenuDrawer isOpen={isOpenDrawer} onToggleDrawer={handleCloseDrawer} />
    </div>
  );
}
