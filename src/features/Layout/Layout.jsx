import { Navbar } from "./Navbar";  
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
