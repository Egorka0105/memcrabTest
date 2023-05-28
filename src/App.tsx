import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, TablePage } from 'pages';
import { ROUTES } from 'utils';

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.TABLE} element={<TablePage />} />
    </Routes>
  </Router>
);
