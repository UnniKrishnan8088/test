import Card from "../card/Card";
import "./cardsContainer.scss";

export default function CardContainer() {
  return (
    <div className="card-container">
      <Card
        bgImage="https://duet-cdn.vox-cdn.com/thumbor/0x0:1920x1080/828x552/filters:focal(960x540:961x541):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/11630099/Fortnite_20180630171046.jpg"
        text="Discover even more ways to play across thousands of creator-made game genres"
      />
      <Card
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWWaS4VkXLPhlP9wptRpNJy6T1ZQUPaUibRdyMWVDrNeeafVC"
        text="Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
      />
      <Card
        bgImage="https://www.sammobile.com/wp-content/uploads/2023/09/Fortnite.jpg"
        text="Explore large, destructible environments where no two games are ever the same."
      />
    </div>
  );
}
