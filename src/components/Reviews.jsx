import { useState } from "react";
import { reviews } from "../data";
import Heading from "./Heading";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, tour, image, text } = reviews[currentIndex];

  function handleNext() {
    setCurrentIndex((index) => (index >= reviews.length - 1 ? 0 : index + 1));
  }

  function handlePrevious() {
    setCurrentIndex((index) => (index <= 0 ? reviews.length - 1 : index - 1));
  }

  function handleSuprise() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === currentIndex) randomIndex = randomIndex + 1;

    const isOutOfBounds = randomIndex > reviews.length - 1;
    if (isOutOfBounds) randomIndex = randomIndex - 1;
    setCurrentIndex(randomIndex);
  }

  return (
    <section className="section services" id="reviews">
      <Heading title="Our" highlight="reviews" />
      <div className="review">
        <div className="review-card">
          <div className="img-container">
            <img src={image} className="person-img" />
          </div>

          <h3>{name}</h3>
          <h4 className="review-tour">{tour}</h4>
          <p>{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrevious}>
              <i className="fas fa-less-than"></i>
            </button>

            <button onClick={handleNext} className="next-btn">
              <i className="fas fa-greater-than"></i>
            </button>
          </div>
          <button className="btn suprise" onClick={handleSuprise}>
            Suprise me!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
