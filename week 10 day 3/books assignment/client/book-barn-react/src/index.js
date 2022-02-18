import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddBook from './components/AddBook';
import ViewBooks from './components/ViewBooks';
import BaseLayout, { Menu } from './components/BaseLayout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/view-books' element={<ViewBooks />} />
        </Routes>
      </BaseLayout>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
