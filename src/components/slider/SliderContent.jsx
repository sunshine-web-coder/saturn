import style from "./Slider.module.scss"
export default function SliderContent({ content }) {
  return (
    <div className={`${style.slider_content}`}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
  );
}
