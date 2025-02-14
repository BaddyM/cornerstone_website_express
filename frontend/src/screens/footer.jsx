import badge from "../images/badge.jpg";
const currentDate = new Date();
    
export default function Footer(){
    return(
        <>
            <footer className="bg-white shadow-sm p-3 row w-100 justify-content-around">
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <img src={badge} width={100} height={100} alt="" />
                </div>
                <div className="col-md-3">
                    <div className="title-border">
                    <p className="text-center fw-bold text-uppercase mb-0">Please reach us on</p>
                    </div>
                    <ol className="list-group shadow-sm">
                        <li className="list-group-item border-0">0775-056-259</li>
                        <li className="list-group-item border-0">0701-265-456</li>
                        <li className="list-group-item border-0">0705-362-665</li>
                        <li className="list-group-item border-0">0783-237-698</li>
                    </ol>
                </div>
                <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.6674715811469!2d32.57700520158453!3d0.4497929448145833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db3d585a0ddd5%3A0xb5bfd3e27ce19bdf!2sMiracle%20Christian%20Fellowship%20Ministries%2C%20Nangabo!5e1!3m2!1sen!2sug!4v1737588979151!5m2!1sen!2sug" width={200} height={200}></iframe>
                </div>
            </footer>
            <div className="text-center py-2">
                <p className="mb-0 fw-bold">{currentDate.getFullYear()} All rights reserved <i className="bi bi-c-circle"></i> Copyright</p>
            </div>
        </>
    )
}