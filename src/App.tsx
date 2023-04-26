// 包装器 入口
import * as React from 'react';
import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { locales } from '../locales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Page from './Page';
const defaultLocal = 'zh-CN';

export const App = () => {
  const locale = localStorage.getItem('locale') ?? defaultLocal;
  const messages = React.useMemo(() => locales[locale], [locale]);

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocal}>
      <React.Suspense fallback={null}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Page />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </React.Suspense>
    </IntlProvider>
  );
};

export default App;
