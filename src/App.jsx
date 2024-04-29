import TheMain from "./components/TheMain";
import TheAbout from "./components/TheAbout";
import Services from "./components/Services";
import TheFooter from './components/TheFooter';
import OurExperts from "./components/OurExperts";
import OurProjects from "./components/OurProjects";

function App() {
  return (
    <>
      <TheMain />
      <OurExperts />
      <TheAbout />
      <Services />
      <OurProjects />
      <TheFooter />
    </>
  );
}

export default App;
