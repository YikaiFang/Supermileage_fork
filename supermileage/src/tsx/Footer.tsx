import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <footer className="bg-light footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <span className="copyright">Copyright &copy; Supermileage 2025</span>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/ubcst/" className="inline-flex rounded-full w-5 h-5 bg-blue-500 items-center justify-center">
                                    <i className="fab fa-facebook-f" ></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/ubcsupermileage/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/company/ubc-supermileage/about/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.youtube.com/user/UBCSupermileageTeam">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}