import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          
          {/* Horizontal Navbar */}
          <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0 gap-3">
            <img src="src/assets/logo.png" className='logo'></img>
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Suggest Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Vote on Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Updates</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
