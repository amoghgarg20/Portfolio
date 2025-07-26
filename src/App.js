import React, { Suspense, lazy, useMemo } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import ErrorBoundary from "./components/ErrorBoundary";
import resumeDataImport from "./resumeData";

// Lazy load components that are below the fold
const Portfolio = lazy(() => import("./components/Portfolio"));
const Profile = lazy(() => import("./components/Profile"));
const Album = lazy(() => import("./components/Album"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  // Memoize resume data to prevent unnecessary re-computations
  const resumeData = useMemo(() => resumeDataImport, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
          <Portfolio resumeData={resumeData} />
          <Profile resumeData={resumeData} />
          <Album resumeData={resumeData} />
          <Testimonials resumeData={resumeData} />
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
