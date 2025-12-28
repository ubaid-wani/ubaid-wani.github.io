import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo_bold.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [expand, updateExpanded] = React.useState(false);
  const [navColour, updateNavbar] = React.useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="home"
                smooth={true}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="project"
                smooth={true}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const NavBar = () => {
//   const [expand, updateExpanded] = React.useState(false);
//   const [navColour, updateNavbar] = React.useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="home" style={{ cursor: "pointer" }} onClick={() => updateExpanded(false)}>
//                 Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="about"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => updateExpanded(false)}
//               >
//                 About
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="skills"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => updateExpanded(false)}
//               >
//                 Skills
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="project"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => updateExpanded(false)}
//               >
//                 Work
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="contact"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => updateExpanded(false)}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default NavBar;
