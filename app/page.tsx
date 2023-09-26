import Card from "./components/Card";
import Cards from "./components/Cards";
import Companies from "./components/Companies";
import Featured from "./components/Featured";
import Grid from "./components/Grid";
import Posts from "./components/Posts";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Card />
      <Companies />
      <Cards />
      <Grid />
      <Featured />
      <Services />
      <Posts />
    </main>
  );
}
