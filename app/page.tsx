import Unit from "./components/Unit";
import UnitCatalog from "./components/UnitCatalog";

export default function Home() {
  // testing optional tags
  const demoUnit = {
    name: "Hello World",
    points: 42,
    description: "Lorem Ipsum"
  }

  return (
    <div>
      <p>We will need units, a catalog of available units, and a list that contains selected units</p>
      {/* <Unit name={demoUnit.name} points={demoUnit.points} description={demoUnit.description}></Unit> */}
      <UnitCatalog></UnitCatalog>
    </div>
  );
}
