function Tour({ children, tour, date }) {
  const { name, image, info, price } = tour;
  const [title, duration] = name.split("in");

  const location = title.split("of").at(-1);

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">
          {date.toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{children}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{duration} </p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
