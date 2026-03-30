import Article from "./Article";
import Heading from "./Heading";

function Services() {
  return (
    <section className="section services" id="services">
      <Heading title="our" highlight="services" />
      <div className="section-center services-center">
        <Article highlight="saving money" icon="fas fa-wallet fa-fw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
        <Article highlight="endless hiking" icon="fas fa-tree fa-fw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
        <Article highlight="amazing comfort" icon="fas fa-socks fa-fw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </Article>
      </div>
    </section>
  );
}

export default Services;
