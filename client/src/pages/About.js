import { useEffect, useState } from "react";

const Executive = (props) => (
  <div className="my-3 p-3 bg-white rounded box-shadow">
    <h2 className="border-bottom border-gray pb-2 mb-0">
      {props.data.position}
    </h2>
    <div className="media text-muted pt-3">
      {/* <img className="img-thumbnail"></img> */}
      <img
        data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
        alt="64x64"
        className="mr-2 rounded"
        // style="width 32px; height: 32px;"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_184d5215df5%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_184d5215df5%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.836840629577637%22%20y%3D%2216.960000014305116%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
      ></img>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        {/* <h5 className="d-block text-gray-dark">{props.data.name}</h5> */}
        <strong className="d-block text-gray-dark">{props.data.name}</strong>
        {props.data.email}
      </p>
    </div>
  </div>
);
export default function About(props) {
  const [executives, setExecutives] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear().toString());

  useEffect(() => {
    fetch("http://localhost:5000/executives")
      .then((response) => response.json())
      .then((data) => {
        setExecutives(data);
      });
  }, []);
  //filter then sort

  let availableYears = executives.map((x) => {
    return x.year;
  });
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  let uniqueYears = availableYears.filter(unique);
  uniqueYears.sort();
  uniqueYears.reverse();
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  let filterList = (
    <select className="form-select" value={year} onChange={handleYear}>
      {uniqueYears.map((x) => {
        return (
          <option key={x} value={x}>
            {x}
          </option>
        );
      })}
    </select>
  );

  let list = executives.filter((x) => x.year === year);
  let sortOrder = ["President", "VicePresident", "else"];
  list.sort(function (a, b) {
    if (sortOrder.includes(a.position)) {
      return sortOrder.indexOf(a.position) - sortOrder.indexOf(b.position);
    } else {
      return 1;
    }
  });
  let renderedList = list.map((x) => {
    return <Executive key={x._id} data={x} />;
  });
  return (
    <div className="container py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1>About</h1>
      </header>
      <h3>Generic Q and A here</h3>
      <p>Ans to Generic Q and A here</p>
      <h3>List of Executives (By Year)</h3>
      {filterList}
      <div>{renderedList}</div>
    </div>
  );
}
