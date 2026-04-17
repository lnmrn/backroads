import Heading from "./Heading";
import Tour from "./Tour";
import tour1 from "../assets/tour-1.jpeg";
import tour2 from "../assets/tour-2.jpeg";
import tour3 from "../assets/tour-3.jpeg";
import tour4 from "../assets/tour-4.jpeg";
import { randomFutureDate } from "../helper";
import { useFetchTours } from "../hooks/useFetchTours";
import { useState } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const url = "https://www.course-api.com/react-tours-project";

function Tours() {
  const [isShown, setIsShown] = useState(false);
  const { error, isLoading, data: tours } = useFetchTours(url);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage />;

  return (
    <section className="section" id="tours">
      <Heading title="featured" highlight="tours" />

      <div className="section-center featured-center">
        {tours?.map((tour) => (
          <Tour
            key={tour.id}
            tour={tour}
            date={randomFutureDate(10)}
            info={tour.info}
            shortInfo={tour.info.slice(0, 100)}
          />
        ))}
      </div>
    </section>
  );
}

export default Tours;
