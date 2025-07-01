import Footer from "tsx/Footer";
import Navbar from "tsx/Navbar";
import Title from "tsx/Title";
import { FaHandshake, FaLeaf, FaUsers, FaMicrophone, FaAward, FaTags, FaHeart } from "react-icons/fa";

const Sponsors = () => {
    return (
        <div>
            <Navbar />
            <Title imageSrcPath="/media/images/contact.jpg" name="SPONSOR" />
            <section className="bg-white page-section py-10">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase mb-2">Sponsor Us</h2>
                            <div className="mx-auto" style={{ width: 60, height: 4, background: "linear-gradient(90deg, #00c6ff, #0072ff)", borderRadius: 2 }} />
                        </div>
                    </div>
                    <div className="row g-4 align-items-stretch bg-white">
                        {/* Become a Sponsor Card */}
                        {/* <div className="col-md-6">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h4 className="text-heading d-flex align-items-center mb-3">
                                        <FaHandshake className="me-2 text-primary" /> Become a Sponsor
                                    </h4>
                                    <p className="text-muted mb-4">
                                        Why sponsor us? Because it's easy and there are a lot of benefits:
                                    </p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><FaAward className="me-2 text-success" /> We issue tax receipts and business acknowledgements</li>
                                        <li className="mb-2"><FaMicrophone className="me-2 text-info" /> We speak at many school, public, and engineering events</li>
                                        <li className="mb-2"><FaUsers className="me-2 text-warning" /> We can come to speak at any of your events</li>
                                        <li className="mb-2"><FaLeaf className="me-2 text-success" /> We promote sustainability and minimize environmental impact</li>
                                        <li className="mb-2"><FaUsers className="me-2 text-primary" /> We help develop hard-working, well-rounded students</li>
                                        <li className="mb-2"><FaTags className="me-2 text-danger" /> Logo placement on the vehicle, website, and promotional materials</li>
                                        <li className="mb-2"><FaHeart className="me-2 text-pink" /> Great relationships with our existing sponsors</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* Learn More Card */}
                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 className="text-heading d-flex align-items-center mb-3">
                                            <FaLeaf className="me-2 text-success" /> Learn More
                                        </h4>
                                        <p className="text-muted">
                                            With our proven track record and previous media coverage, sponsoring us is a great way to show 
                                            that your company is helping to support an sustainable Canadian student engineering project.
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <a href="/2024-2025_Sponsor_Pack.pdf" className="btn btn-primary me-3" target="_blank" rel="noopener noreferrer">
                                            View Sponsorship Package
                                        </a>
                                        <a href="mailto:info@supermileage.ca" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="section-heading text-uppercase">Donate</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-muted">
                                To support UBC Supermileage via a donation, visit <a
                                href="https://donate.support.ubc.ca/page/20924/donate/1?transaction.dirgift=UBC+Supermileage+Team%20O961" 
                                target="_blank" rel="noopener noreferrer">
                                    this page
                                </a> to start the process. All donations are greatly appreciated!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Sponsors;