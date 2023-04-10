import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeebackStats from "./components/FeebackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path={"/"} element={
              <>
                <FeedbackForm />
                <FeebackStats />
                <FeedbackList />
              </>
            }>

            </Route>
            <Route path={"/about"} element={<AboutPage />}></Route>
          </Routes>
          <AboutIconLink />
        </div>

      </Router>
    </FeedbackProvider>

  );
}

export default App;
