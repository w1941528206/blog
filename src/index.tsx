import React from 'react';
import { createRoot } from 'react-dom/client';

const content = document.getElementById('root') as HTMLElement;
const root = createRoot(content);

const element = (
  <div>123</div>
);

root.render(element);