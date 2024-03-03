import Header from "../commonComponents/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="Content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
