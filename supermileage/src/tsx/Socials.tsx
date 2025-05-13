export default function Socials() { 
    return ( 
        <div className="container">
        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a 
                                href="https://www.instagram.com/ubcsupermileage/" 
                                className="social-icon bg-dark d-flex justify-content-center align-items-center rounded-circle hover:bg-blue-500">
                                    <i className="bi bi-instagram fs-5"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a 
                                href="https://www.linkedin.com/company/ubc-supermileage/about/" 
                                className="social-icon bg-dark d-flex justify-content-center align-items-center rounded-circle hover:bg-blue-500">
                                    <i className="bi bi-linkedin fs-5"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a 
                                href="https://www.youtube.com/user/UBCSupermileageTeam" 
                                className="social-icon bg-dark d-flex justify-content-center align-items-center rounded-circle hover:bg-blue-500">
                                    <i className="bi bi-youtube fs-5"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
    );
}