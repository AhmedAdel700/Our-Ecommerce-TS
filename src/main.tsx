import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";

// Import Redux
import { Provider } from "react-redux";
import { store } from "@store/Store";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
