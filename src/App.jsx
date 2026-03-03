import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Page from './components/Page';

function App() {
  return (
    <BrowserRouter basename="/POC-Playground">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
