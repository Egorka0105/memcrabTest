import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'utils';

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.MAIN} element={<div>form page</div>} />
      <Route path={ROUTES.TABLE} element={<div>table page</div>} />
    </Routes>
  </Router>
);
