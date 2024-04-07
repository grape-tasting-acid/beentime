import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame4 from "./pages/Frame4";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-2-1":
        title = "";
        metaDescription = "";
        break;
      case "/-1":
        title = "";
        metaDescription = "";
        break;
      case "/-0":
        title = "";
        metaDescription = "";
        break;
      case "/-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame4 />} />
      <Route path="/-2-1" element={<Frame />} />
      <Route path="/-1" element={<Frame1 />} />
      <Route path="/-0" element={<Frame2 />} />
      <Route path="/-2" element={<Frame3 />} />
    </Routes>
  );
}
export default App;
