import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import store from "./store";

import Main from './layout/Main';
import './App.css'

function App() {
  return (
    <Provider store={store}r>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
