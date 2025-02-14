import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useParams } from "react-router";

function Messages() {
  const { id } = useParams();
  const [message, setMessage] = useState({});

  useEffect(() => {
    document.title = "Messages";
    fetchMessage();
  }, []);

  async function fetchMessage() {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/messages/${id}`)
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }

  if (Object.keys(message).length > 0) {
    return (
      <>
        <Header />
        <div className="container-fluid bg-white p-2 my-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/images/messages/${message.image}`}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </div>
                <div className="col-md-10">
                  <p className="fw-bold text-capitalize mb-2">
                    {message.title}'s Message
                  </p>
                  <hr style={{ margin: "10px 0px" }} />
                  <p className="">{message.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  {
    return (
      <>
        <Header />
        <div className="container-fluid bg-white p-2 my-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="row">
                <div className="alert alert-danger">Nothing to display</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Messages;
