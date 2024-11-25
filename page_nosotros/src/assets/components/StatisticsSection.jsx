import { Fragment } from "react";
import css from './nosotros.module.css';

function StatisticsSection() {
  return (
    <section className={css.statistics}>
      <div className={`${css.section__container} ${css.statistics__container}`}>
        <p className={css.section__subheader}>NUESTRA EXCELENCIA</p>
        <h2 className={css.section__header}>
          Viajes inspiradores con enfoque en la calidad
        </h2>
        <p className={css.section__description}>
          En <em>Destino</em>, nos enorgullece ofrecer experiencias de viaje que
          combinan lujo, comodidad y aventuras únicas. Nuestras estadísticas
          reflejan el impacto de nuestro compromiso con la excelencia:
        </p>
        <div className={css.statistics__grid}>
          <div className={css.statistics__card}>
            <h4>137</h4>
            <p>Destinos explorados</p>
          </div>
          <div className={css.statistics__card}>
            <h4>32</h4>
            <p>Experiencias personalizadas</p>
          </div>
          <div className={css.statistics__card}>
            <h4>15</h4>
            <p>Recomendaciones positivas</p>
          </div>
          <div className={css.statistics__card}>
            <h4>5063</h4>
            <p>Clientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
