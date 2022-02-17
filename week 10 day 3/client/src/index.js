import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddNewBook from './AddNewBook';
import BaseLayout from './BaseLayout';
import BookDetails from './BookDetails';

// localhost:3000 -> App
// localhost:300/add-book -> AddBook
// localhost:3000/book-list -> BookList

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/add-book' element={<AddNewBook />} />
          <Route path='/books/:id' element={<BookDetails />} />
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
