import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Main } from "./pages/Main/Main";
import { ThemeProvider } from "./providers/theme.";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path={"/"} element={<Main />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
