import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import FilterButton from "../components/FilterButton";
export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`/events/`)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [events.length]);

  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Past: (d) => new Date().toISOString().slice(0, 10) > d.date,
    Upcoming: (d) => new Date().toISOString().slice(0, 10) <= d.date,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  // events.sort(function (a, b) {
  //   return new Date(b.date) - new Date(a.date);
  // });

  // const eventCards = events.filter(FILTER_MAP[filter]).map((ev) => {
  //   return <EventCard key={ev._id} event={ev} />;
  // });
  let filteredEvents = events.filter(FILTER_MAP[filter]);
  filteredEvents.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  filteredEvents.reverse();
  const eventCards = filteredEvents.map((ev) => {
    return <EventCard key={ev._id} event={ev} />;
  });
  return (
    <div className="container py-md-5 ">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1>Events Collection</h1>
      </header>
      <div className="btn-group" role="group" aria-label="Basic example">
        {filterList}
      </div>
      <hr className="col-3 col-md-2 mb-5"></hr>

      <div className="row ">{eventCards}</div>
    </div>
  );
}
