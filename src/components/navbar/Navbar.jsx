import { Link, NavLink } from "react-router-dom"
import instImg from "../../assets/icons/ins.svg";

const Navbar = () => {

    return (
        <div style={{ backgroundColor: "#244d4d", color: "white" }}>
            <div className="container">
                <div className="border-bottom py-3 d-flex align-items-center justify-content-between fw-semibold">
                    <div>Call us: <Link to='' className="text-white text-decoration-none">+993 63 29-78-77</Link></div>
                    <Link to='' className="d-flex align-items-center text-white text-decoration-none">
                        <img src={instImg} alt="" style={{ width: "18px" }} className="me-1" />
                        Instagram
                    </Link>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <h3>Logo</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item h5 me-3">
                                <NavLink className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item h5 me-3">
                                <NavLink className="nav-link">Projects</NavLink>
                            </li>
                            <li className="nav-item h5 me-3">
                                <NavLink className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item h5">
                                <NavLink className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar