import Card from "../components/Card.jsx";
export default function Characters({ characters }) {
  return (
    <>
      <h2>Meet Bewitched Characters</h2>
      <div>
        {characters.map((character, index) => (
          <Card character={character} key={"character_" + index} />
        ))}
      </div>
    </>
  );
}
