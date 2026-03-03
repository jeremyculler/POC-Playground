import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import Index from './components/Index';
import Page from './components/Page';

function PageWrapper() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('page');
  return <Page id={id} />;
}

function App() {
  return (
    <BrowserRouter basename="/POC-Playground">
      <Routes>
        <Route path="/" element={
          <PageWrapper />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
