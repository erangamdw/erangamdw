import "./App.scss";
import WOW from "wowjs";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import {
  appliedConfig,
  introBackgroundConfig,
  themeConfig,
} from "./config/commonConfig";
import { Tooltip } from "./components/Tooltip";
import CallToAction from "./components/CallToAction";
import FAQs from "./components/FAQs";
import FullScreenVideoBgIntro from "./components/themes/fullScreen/IntroVideoBg";
import FullScreenHeader from "./components/themes/fullScreen/Header";
import FullScreenDefaultIntro from "./components/themes/fullScreen/IntroDefault";
import FullScreenImgBgIntro from "./components/themes/fullScreen/IntroImageBg";
import BottomHeader from "./components/themes/bottomHeader/Header";
import StandardMenuHeader from "./components/themes/StandardMenu/Header";
import BottomHeaderDefaultIntro from "./components/themes/bottomHeader/IntroDefault";
import BottomHeaderImgBgIntro from "./components/themes/bottomHeader/IntroImageBg";
import BottomHeaderVideoBgIntro from "./components/themes/bottomHeader/IntroVideoBg";
import StandardMenuDefaultIntro from "./components/themes/StandardMenu/IntroDefault";
import StandardMenuImgBgIntro from "./components/themes/StandardMenu/IntroImageBg";
import StandardMenuVideoBgIntro from "./components/themes/StandardMenu/IntroVideoBg";

function App() {
  const appliedTheme = appliedConfig.appliedTheme;
  const appliedIntro = appliedConfig.appliedIntro;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  const getHeader = () => {
    if (appliedTheme === themeConfig.BottomHeader) {
      return <BottomHeader></BottomHeader>;
    } else if (appliedTheme === themeConfig.FullScreenMenu) {
      return (
        <FullScreenHeader
          textWhite={appliedIntro === introBackgroundConfig.image}
        ></FullScreenHeader>
      );
    } else {
      return <StandardMenuHeader></StandardMenuHeader>;
    }
  };

  const getBottomHeaderIntro = () => {
    if (appliedIntro === introBackgroundConfig.default) {
      return <BottomHeaderDefaultIntro></BottomHeaderDefaultIntro>;
    } else if (appliedIntro === introBackgroundConfig.image) {
      return <BottomHeaderImgBgIntro></BottomHeaderImgBgIntro>;
    } else {
      return <BottomHeaderVideoBgIntro></BottomHeaderVideoBgIntro>;
    }
  };

  const getFullScreenIntro = () => {
    if (appliedIntro === introBackgroundConfig.default) {
      return <FullScreenDefaultIntro></FullScreenDefaultIntro>;
    } else if (appliedIntro === introBackgroundConfig.image) {
      return <FullScreenImgBgIntro></FullScreenImgBgIntro>;
    } else {
      return <FullScreenVideoBgIntro></FullScreenVideoBgIntro>;
    }
  };

  const getStandardMenuIntro = () => {
    if (appliedIntro === introBackgroundConfig.default) {
      return <StandardMenuDefaultIntro></StandardMenuDefaultIntro>;
    } else if (appliedIntro === introBackgroundConfig.image) {
      return <StandardMenuImgBgIntro></StandardMenuImgBgIntro>;
    } else {
      return <StandardMenuVideoBgIntro></StandardMenuVideoBgIntro>;
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div id="main-wrapper">
          {appliedTheme === themeConfig.BottomHeader && getBottomHeaderIntro()}
          {getHeader()}

          <div id="content" role="main">
            {appliedTheme === themeConfig.FullScreenMenu &&
              getFullScreenIntro()}
            {appliedTheme === themeConfig.StandardMenu &&
              getStandardMenuIntro()}

            <AboutUs></AboutUs>
            <Services></Services>
            <Resume></Resume>
            <Portfolio></Portfolio>
            <CallToAction></CallToAction>
            <FAQs></FAQs>
            <Testimonials></Testimonials>
            <Contact></Contact>
          </div>
          <Footer handleNavClick={handleNavClick}></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fas fa-arrow-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
