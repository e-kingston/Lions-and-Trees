export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex">
          <img src="logo.jpg" height={55} />
          <div className="company-name">Lions & Trees</div>
        </a>
        <div className="justify-content-end">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a href="#about" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#why-us" className="nav-link">Why us</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">Clients</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="btn btn-primary">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}