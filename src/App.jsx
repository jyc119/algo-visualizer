import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import BubbleSort from "./Pages/BubbleSort";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/sorting/bubble" element={<BubbleSort />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// Create another componenet to pop out a bit and displau
// general information about algorithm, then have another button to go to
// page
