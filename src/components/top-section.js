export default function TopSection() {
    return(
        <div className="top-section">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex">
                            <img src="logo.jpg" height={55} />
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
                                    <a href="#about" className="nav-link">Why us</a>
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
        </div>
    )
}