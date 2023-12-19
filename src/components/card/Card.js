import "./card.scss";

export default function Card({ bgImage, text }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={bgImage} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}
