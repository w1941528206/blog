// 公共全局样式
import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';

const Layout: React.FC<any> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="app">
      <nav>
        <a>logo</a>
        <div>
          <ul className={visible ? 'navbarActive' : 'navbar'}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/other01">Other01</a>
            </li>
            <li>
              <a href="/other02">Other02</a>
            </li>
          </ul>
        </div>

        <div className="mobile">
          <i onClick={() => setVisible(!visible)}>icon</i>
        </div>
      </nav>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
