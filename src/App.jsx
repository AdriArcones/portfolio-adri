import { Routes, Route } from "react-router-dom";
import { Hero } from "./features/Hero/Hero";
import { Timeline } from "./features/Timeline/Timeline";
import { Projects } from "./features/Projects/Projects";
import { Skills } from "./features/Skills/Skills";
import { Testimonials } from "./features/Testimonials/Testimonials";
import { Contact } from "./features/Contact/Contact";
import { Layout } from "./features/Layout/Layout";
import BackgroundBlobs from "./shared/components/custom-blobs/BackgroundBlobs";
import { PrivacyPolicy } from "./features/Policy/PrivacyPolicy";

function Home() {
  return (
    <>
      <BackgroundBlobs
        blobs={[
          { color: "green", size: "small", position: "top-left" },
          { color: "blue", size: "medium", position: "center", center: true },
          { color: "orange", size: "medium", position: "bottom-right" },
        ]}
      />
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
}

export default App;
