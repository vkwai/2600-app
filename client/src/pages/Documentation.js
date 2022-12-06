export default function Documentation(props) {
  const ul = [
    "General",
    "Home page",
    "Event page pt.1",
    "Event page pt.2",
    "About",
    "Admin pt.1",
    "Admin pt.2",
  ];
  const li = [
    [
      "Express rest api persisting to 2 mongodb collections (events (dynamic), executives (static))",
      "Consumes public dog api (see sources)",
      "React front end with vanilla bootstrap",
    ],
    ["Filter by upcoming recency up to 4 events in sorted order"],
    ["Filter buttons (All, upcoming, past)", "sorted by date"],
    ["Show full details of events (distinct id path)"],
    [
      "Filter batch of executes by year (and sorted by descending title). year list in dropdown are dynamic",
    ],
    ["Table view of all events", "Add a new event (toggled)", "Delete event"],
    ["From edit, change desired fields (distinct id path)"],
  ];

  let index = 0;
  const list = ul.map((x) => {
    let z = (
      <span key={x}>
        {x}
        <ul>
          {li[index].map((y) => {
            return <li key={y}>{y}</li>;
          })}
        </ul>
      </span>
    );
    index++;
    return z;
  });
  return (
    <div className="container">
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <h1>Documentation</h1>
        </header>

        <main>
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Quickstart</h2>
              <p>
                Have node installed and npm install. In Addition, install{" "}
                <a href="https://icons.getbootstrap.com/">bootstrap icons</a>,
                uninstall the latest version of react-router (6 or above) and
                run npm install react-router-dom@^5.3.0
              </p>
              <p>
                1. Using the navigation above, head over to Admin and create a
                new event
              </p>
              <p>
                2. Than see your changes persisted across home, events , and
                admin page
              </p>
            </div>

            <div className="col-md-6">
              <h2>Features</h2>
              {list}
            </div>
          </div>
          <div className="container">
            <h5>Discrepencies</h5>
            <ul>
              <li>The only async function for admin page</li>
              <li>Not using the componentized card in home page</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
