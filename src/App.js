import MainContent from "./Component/MainContent/MainContent";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex ">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
