import SocialMedia from "./components/socialMedia";
import Header from "./components/header";
import Menu from "./components/menu";
import Aside from "./components/aside";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <SocialMedia />
      <Header />
      <Menu />
      <div className="container mt-5">
        <div className="row">
          <Content />
          <Aside />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
