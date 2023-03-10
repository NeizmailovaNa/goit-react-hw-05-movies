import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
import ntf from '../../img/nfi.jpeg';

const NotFound = () => {
  return (
    <div className={css.wrap}>
      <img src={ntf} alt="404 page not found" className={css.ntf}></img>
      <b>
        Sorry, the page not found. The link you followed broken or the page has
        been removed.
      </b>
      <Link to="/" className={css.link}>
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;