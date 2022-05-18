import ButtonLink from '../buttons/ButtonLink';
import { services_c, mg, hand_up, services } from './Services.module.css';

const Services = () => {
  return (
    <div className={`${services_c} ${mg}`}>
      <div className={hand_up}></div>
      <div className={services}>
        <h3>¿Qué servicios ofrezco?</h3>
        <p>
          La Fisioterapia es una disciplina del área de salud que tiene como
          objetivo diagnosticar, prevenir, tratar y/o rehabilitar diferentes
          tipos de dolencias, tanto agudas como crónicas, por medio de las
          siguientes técnicas especializadas:
        </p>
        <p>
          Crioterapia, Termoterapia, Masoterápia, Fisioterapia Respiratoria y
          Cinesiterapia.
        </p>
        <ButtonLink text={'Ir a Servicios'} toURL={'/servicios'} />
      </div>
    </div>
  );
};

export default Services;
