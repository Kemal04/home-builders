import bannerImg from "../../assets/banner.jpg";
import bannerCardImg from "../../assets/banner-card.jpg";
import card1 from "../../assets/1.jpg";
import card2 from "../../assets/2.jpg";
import card3 from "../../assets/3.jpg";
import card4 from "../../assets/4.jpg";
import card5 from "../../assets/5.jpg";
import card6 from "../../assets/6.jpg";
import card7 from "../../assets/7.jpg";
import card8 from "../../assets/8.jpg";
import card9 from "../../assets/9.jpg";
import card10 from "../../assets/10.jpg";
import card11 from "../../assets/11.jpg";
import card12 from "../../assets/12.jpg";
import card13 from "../../assets/13.jpg";
import card14 from "../../assets/14.jpg";
import card15 from "../../assets/15.jpg";
import card16 from "../../assets/16.jpg";
import card17 from "../../assets/17.jpg";
import userImg from "../../assets/user.jpg";
import pencilIcon from "../../assets/icons/pencil.svg";
import usersIcon from "../../assets/icons/users.svg";
import ticketIcon from "../../assets/icons/ticket.svg";
import starsIcon from "../../assets/icons/stars.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#244d4d", color: "white" }}>
                <div className="container pt-5">
                    <div className="row h-83-vh">
                        <div className="col-xl-4 col-12">
                            <div className="display-2 fw-semibold mt-5 pt-5 position-relative me-m-200" style={{ zIndex: "1" }}>Modern Intetior <br /> Design Studio.</div>
                            <button className="btn btn-lg btn-dark rounded-0 mt-5 shadow">Explore Now</button>
                        </div>
                        <div className="col-xl-4 col-12 align-self-end">
                            <img src={bannerImg} alt="" className="img-fluid banner-img" />
                        </div>
                        <div className="col-xl-4 col-12 align-self-end text-xl-end mb-5 mt-lg-0 mt-5">
                            <div className="me-m-200">
                                <div className="display-6 mb-4">We will make the Unique <br /> & Modern Style of your <br /> Interior design.</div>
                                <img src={bannerCardImg} alt="" className="img-fluid shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-xl-6 col-12 order-xl-first order-last">
                        <img src={card1} alt="" className="img-fluid" />
                        <div className="h2 mt-4 fw-semibold">Let’s Start the Design, Call us</div>
                        <Link to="" className="text-dark h3 fw-normal mt-2 d-inline-block">+12345 678 912</Link>
                    </div>
                    <div className="col-xl-6 col-12 order-xl-last order-first">
                        <div className="text-secondary" style={{ letterSpacing: "2px" }}>WELCOME TO DECORAL</div>
                        <div className="display-2 mt-4 mb-5 fw-semibold" style={{ lineHeight: "80px" }}>Intetior Design <br /> with Different Approach</div>
                        <div className="w-75 text-secondary" style={{ lineHeight: "30px" }}>Decoral is one of the most popular Travel agency for those who want to explore the wold and try to make adventure provide the best design</div>
                        <button className="btn btn-dark rounded-0 px-3 d-block my-3">Contact Us</button>
                        <div className="d-flex justify-content-end w-xl-75 mb-3">
                            <img src={card2} alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center display-5 fw-semibold my-5 py-5">
                We provide different <br /> types of Interior design
            </div>

            <div className="container my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-xl-4">
                        <div className="border-bottom pb-4 mb-4 w-xl-75">
                            <div className="h2">Home Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                        <div className="border-bottom pb-4 mb-4 w-xl-75">
                            <div className="h2">Office Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                        <div className="pb-4 mb-4 w-xl-75">
                            <div className="h2">Restaurant Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <img src={card3} alt="" className="img-fluid mb-4" />
                    </div>
                    <div className="col-xl-4">
                        <div className="border-bottom pb-4 mb-4 w-xl-75">
                            <div className="h2">Home Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                        <div className="border-bottom pb-4 mb-4 w-xl-75">
                            <div className="h2">Office Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                        <div className="pb-4 mb-4 w-xl-75">
                            <div className="h2">Restaurant Interior</div>
                            <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="display-4 fw-semibold mb-4">Why people choose Decoral</div>
                        <div className="text-secondary mb-4">Decoral is one of the most popular Travel agency for those who want to explore the wold and try</div>
                        <div className="d-flex align-items-center mb-5">
                            <img src={pencilIcon} alt="" className="img-fluid me-4" />
                            <div>
                                <div className="h3">Modern Design</div>
                                <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                            </div>
                        </div>
                        <img src={card4} alt="" className="img-fluid mb-3" />
                    </div>
                    <div className="col-xl-4">
                        <img src={card5} alt="" className="img-fluid" />
                        <div className="d-flex align-items-center mt-5">
                            <img src={usersIcon} alt="" className="img-fluid me-4" />
                            <div>
                                <div className="h3">Modern Design</div>
                                <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-5">
                            <img src={ticketIcon} alt="" className="img-fluid me-4" />
                            <div>
                                <div className="h3">Modern Design</div>
                                <div className="text-secondary">Decoral is one of the most popular for for those who want to explore the</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <img src={card6} alt="" className="img-fluid mt-4" />
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-xl-6">
                        <img src={card7} alt="" className="img-fluid" />
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="display-4 mb-xl-3 mb-3 fw-semibold mt-m-50">Let’s check our latest Projects</div>
                            </div>
                            <div className="col-xl-7">
                                <img src={card8} alt="" className="w-100 mb-3" style={{ height: "260px", objectFit: "cover" }} />
                            </div>
                            <div className="col-xl-5">
                                <img src={card9} alt="" className="w-100" style={{ height: "260px", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mt-5">
                        <div className="row">
                            <div className="col-xl-6 col-6 text-center border-dark border-end pb-5">
                                <div className="h1">20</div>
                                <div className="text-seondary">Years of exprience</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center pb-5">
                                <div className="h1">20</div>
                                <div className="text-seondary">Years of exprience</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center border-dark border-top border-end pt-5">
                                <div className="h1">20</div>
                                <div className="text-seondary">Years of exprience</div>
                            </div>
                            <div className="col-xl-6 col-6 text-center border-dark border-top pt-5">
                                <div className="h1">20</div>
                                <div className="text-seondary">Years of exprience</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 mt-5">
                        <img src={card10} alt="" className="w-100" style={{ height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className="col-xl-5 mt-5">
                        <img src={card11} alt="" className="w-100" style={{ height: "250px", objectFit: "cover" }} />
                    </div>
                </div>
            </div>

            <div className="container py-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-xl-6 col-12">
                                <div className="display-5 mb-5 fw-semibold">Expressions of <br />our happy Customer</div>
                                <img src={starsIcon} className="img-fluid mb-4" />
                                <div className="text-secondary w-75 mb-5">
                                    “Decoral is one of the most popular Travel agency for those who want to explore the wold and try to make adventure provide the best design”
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={userImg} alt="" className="img-fluid rounded-circle" />
                                    <div className="ms-3">
                                        <div className="fw-semibold">Kemal Hojayew</div>
                                        <small>Frontend Web Developer</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                                <div className="row">
                                    <div className="col-xl-6 col-6 text-end">
                                        <img src={card12} alt="" className="img-fluid" style={{ borderRadius: "30% 0 30% 0" }} />
                                    </div>
                                    <div className="col-xl-6 col-6">
                                        <img src={card13} alt="" className="img-fluid mb-4" style={{ borderRadius: "30% 0 0 0" }} />
                                        <img src={card14} alt="" className="img-fluid" style={{ borderRadius: "0 30% 0 0" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-xl-6 col-12">
                                <img src={card15} alt="" className="img-fluid mb-4" />
                                <div className="text-secondary small mb-3">OCTOBER 11, 2021 | BY - ALLEN BLICK</div>
                                <div className="h2">Seven tips to help you get better interior design & Concept</div>
                                <div className="text-secondary mb-5">Read more</div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="display-4 mb-4">Latest Post <br /> from our Blog</div>
                                <div className="text-secondary mb-4 w-75">Decoral is one of the most popular Travel agency for those who want to explore the wold and try to make adventure provide the best design</div>
                                <button className="btn btn-dark rounded-0 px-4 mb-4">View All</button>
                                <div className="d-flex mt-3 flex-xl-row flex-column">
                                    <img src={card16} alt="" className="img-fluid me-xl-4 mb-xl-0 mb-4" />
                                    <img src={card17} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container text-center my-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="display-6 fw-semibold">Subscribe our Newsletter to get  <br />latest update and news</div>
                        <div className="text-secondary small mt-4">We recommended you to subscribe to our newsletter, enter your email <br /> below to get our latest updates, news, promotions and so on</div>
                        <div className="input-group mb-3 mt-5">
                            <input type="email" className="form-control rounded-0 small px-4 py-3" placeholder="Enter your email here" />
                            <span className="input-group-text bg-dark text-white rounded-0 px-4">Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home