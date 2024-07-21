import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import BubbleSort from "./Pages/BubbleSort";
import QuickSort from "./Pages/QuickSort";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/sorting/bubble" element={<BubbleSort />} />
      <Route path="/sorting/quick" element={<QuickSort />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
