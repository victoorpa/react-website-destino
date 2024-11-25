import { Fragment } from "react";
import css from './nosotros.module.css';
import oficinaDestino from './resources/oficinaDestino.png';

function ExperienceSection() {
  return (
    <section className={`${css.section__container} ${css.experience__container}`} id="about">
      <div className={css.experience__image}>
        <img src={oficinaDestino} alt="experience" />
      </div>
      <div className={css.experience__content}>
        <p className={css.section__subheader}>QUIÉNES SOMOS</p>
        <h2 className={css.section__header}>
          Con 25 años de experiencia en el sector
        </h2>
        <p className={css.section__description}>
          ofrecemos un legado de excelencia en la creación de experiencias de
          viaje excepcionales. Nuestro equipo experimentado se dedica a diseñar
          itinerarios memorables, asegurando que cada viaje sea único y
          satisfactorio. Confíe en nosotros para hacer realidad sus aventuras
          con profesionalismo y cuidado. <br />
          <br />
          <em>
            ¡Descubra lo que podemos hacer por usted! Explore nuestras ofertas y
            comience a planear su próximo viaje hoy.
          </em>
        </p>
      </div>
    </section>
  );
}

export default ExperienceSection;
