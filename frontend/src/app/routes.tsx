import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { HomePage } from "./pages/HomePage";
import { InputDashboard } from "./pages/dashboard/InputDashboard";
import { SimulationScreen } from "./pages/dashboard/SimulationScreen";
import { ResultsDashboard } from "./pages/dashboard/ResultsDashboard";
import { LayerVisualization } from "./pages/dashboard/LayerVisualization";
import { ComparisonScreen } from "./pages/dashboard/ComparisonScreen";
import { ReportPreview } from "./pages/dashboard/ReportPreview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "dashboard", Component: InputDashboard },
      { path: "simulation", Component: SimulationScreen },
      { path: "results", Component: ResultsDashboard },
      { path: "visualization", Component: LayerVisualization },
      { path: "comparison", Component: ComparisonScreen },
      { path: "report", Component: ReportPreview },
    ],
  },
]);
