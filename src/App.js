import logo from './logo.svg';
import logouni from './img/logo-no-background.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, Nav} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" className="align-items-center justify-content-end">
        <Container>
          <Navbar.Brand href="#home" sticky="top" className="align-items-center justify-content-end">
            <img
              alt=""
              src={logouni}
              width="90"
              className="d-inline-block align-top"
            />{' '}
            <Navbar.Text className="align-items-center justify-content-end">React Bootstrap</Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
