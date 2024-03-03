import { useState, Fragment } from "react";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routers/index";
import { DefaultLayout } from "~/components/Layout/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                    <Page></Page>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
