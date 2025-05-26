"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Socials from './Socials';

export default function Footer() {
    return (
        <footer className="bg-light footer" style={{ padding: "36px 0",  textAlign: "center" }}>
            <div className="container align-items-center">
                <div className="row align-items-center justify-content-between text-center text-md-start">
                    <div className="container">
                        <div className="row footer-pad">
                            <div className="col-md-4 col-12 text-center text-md-start">
                                <h4>Email</h4>
                                <p className="text-muted">
                                <a href="mailto:info@supermileage.ca">info@supermileage.ca</a>
                                </p>
                                <h4>Socials</h4>
                                <Socials/>
                            </div>
                            <div className="col-md-4 col-12 text-center text-md-start">
                                <h4>Team Contact</h4>
                                <p className="text-muted">
                                Valentino Jaber, Team Captain
                                </p>
                                <h4>Faculty Advisor</h4>
                                <p className="text-muted">
                                Jon Mikkelsen, Mech. Eng. Faculty <br/>
                                <a href="mailto:mikk@mech.ubc.ca">mikk@mech.ubc.ca</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-12 text-center text-md-start">
                                <h4>Mailing Address</h4>
                                <p className="text-muted">
                                UBC Supermileage Team <br/>
                                University of British Columbia <br/>
                                2054-6250 Applied Science Lane <br/>
                                Vancouver, BC, Canada V6T 1Z4
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div> 
                    <p className="text-center">Copyright <span className="copyright">&copy;</span> Supermileage 2025 </p>
                </div>
            </div>
        </footer>
    );
}