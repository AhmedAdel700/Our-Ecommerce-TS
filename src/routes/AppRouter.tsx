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
import Error from "@pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="about" element={<About />} />
      <Route
        path="categories/product/:prefix"
        element={<Products />}
        loader={({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
            // !/^[a-z]+$/i.test(params.prefix as string) // I Can Do That Instead Of (typeof) But I Must Be Sure That Is Coming As A String.
          ) {
            // VIP Note => Params ALWAYS Has Type Of Undefined Or String.
            // Test If This Is Not A String From A-Z.
            throw new Response("Bad Request", {
              statusText: "Category Not Found",
              status: 400,
            });
          }
          return true;
        }}
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
