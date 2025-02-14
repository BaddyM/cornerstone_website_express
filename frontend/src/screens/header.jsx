import badge from "../images/badge.jpg";

function toggleSearch() {
    const searchInput = document.getElementById("search-input").style.display;
    if (searchInput == "none") {
        document.getElementById("search-input").style.display = "block";
        document.getElementById("search-input").style.animation = "search 2s ease-in-out both";
    } else {
        document.getElementById("search-input").style.display = "none";
    }
}

function showMenu() {
    const showMenu = document.getElementById("menu-btn").className;
    if (showMenu == "menu-btn active") {
        document.getElementById("menu-btn").classList.remove("active");
        document.getElementById("nav-container").classList.remove("is_open")
    } else {
        document.getElementById("menu-btn").classList.add("active");
        document.getElementById("nav-container").classList.add("is_open")
    }
}

export default function Header() {
    const title = "Cornerstone High School Nangabo";
    var pageTitle = document.title;
    return (
        <>
            <div className="top-header shadow mb-3">
                <div className="socials">
                    <a href="#" className="nav-link"><i className="bi bi-whatsapp"></i></a>
                    <a href="#" className="nav-link"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="nav-link"><i className="bi bi-tiktok"></i></a>
                </div>
                <div className="school_title_container">
                    <p className="fw-bold mb-0 text-uppercase h5" id="school_title">{title}</p>
                </div>
                <div className="search-group">
                    <button className="search-btn border-0" onClick={toggleSearch} type="button"><i className="bi bi-search"></i></button>
                    <input type="text" id="search-input" placeholder="Search" className="form-control rounded-0" />
                </div>
            </div>
            <button className="menu-btn" id="menu-btn" onClick={showMenu}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className="nav-container shadow-sm" id="nav-container">
                <img src={badge} width={80} height={80} alt="" />
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">About</a>
                            <ul className="dropdown-menu shadow border-0">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">About CHS</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Director</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Managing Director</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Headteacher</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Deputy Headteacher</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">DOS</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Staff Members</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Academics</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School TimeTable</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">UNEB Results</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">E-Learning</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Useful Resources</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">School Life</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Clubs</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Prefects Body</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Events</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School News</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Gallery</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Admission</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Fees</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Admission</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Portals</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Students</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Admin</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
