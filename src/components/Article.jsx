function Article({ children, highlight, icon }) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{highlight}</h4>
        <p className="service-text">{children}</p>
      </div>
    </article>
  );
}

export default Article;
