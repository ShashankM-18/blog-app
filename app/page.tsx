import Card from "./components/Card";
import Cards from "./components/Cards";
import Companies from "./components/Companies";
import Copyright from "./components/Copyright";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import FooterInfo from "./components/FooterInfo";
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
      <Footer />
      <FooterInfo />
      <Copyright />
    </main>
  );
}
