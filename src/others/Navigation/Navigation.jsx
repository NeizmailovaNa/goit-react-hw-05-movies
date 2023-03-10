import { NavigationLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <header>
      <NavigationLink
        to="/"
        className={({ isActive }) => (isActive ? css.navigatiinActive : css.navigation)}
      >
        Home
      </NavigationLink>
      <NavigationLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.navigationActive : css.navigation)}
      >
        Movies
      </NavigationLink>
    </header>
  );
};
export default Navigation;
