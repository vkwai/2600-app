export default function Sources(props) {
  const ul = ["Tutorials", "APIs"];
  const li = [
    [
      "CPSC 2600 Materials",
      "https://www.mongodb.com/languages/mern-stack-tutorial",
    ],
    ["https://dog.ceo/dog-api/"],
  ];
  const bootStrapUl = ["Documentation", "Others"];
  const bootStrapLi = [
    [
      "https://getbootstrap.com/docs/5.2/forms/select/",
      "https://getbootstrap.com/docs/5.2/layout/containers/",
      "https://getbootstrap.com/docs/5.2/components/buttons/",
      "https://getbootstrap.com/docs/5.2/components/button-group/",
      "https://getbootstrap.com/docs/5.2/components/card/",
      "https://getbootstrap.com/docs/5.2/components/dropdowns/",
      "https://getbootstrap.com/docs/5.2/examples/product/",
      "https://getbootstrap.com/docs/5.2/examples/sticky-footer-navbar/",
    ],
    [
      "https://stackoverflow.com/questions/62796071/bootstrap-footer-doesnt-stick-to-the-bottom-of-the-page",
      "https://getbootstrap.com/docs/5.2/examples/starter-template/",
      "https://getbootstrap.com/docs/5.2/examples/product/",
    ],
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
  index = 0;
  const bootStrapList = bootStrapUl.map((x) => {
    let z = (
      <span key={x}>
        {x}
        <ul>
          {bootStrapLi[index].map((y) => {
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
          <h1>Sources</h1>
        </header>

        <main>
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  Inspiration
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="list-settings"
                >
                  General Sources
                </a>
                <a
                  className="list-group-item list-group-item-action "
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  Bootstrap Sources
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade "
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  {list}
                </div>
                <div
                  className="tab-pane fade "
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  {bootStrapList}
                </div>

                <div
                  className="tab-pane fade show active"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <ul>
                    <li>https://ubccsss.org/</li>
                    <li>https://sfucsss.org/</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
