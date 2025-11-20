//import Styles
import "./Card.css";
export default function CharacterCard({ character }) {
  return (
    <>
      <div className="card">
        <h3>{character.name}</h3>
        <h4> Played By {character.played_by} </h4>
        <p> {character.description} </p>
      </div>
    </>
  );
}
