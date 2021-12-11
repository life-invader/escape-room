import { Link } from 'react-router-dom';
import './page-404.css';

const Page404 = () => {
  return (
    <>
      <Link to='/' className="return">Вернуться на главную</Link>
      <div className="numberError">
        <h1 className="error" data-text="404">404</h1>
      </div>
    </>
  );
}

export default Page404;
