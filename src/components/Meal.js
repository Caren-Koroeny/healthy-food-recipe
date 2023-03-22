import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Meal.css';

const Meal = ({ id, name, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="meal-container">
      <div
        className={`meal-card ${isVisible ? 'fade-in is-visible' : 'fade-in'}`}
        data-testid="meal-card"
        key={id}
        ref={ref}
      >
        <Link className="cards " to={`/meal/${id}`}>
          <div>
            <img className="image" src={image} alt={name} />
          </div>
          <div>
            <h3 className="title">{name}</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Meal;
