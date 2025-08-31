import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);

  const typeFilters = searchParams.getAll("type");

  function toggleMultiValue(key, value) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const values = next.getAll(key);
      const exists = values.includes(value);

      next.delete(key); // clear all existing values
      const updated = exists
        ? values.filter((v) => v !== value)
        : [...values, value];
      updated.forEach((v) => next.append(key, v));
      return next;
    });
  }

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  function clearAllFilters() {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("type");
      return next;
    });
  }

  let displayed = vans;

  if (typeFilters.length) {
    displayed = vans.filter((v) => typeFilters.includes(v.type));
  }

  const vanElements = displayed.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {["simple", "rugged", "luxury"].map((type) => (
          <button
            key={type}
            onClick={() => toggleMultiValue("type", type)}
            className={`van-type ${type} ${
              typeFilters.includes(type) ? "selected" : ""
            }`}
          >
            {type[0].toUpperCase() + type.slice(1)}
          </button>
        ))}
        {typeFilters.length > 0 && (
          <button className="van-type clear-filters" onClick={clearAllFilters}>
            Clear all filters
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
