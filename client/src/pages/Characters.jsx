import Card from "../components/CharacterCard.jsx";
export default function Characters({ characters }) {
  return (
    <>
      <h2>Meet Bewitched Characters</h2>
      <div className="card">
        {characters.map((character, index) => (
          <Card character={character} key={"character_" + index} />
        ))}
      </div>
    </>
  );
}
