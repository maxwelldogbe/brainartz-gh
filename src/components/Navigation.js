import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container fluid>
        <Navbar.Brand href="/" style={{fontWeight:'1000', fontSize:'40px', color:'blue'}}>BrainArtz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:'white'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="/:id">Graphic design</Nav.Link> */}
            {/* <Nav.Link href="/branding">Branding</Nav.Link>
            <Nav.Link href="/textiles">Textile</Nav.Link>
            <Nav.Link href="/photography">Photography</Nav.Link>
            <Nav.Link href="/web-design">Web Design</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;