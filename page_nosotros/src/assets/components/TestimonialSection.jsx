import { Fragment, useEffect } from "react";
import css from "./nosotros.module.css";
import testimonial1 from "./resources/testimonial-1.jpg";
import testimonial2 from "./resources/testimonial-2.jpg";
import testimonial3 from "./resources/testimonial-3.jpg";

function TestimonialSection() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <section
      className={`${css.section__container} ${css.testimonial__container}`}
      id="client"
    >
      <p className={css.section__subheader}>TESTIMONIOS DE CLIENTES</p>
      <h2 className={css.section__header}>Con recuerdos inolvidables</h2>

      <div className="swiper">
        {" "}
        {/* Slider container */}
        <div className="swiper-wrapper">
          {" "}
          {/* Additional required wrapper */}
          <div className="swiper-slide">
            {" "}
            {/* Slides */}
            <div className={css.testimonial__card}>
              <img src={testimonial1} alt="testimonial" />
              <p>
                Mi experiencia con Destino fue fantástica. Cada detalle del
                viaje fue impecable y el servicio superó mis expectativas. Sin
                duda, volveré a elegirlos para mis próximas aventuras.
              </p>
              <h4>- Rhaenyra T.</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className={css.testimonial__card}>
              <img src={testimonial2} alt="testimonial" />
              <p>
                Destino hizo de mi viaje una experiencia inolvidable. Desde la
                planificación hasta el regreso, todo fue perfecto. La atención
                al cliente y la calidad del servicio superaron mis expectativas.
                ¡Recomiendo esta agencia al 100%!
              </p>
              <h4>- Alysanne H.</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className={css.testimonial__card}>
              <img src={testimonial3} alt="testimonial" />
              <p>
                Contratar a Destino fue una decisión excelente. Los itinerarios
                fueron bien diseñados y cada actividad fue memorable. El equipo
                se encargó de todo con gran profesionalismo. ¡Definitivamente
                volveré a viajar con ellos!
              </p>
              <h4>- Corlys V.</h4>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default TestimonialSection;
