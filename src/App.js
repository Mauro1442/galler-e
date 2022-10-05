import "./App.css";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import AuthProvider from "./Context/AuthProvider";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <AuthProvider>
        <Router>
          <Menu setSearch={setSearch} />
          <Container>
            <Public search={search} />
          </Container>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
