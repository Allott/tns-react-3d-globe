import { Routes, Route } from 'react-router-dom';
import Finished from './routes/finished';
import Basic from './routes/basic';

import NotFound from './routes/not-found';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/'>
          <Route index element={<Basic />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
