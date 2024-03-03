import Header from "../commonComponents/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="Content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
