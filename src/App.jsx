import React from 'react';
import './App.css';
import { routeArr } from './routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <item.component />
                <Footer />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
