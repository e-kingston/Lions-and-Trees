export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="/">
          <img src="logo.jpg" height={55} alt="..." />
          <div className="brand-name">
            Lions <br /> & <br /> Trees
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-links"
          aria-expanded="false"
          aria-controls="#nav-links"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="nav-links"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#why-us" className="nav-link">
                Why us
              </a>
            </li>
            <li className="nav-item">
              <a href="#clients" className="nav-link">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-us" className="btn btn-primary">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
