import { Link } from "react-router-dom";

export default function EventPreview(props) {
  // <a href="#" className="btn btn-primary">Go somewhere</a>
  return (
    <div className="col-md-6 col-md-6 col-xl-4 mb-4 d-flex align-items-stretch">
      <div className="card">
        <div className="card-img-top img-fluid" style={{ width: "18rem" }}>
          <img
            src={props.event.image}
            className="card-img-top"
            alt={props.event.title}
          />
          <div className="card-body">
            <h5 className="card-title">
              <Link
                className="btn-link"
                to={`/events/${props.event._id}`}
                event={props.event}
              >
                {props.event.title} ({props.event.date})
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
