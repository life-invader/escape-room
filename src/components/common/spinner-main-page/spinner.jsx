import './spinner.css';

function Spinner() {
  return (
    <div className="loader" data-testid="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>

  );
}

export default Spinner;
