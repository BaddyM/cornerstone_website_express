import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import dos from "../images/messages/dos.jpg";
import deputy from "../images/messages/deputy.jpg";
import hm from "../images/messages/headteacher.jpg";
import director from "../images/messages/director.png";
import manager from "../images/messages/managing.png";
import school_image from "../images/school.jpg";
import LazyLoad from "react-lazyload";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

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

  useEffect(() => {
    document.title = "Home";
    fetchEvents();
    fetchNews();
  }, []);

  const messageImages = [director, manager, hm, deputy, dos];
  const messageTitle = [
    "Director",
    "Managing Director",
    "Headteacher",
    "Deputy Headteacher",
    "DOS",
  ];
  var counter = 0;

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

  fullDate("2025-02-13");

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
          {messageImages.map((item) => {
            counter = counter + 1;
            return (
              <div key={counter} className="col-md-3 my-3 messages">
                <div className="card shadow-sm border-0 rounded-0">
                  <div className="d-flex align-items-top">
                    <img
                      src={item}
                      style={{ width: "150px", height: "150px" }}
                      className="img-fluid object-fit-contain"
                      alt="message_img"
                    />
                    <div className="card-body">
                      <p className="fw-bold mb-0">{messageTitle[counter]}</p>
                      <hr className="my-1" />
                      <a
                        className="submit-btn text-decoration-none"
                        href={`/Messages/${counter}`}
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
                    <LazyLoad
                    offset={100}
                    >
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
