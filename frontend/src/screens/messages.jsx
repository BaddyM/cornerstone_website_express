import Footer from "./footer";
import Header from "./header";

export default function Messages(){
    document.title = "Messages";
    return(
        <>
            <Header/>
                <div className="container-fluid bg-white p-2 my-4">
                </div>
            <Footer/>
        </>
    )
}