import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>
      <Link
        className="btn btn-link"
        to={`/events/${props.record._id}`}
        event={props.record}
      >
        {props.record.title}
      </Link>
    </td>
    <td>{props.record.date}</td>
    <td>{props.record.location}</td>
    <td>{props.record.description}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function Admin(props) {
  const [data, setData] = useState([]);
  const [isCreating, setCreating] = useState(false);
  const [image, setImage] = useState({});
  function getImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
      });
  }

  useEffect(() => {
    getImage();
    async function getData() {
      const response = await fetch(`/events/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setData(records);
    }
    // function getRecords() {
    //   const response = fetch(`/events/`)
    //     .then((response) => {
    //       response.json();
    //     })
    //     .then((data) => {
    //       etRecords(data);
    //     });
    // }
    getData();
    return;
  }, [data.length, isCreating]);

  function deleteRecord(id) {
    fetch(`/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newRecords = data.filter((el) => el._id !== id);
      setData(newRecords);
    });
  }
  let rows = data.map((d) => {
    return (
      <Record record={d} deleteRecord={() => deleteRecord(d._id)} key={d._id} />
    );
  });

  const createButton = (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block"
      onClick={() => setCreating(true)}
    >
      Add Event
    </button>
  );
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    let empty = form.title + form.date + form.location + form.description;
    if (form.title === "" && empty !== "") {
      alert("Title is the minimum field");
    } else if (empty !== "") {
      // console.log(image);
      form.image = image.message;
      const newEvent = { ...form };

      fetch("/events/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      }).then(() => {
        setForm({
          title: "",
          date: "",
          location: "",
          description: "",
          image: "",
        });
        setCreating(false);
      });
    } else {
      setCreating(false);
    }
  }
  const creationMenu = (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title*</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={form.title}
          onChange={(e) => updateForm({ title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={form.date}
          onChange={(e) => updateForm({ date: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={form.location}
          onChange={(e) => updateForm({ location: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={form.description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Create event / Cancel"
          className="btn btn-primary"
        />
      </div>
    </form>
  );

  return (
    <div className="container py-md-5">
      {isCreating ? creationMenu : createButton}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
            <th scope="col">Editing</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
