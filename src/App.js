import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importación de bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import moz1 from "./assets/img/moz1.jpg";
import moz2 from "./assets/img/moz2.jpg";
import moz3 from "./assets/img/moz3.jpg";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header title="Galería de Imágenes con React"></Header>
      <hr />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <Card
            image={moz1}
            product="mozart"
            description="partes solista oboe"
          />{" "}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <Card
            image={moz2}
            product="saliery"
            description="partes solista flauta"
          />{" "}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <Card
            image={moz3}
            product="beethoven"
            description="partes solista fagot"
          />{" "}
        </Col>
      </Row>{" "}
      <hr />
      <Footer footerText="Todos los derechos reservados" footerDate="2022" />
    </Container>
  );
}

export default App;
