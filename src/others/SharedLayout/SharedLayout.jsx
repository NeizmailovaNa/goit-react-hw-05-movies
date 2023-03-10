import Nav from 'others/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'others/Spiner';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<Spiner wrapperStyle={{ fill: '#7b81ec' }} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;