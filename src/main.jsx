import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={appStore}>
      <Toaster position="top center" reverseOrder={true} />
      <App />
    </Provider>
  </>
);
