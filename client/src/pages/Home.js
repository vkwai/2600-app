import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`/events/`)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [events.length]);

  const filteredEvents = events.filter(
    (x) => x.date > new Date().toISOString().slice(0, 10)
  );
  // console.log(filteredEvents);
  // console.log(new Date().getFullYear().toString());
  filteredEvents.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  filteredEvents.reverse();

  const upcoming = [];
  for (let i = 0; i < 4; i++) {
    //incase of < 4 events in db
    if (filteredEvents[i]) {
      upcoming.push(filteredEvents[i]);
    }
  }
  // console.log(upcoming);

  return (
    <div className="container py-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Langara Computer Science Club</h1>
          <p className="col-md-8 fs-4">
            Welcome! The Langara Computer Science Club is officially back! We
            are a student-run club dedicated to providing a space for students
            interested in computer science at Langara to learn, network, help
            each other out, and have fun! This year, we plan to host workshops,
            programming competitions, and meetups. Join our
            <span> </span>
            <a href="https://discord.gg/VgKxme4">Discord</a> to learn more!
          </p>
        </div>
      </div>

      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1>Upcoming Events ({filteredEvents.length})</h1>
      </header>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {upcoming.map((x) => {
          return (
            <div key={x._id} className="col">
              <div className="card">
                <img src={x.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      className="btn-link"
                      to={`/events/${x._id}`}
                      event={x}
                    >
                      {x.title} ({x.date})
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
