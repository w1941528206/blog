// 公共全局样式
import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';

const Layout = (props: any) => {
  return <div className="my-0 mx-[auto] p-6 w-[50vw] min-w-[45vw]">{props.children}</div>;
};

export default Layout;
