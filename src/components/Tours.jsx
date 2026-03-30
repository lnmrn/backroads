import Heading from "./Heading";
import Tour from "./Tour";
import tour1 from "../assets/tour-1.jpeg";
import tour2 from "../assets/tour-2.jpeg";
import tour3 from "../assets/tour-3.jpeg";
import tour4 from "../assets/tour-4.jpeg";

function Tours() {
  return (
    <section className="section" id="tours">
      <Heading title="featured" highlight="tours" />

      <div className="section-center featured-center">
        <Tour
          image={tour1}
          date="august 26th, 2020"
          title="Tibet Adventure"
          location="china"
          duration={6}
          price={2100}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </Tour>
        <Tour
          image={tour2}
          date="october 1th, 2020"
          title="best of java"
          location="indonesia"
          duration={11}
          price={1400}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </Tour>
        <Tour
          image={tour3}
          date="september 15th, 2020"
          title="explore hong kong"
          location="hong kong"
          duration={8}
          price={5000}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </Tour>
        <Tour
          image={tour4}
          date="december 5th, 2019"
          title="kenya highlights"
          location="kenya"
          duration={20}
          price={3300}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </Tour>
      </div>
    </section>
  );
}

export default Tours;
