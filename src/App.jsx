import Frame from "./components/layout/Frame/Frame";
import About from "./components/layout/About/About";
import FirstScreen from "./components/layout/FirstScreen/FirstScreen";
import Footer from "./components/layout/Footer/Footer";
import FormBox from "./components/layout/FormBox/FormBox";
import Free from "./components/layout/Free/Free";
import Header from "./components/layout/Header/Header";
import Study from "./components/layout/Study/Study";
import Why from "./components/layout/Why/Why";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <Frame />
      <Why />
      <FormBox />
      <About />
      <Study />
      <Free />
      <Footer />
    </div>
  );
};

export default App;
