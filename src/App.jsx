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
import MergeSortVisualizer from "./components/MergeSortVisualizer";
import TreePage from "./Pages/TreePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/sorting/bubble" element={<BubbleSort />} />
      <Route path="/sorting/quick" element={<QuickSort />} />
      <Route path="/sorting/merge" element={<MergeSortVisualizer />} />
      <Route path="/Pages/TreePage" element={<TreePage />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MergeSortVisualizer />,
//   },
// ]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// only runs visualization when i save mergesort...
