import { Fragment } from "react";
import css from './nosotros.module.css';
import alojamiento from './resources/alojamiento.jpg';
import transporte from './resources/transporte.jpg';
import actividades from './resources/actividades.jpg';
import itinerario from './resources/itinerario.jpg';

function ValueSection() {
  return (
    <section className={css.values} id="values">
      <div className={`${css.section__container} ${css.values__container}`}>
        <p className={css.section__subheader}>¿POR QUÉ ELEGIRNOS?</p>
        <h2 className={css.section__header}>Nuestros valores fundamentales</h2>
        <p className={css.section__description}>
          En <em>Destino</em>, cada aspecto de nuestro servicio está guiado por
          valores que garantizan una experiencia de viaje excepcional y
          confiable. Conozca lo que nos distingue y por qué somos su mejor
          opción.
        </p>
        <div className={css.values__grid}>
          <div className={css.values__card}>
            <img src={alojamiento} alt="values" />
            <h4>Calidad en el servicio</h4>
            <p>
              Nos comprometemos a ofrecer alojamientos y servicios premium que
              aseguran comodidad y satisfacción en cada etapa de su viaje.
            </p>
          </div>
          <div className={css.values__card}>
            <img src={transporte} alt="values" />
            <h4>Integridad y transparencia</h4>
            <p>
              Operamos con total honestidad, proporcionando información clara y
              precisa para que confíe en cada detalle de su experiencia con
              nosotros.
            </p>
          </div>
          <div className={css.values__card}>
            <img src={actividades} alt="values" />
            <h4>Compromiso ambiental</h4>
            <p>
              Adoptamos prácticas de turismo responsable, protegiendo el medio
              ambiente y apoyando a las comunidades locales en todos nuestros
              destinos.
            </p>
          </div>
          <div className={css.values__card}>
            <img src={itinerario} alt="values" />
            <h4>Atención personalizada</h4>
            <p>
              Personalizamos cada itinerario para adaptarnos a sus preferencias
              y necesidades, garantizando una experiencia de viaje única y a
              medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
