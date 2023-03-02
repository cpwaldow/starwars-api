import People from './page/People';
import Home from './page/Home';
import Menu from './components/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people/:id' element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
