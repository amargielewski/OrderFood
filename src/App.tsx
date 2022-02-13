import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Details } from "./pages/Details/Details";
import { Main } from "./pages/Main/Main";
import { ThemeProvider } from "./providers/theme.";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/restaurants/:id"} element={<Details />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
