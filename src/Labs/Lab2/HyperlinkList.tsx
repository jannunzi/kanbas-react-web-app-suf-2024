export default function HyperlinkList() {
  return (
    <div className="list-group">
      <a
        className="list-group-item"
        href="https://en.wikipedia.org/wiki/Dune_(novel)"
      >
        Dune
      </a>
      <a
        className="list-group-item active"
        href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
      >
        Lord of the Rings
      </a>
      <a
        className="list-group-item"
        href="https://en.wikipedia.org/wiki/The_Forever_War"
      >
        The Forever War
      </a>
      <a
        className="list-group-item"
        href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
      >
        2001 A Space Odyssey
      </a>
      <a
        className="list-group-item"
        href="https://en.wikipedia.org/wiki/Ender%27s_Game"
      >
        Ender's Game
      </a>
    </div>
  );
}
