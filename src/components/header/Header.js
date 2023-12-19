import "./header.scss";
import { MdClose } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <button className="close-btn">
        <MdClose />
      </button>
      <h1>
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </h1>
      <img
        src="https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/276306067_5356696054407675_2981817972459318659_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=znWEj3m2BB0AX-t0h70&_nc_ht=scontent.fcok4-1.fna&oh=00_AfDJKQaHNNkQuLpSq4jj4ZX2M81eppaCtzlocJkLLz0R3g&oe=65868480"
        alt=""
      />
      <p>
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <div className="btn-container">
        <button>Visit Website</button>
      </div>
    </header>
  );
}
