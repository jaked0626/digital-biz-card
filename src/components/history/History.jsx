import Experience from './Experience';
import Education from './Education';

export default function History() {
  return (
    <div className="home">
      <Experience />
      <DogImages />
      <Education />
    </div>
  );
}

function DogImages() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="experience__image--container">
      <img src={`${base}peanut-pixel2.png`} alt="my beautiful peanut butter" />
      <img src={`${base}b1.png`} alt="my beautiful brownie" />
      <img src={`${base}p4.png`} alt="my beautiful peanut butter" />
      <img src={`${base}b2.png`} alt="my beautiful brownie" />
      <img src={`${base}p5.png`} alt="my beautiful peanut butter" />
    </div>
  );
}
