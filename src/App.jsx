import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BlogsPage from "./pages/BlogsPage";
import AffilatePage from "./pages/AffilatePage";
import AcademyPage from "./pages/AcademyPage";
import ClientAreaPage from "./pages/ClientAreaPage";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from "./pages/ContactUsPage";
import GeneralQuestion from "./components/FAQPage/GeneralQuestion/GeneralQuestion";
import QuestionDetail from "./components/FAQPage/GeneralQuestion/QuestionDetail";
import ChallengeStageRulesDeatils from "./components/FAQPage/ChallengeStageRules/ChallengeStageRulesDetails";
import ChallengeStageRules from "./components/FAQPage/ChallengeStageRules/ChallengeStageRules";
import OneStepRules from "./components/FAQPage/OneStepRules/OneStepRules";
import OneStepRulesDetails from "./components/FAQPage/OneStepRules/OneStepRulesDetails";
import TwoStepRulesStage1 from "./components/FAQPage/TwoStepRulesStage1/TwoStepRulesStage1";
import TwoStepRulesStage1Details from "./components/FAQPage/TwoStepRulesStage1/TwoStepRulesStage1Details";
import TwoStepRulesStage2 from "./components/FAQPage/TwoStepRulesStage2/TwoStepRulesStage2";
import TwoStepRulesStage2Details from "./components/FAQPage/TwoStepRulesStage2/TwoStepRulesStage2Details";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/affilate" element={<AffilatePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/clientarea" element={<ClientAreaPage />} />
        <Route path="/faq" element={<FAQPage />}>
          {/* Uncomment and add components when ready */}
          {/* <Route path="challenge-stage-rules" element={<ChallengeStageRules />} /> */}
          {/* <Route path="one-step-rules" element={<OneStepRules />} /> */}
        </Route>
        <Route path="faq/general-rules" element={<GeneralQuestion />} />
        <Route
          path="faq/general-rules/:routerLink"
          element={<QuestionDetail />}
        />
        <Route
          path="faq/challenge-stage-rules"
          element={<ChallengeStageRules />}
        />
        <Route
          path="faq/challenge-stage-rules/:routerLink"
          element={<ChallengeStageRulesDeatils />}
        />
        <Route path="faq/onestep-rules" element={<OneStepRules />} />
        <Route
          path="faq/onestep-rules/:routerLink"
          element={<OneStepRulesDetails />}
        />
        <Route
          path="faq/challenge-stage-rules/:routerLink"
          element={<TwoStepRulesStage1 />}
        />
        <Route
          path="faq/twostep-rules-stage-1"
          element={<TwoStepRulesStage1 />}
        />
        <Route
          path="faq/twostep-rules-stage-2/:routerLink"
          element={<TwoStepRulesStage1Details />}
        />
        <Route
          path="faq/twostep-rules-stage-2"
          element={<TwoStepRulesStage2 />}
        />
        <Route
          path="faq/twostep-rules-stage-1/:routerLink"
          element={<TwoStepRulesStage2Details />}
        />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
