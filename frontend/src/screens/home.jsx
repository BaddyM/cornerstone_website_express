import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import school_image from "../images/school.jpg";
import LazyLoad from "react-lazyload";
import {Watch} from "react-loader-spinner";

function Home() {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchEvents() {
    try {
      const url = process.env.REACT_APP_BACKEND_URL + "/events";
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setEvents(data));
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  async function fetchNews() {
    try {
      const url = process.env.REACT_APP_BACKEND_URL + "/news";
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setNews(data));
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  async function fetchMessages() {
    try {
      const url = process.env.REACT_APP_BACKEND_URL + "/messages";
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .then(() => setLoading(false));
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  useEffect(() => {
    document.title = "Home";
    fetchEvents();
    fetchNews();
    fetchMessages();
  }, []);

  function fullDate(date) {
    var fullDate = date.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const year = new Date(fullDate[0]).getFullYear();
    const monthIndex = new Date(fullDate[1]).getMonth();
    const month = months[monthIndex];
    const day = new Date(date).getDate();
    const dayOfWeekIndex = new Date(date).getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const full_date = `${dayOfWeek}, ${day} ${month}, ${year}`;
    return full_date;
  }

  if(loading == true){
    return(<>
    <div className="loading_container">
    <Watch
    color="rgba(0, 103, 168, 0.8)"
    />
    </div>
    </>);
  }else{
    return (
        <>
          <Header />
          <div className="container-fluid py-3 bg-white my-4">
            <div className="home-school-img-container">
              <div>
                <p className="mb-0 text-center">
                  <span className="school_title_home">
                    Cornerstone High School Nangabo
                  </span>{" "}
                  Is an O and A level secondary school with both Day and Boarding,
                  Arts and Sciences.
                </p>
                <div></div>
                <img src={school_image} className="img-fluid" alt="" />
              </div>
            </div>
    
            <div className="text-center w-100 d-flex justify-content-center">
              <div className="title-border col-md-4 text-center">
                <h5 className="text-danger">Message from the Administration</h5>
              </div>
            </div>
    
            <div className="messages-container row">
              {messages.map((message) => {
                return (
                  <div key={message.id} className="col-md-3 my-3 messages">
                    <div className="card shadow-sm border-0 rounded-0">
                      <div className="d-flex align-items-top">
                        <LazyLoad>
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/images/messages/${message.image}`}
                            style={{ width: "150px", height: "150px" }}
                            className="img-fluid object-fit-contain"
                            alt="message_img"
                          />
                        </LazyLoad>
                        <div className="card-body">
                          <p className="fw-bold mb-0">{message.title}</p>
                          <hr className="my-1" />
                          <p
                            className="mb-0"
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              width: "100px",
                            }}
                          >
                            {message.message}
                          </p>
                          <a
                            className="submit-btn text-decoration-none"
                            href={`/Messages/${message.id}`}
                          >
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
    
            <div className="events_calendar_container row mt-4 justify-content-around">
              <div className="col-md-6 card border-0 shadow">
                <div className="card-body">
                  <p className="mb-0 fw-bold text-center mb-3 text-uppercase">
                    Latest News
                  </p>
                  <div className="">
                    {news.map((n) => (
                      <div className="row mb-4 align-items-center" key={n.id}>
                        <div className="col-md-5">
                          <LazyLoad offset={100}>
                            <img
                              src={`${process.env.REACT_APP_BACKEND_URL}${n.image}`}
                              className="img-fluid img-thumbnail"
                              alt="Image"
                            />
                          </LazyLoad>
                        </div>
                        <div className="col-md-7">
                          <p className="mb-2 fw-bold text-capitalize">{n.title}</p>
                          <p className="mb-0">{n.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    
              <div className="col-md-5 text-center">
                <p className="mb-0 fw-bold mb-3 text-uppercase">School Calendar</p>
                {events.map((event) => (
                  <div className="calendar_event row mb-3" key={event["id"]}>
                    <div className="col-md-3">
                      <p className="mb-0">{fullDate(event["date"])}</p>
                    </div>
                    <div className="col-md-7 text-start">
                      <p className="mb-0">{event["event"]}</p>
                      <p className="mb-0 text-secondary">{event["period"]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}

export default Home;
