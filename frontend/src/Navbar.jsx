import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          
          <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0 gap-3">
            <button className='logo-button'> 
              <img src="src/assets/logo.png" className='logo'></img>
            </button><li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/suggestPolicy">Suggest Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/voteList">Vote on Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
