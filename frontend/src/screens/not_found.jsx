import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import not_found from "../images/not_found.jpg";

function NotFound(){
    useEffect(()=>{
        document.title = "Page not found"
    },[]);

    return (<>
        <Header/>
            <div className="container-fluid my-4 text-center">
                <p className="fw-bold text-uppercase text-danger">Sorry, page not found</p>
                <img src={not_found} width={400} alt="" />
            </div>
        <Footer/>
    </>)
}

export default NotFound;