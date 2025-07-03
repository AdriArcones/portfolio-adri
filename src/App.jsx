import { Hero } from "./features/Hero/Hero";
import { Timeline } from "./features/Timeline/Timeline";
import { Projects } from "./features/Projects/Projects";
import { Skills } from "./features/Skills/Skills";
import { Testimonials } from "./features/Reviews/Testimonials";
import { Contact } from "./features/Contact/Contact";
import { Layout } from "./features/Layout/Layout";
import BackgroundBlobs from "./shared/components/custom-blobs/BackgroundBlobs";

function App() {
  return (
    <Layout>
       {/* <BackgroundBlobs
          blobs={[
            {
              color: "pink",
              size: "small",
              position: "top-left",
            },
            {
              color: "blue",
              size: "large",
              position: "center",
              center: true,
            },
            {
              color: "orange",
              size: "medium",
              position: "bottom-right",
            },
          ]}
        /> */}
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
