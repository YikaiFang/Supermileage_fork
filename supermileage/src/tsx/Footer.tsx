import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="bg-light footer">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="copyright">Copyright &copy; Supermileage 2025</span>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/ubcsupermileage/" className="social-icon bg-dark d-flex justify-content-center hover:bg-blue-500">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/company/ubc-supermileage/about/" className="social-icon bg-dark d-flex justify-content-center hover:bg-blue-500">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.youtube.com/user/UBCSupermileageTeam" className="social-icon bg-dark d-flex justify-content-center hover:bg-blue-500">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}