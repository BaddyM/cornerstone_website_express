import { useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"


function StaffMembers(){
    const [staff, setStaff] = useState([]);

    useEffect(()=>{
        document.title = "Staff Members"
        fetchStaff();
    },[]);

    async function fetchStaff(){
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/staff`)
                .then((res) => res.json())
                .then((data) => setStaff(data))
    }

 return (<>
    <Header/>
        <div className="container-fluid my-4">
            <div className="bg-light my-2">
                <p className="p-2">All our staff members are highly qualified, decent and always available for your child. We offer both Arts and Sciences and all major subjects are taught at the institution. <br /> These are some of the staff members at our institution and the subjects they teach. </p>
            </div>

            <div className="row justify-content-around">
                {
                    staff.map((item) => (
                        <div className="col-md-4 shadow-sm staff_container d-flex bg-light p-2" style={{gap:"10px"}} key={item.id}>
                            <div className="col-md-3">
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/images/staff/${item.image}`} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-9">
                                <p className="mb-2 fw-bold">{item.title}</p>
                                <hr style={{margin:"5px 0px",width:"150px"}}/>
                                <p className="mb-1">Subjects</p>
                                <div className="row">
                                {(item.subjects.split(",")).map((subject) => (
                                    <div className="col-md-3">
                                        <div className="badge bg-primary bg-gradient">{subject}</div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    <Footer/>
 </>)
}

export default StaffMembers