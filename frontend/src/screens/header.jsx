import badge from "../images/badge.jpg";
import {Icons} from "react-icons";

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

            <nav
                class="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={badge} width={50} height={50} alt="" />
                    </a>
                    <button
                        class="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item"><a href="/" className="nav-link" > <i className="bi bi-house"></i> Home</a></li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">About</a>
                            <ul className="dropdown-menu shadow border-0">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">About CHS</a></li>
                                <li className="dropdown-item"><a href="/Staff" className="nav-link text-primary">Staff Members</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i className="bi bi-book"></i> Academics</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School TimeTable</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Subjects Taught</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">UNEB Results</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">E-Learning</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Useful Resources</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i className="bi bi-pen"></i> School Life</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Clubs</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Prefects Body</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Events</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School News</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Gallery</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i className="bi bi-journal"></i> Admission</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School Fees</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Admission</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i className="bi bi-lock"></i> Portals</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Students</a></li>
                                <li className="dropdown-item"><a href="https://admin.cornerstonehighschoolnangabo.com/" className="nav-link text-primary">Admin</a></li>
                            </ul>
                        </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0">
                            <input
                                class="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                class="btn btn-outline-primary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            


            <button className="menu-btn d-none" id="menu-btn" onClick={showMenu}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className="nav-container shadow-sm d-none" id="nav-container">
                <img src={badge} width={80} height={80} alt="" />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">About</a>
                            <ul className="dropdown-menu shadow border-0">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">About CHS</a></li>
                                <li className="dropdown-item"><a href="/Staff" className="nav-link text-primary">Staff Members</a></li>
                            </ul>
                        </li>
                        <li className="dropdown" style={{zIndex:"99"}}>
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Academics</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">School TimeTable</a></li>
                                <li className="dropdown-item"><a href="#" className="nav-link text-primary">Subjects Taught</a></li>
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
                                <li className="dropdown-item"><a href="https://admin.cornerstonehighschoolnangabo.com/" className="nav-link text-primary">Admin</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
