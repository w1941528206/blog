// 公共全局样式
import * as React from 'react';
import { 
  useState,
  useEffect
} from 'react';
import style from './index.less';

const Layout: React.FC<any> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  // return <div className="my-0 mx-[auto] p-6 w-[50vw] min-w-[45vw]">{props.children}</div>;
  return (
    <div style={{ background:'#f0f2f5', height: '100vh' }}>
      <nav>
        <a>logo</a>
        <div>
          <ul className={visible ? style.navbarActive : style.navbar}>
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

        <div className={style.mobile}>
          <i onClick={() => setVisible(!visible)}>icon</i>
        </div>
      </nav>
      <div className={style.content}>
        {props.children}
      </div>
    </div>
  )
};

export default Layout;
