import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "./const/index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path={ROUTES.home} />
          <Route element={<NotFound />} path={ROUTES.notfound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
