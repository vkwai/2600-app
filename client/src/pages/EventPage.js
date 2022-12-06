import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

export default function EventPage(props) {
  const [data, setData] = useState([]);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    const id = params.id.toString();
    fetch(`/events/${id.toString()}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [params.id, history]);
  // console.log(props.event);
  console.log(data);
  /*

    */
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1>
          {data.title} ({data.date} at {data.location})
        </h1>
      </header>
      <img src={data.image} class="img-fluid" alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
}
