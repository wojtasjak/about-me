import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import FeaturedProjects from '../sections/FeaturedProjects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
