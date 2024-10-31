import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
