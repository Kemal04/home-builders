import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="bg-footer text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-6 mt-5 border-end">
                            <div className="h2 mb-5">Logo</div>
                            <div className="small fw-semibold w-75 mb-4">Decoral is a dollar system way the important pieces of content actual it's usually placed.</div>
                            <div className="small fw-semibold w-75 mb-2">Office Hour</div>
                            <div className="small">Saturday - Friday <br /> 9am to 8.30pm</div>
                        </div>
                        <div className="col-xl-3 col-6 mt-5">
                            <div className="ms-5">
                                <div className="h4 mb-4">Company</div>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">About Us</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Services</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Latest Projects</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Blog Post</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Team</Link>
                                <Link to='' className="text-decoration-none text-white d-block">Contact us</Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 mt-5">
                            <div className="ms-0 ms-xl-5">
                                <div className="h4 mb-4">Information</div>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">About Us</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Services</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Latest Projects</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Blog Post</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Team</Link>
                                <Link to='' className="text-decoration-none text-white d-block">Contact us</Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 mt-5">
                            <div className="ms-5">
                                <div className="h4 mb-4">Contact info</div>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">About Us</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Services</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Latest Projects</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Blog Post</Link>
                                <Link to='' className="text-decoration-none text-white d-block mb-3">Our Team</Link>
                                <Link to='' className="text-decoration-none text-white d-block">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer