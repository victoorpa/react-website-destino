import { Fragment } from "react";
import css from './nosotros.module.css';

function ContactSection() {
  return (
    <section className={css.contact}>
      <div className={`${css.section__container} ${css.contact__container}`}>
        <div className={css.contact__content}>
          <p className={css.section__subheader}>¿TIENES DUDAS O PREGUNTAS?</p>
          <h2 className={css.section__header}>
            ¡Descubre el viaje perfecto para ti!
          </h2>
          <p className={css.section__description}>
            Si tienes preguntas o necesitas orientación, contacta a un asesor y
            te ayudaremos a elegir la opción ideal.
          </p>
          <div className={css.contact__btns}>
            <button className={css.btn}>Contacto</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
