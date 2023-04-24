// 入口
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const content = document.getElementById('root') as HTMLElement;
const root = createRoot(content);

root.render(<App />);
