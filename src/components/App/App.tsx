import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
