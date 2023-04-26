// 包装器 入口
import * as React from 'react';
// import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { locales } from '../locales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const defaultLocal = 'zh-CN';

export const App = () => {
  const locale = localStorage.getItem('locale') ?? defaultLocal;
  const messages = React.useMemo(() => locales[locale], [locale]);

  const View = React.lazy(() => import('./view'));

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocal}>
      <React.Suspense
        fallback={(
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/foo" element={<View />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </IntlProvider>
  );
};

export default App;
