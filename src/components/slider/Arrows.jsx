export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slider-button next" onClick={onClick}>
      <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-1" x2="28.5477" y2="-1" transform="matrix(-0.687633 -0.726058 -0.622345 0.782743 23.9199 23.3251)" stroke="#C2C5C7" strokeWidth="2"/>
      <line y1="-1" x2="26.2205" y2="-1" transform="matrix(-0.723435 0.690392 0.591089 0.806607 23.9199 23.3251)" stroke="#C2C5C7" strokeWidth="2"/>
      </svg>
    </button>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slider-button prev" onClick={onClick}>
      <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-1" x2="28.5477" y2="-1" transform="matrix(0.687633 -0.726058 0.622345 0.782743 1.99091 23.3251)" stroke="#C2C5C7" strokeWidth="2"/>
      <line y1="-1" x2="26.2205" y2="-1" transform="matrix(0.723435 0.690392 -0.591089 0.806607 1.99091 23.3251)" stroke="#C2C5C7" strokeWidth="2"/>
      </svg>
    </button>
  );
};
