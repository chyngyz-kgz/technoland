import AdminAuthContextProvider from "./contexts/AdminAuthContext";
import Routes from "./Routes";

function App() {



  return (
    <div className="App">
      <AdminAuthContextProvider>
        <Routes />
      </AdminAuthContextProvider>
    </div>
  );
}

export default App;
