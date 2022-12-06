import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    records: [],
  });
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`/events/${params.id.toString()}`);
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        history.push("/");
        return;
      }
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, history]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      title: form.title,
      date: form.date,
      location: form.location,
      description: form.description,
      image: form.image,
    };

    await fetch(`/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    history.push("/Admin");
  }

  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">title: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">date: </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">location: </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description: </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
