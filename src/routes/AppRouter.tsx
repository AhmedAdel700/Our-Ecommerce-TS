import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Importing Main Layout
import MainLayout from "@layouts/MainLayout/MainLayout";

// Importing Pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import About from "@pages/About";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:prefix" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
