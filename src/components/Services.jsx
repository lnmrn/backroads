import Article from "./Article";
import Heading from "./heading";

function Services() {
  return (
    <section className="section services" id="services">
      <Heading title="our" highlight="services" />
      <div className="section-center services-center">
        <Article highlight="saving money">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
        <Article highlight="endless hiking">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
        <Article highlight="amazing comfort">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
      </div>
    </section>
  );
}

export default Services;
