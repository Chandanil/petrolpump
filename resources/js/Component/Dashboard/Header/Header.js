import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export const Header = (props) => {
    return (
        <div className="top-header">
            <Navbar bg="" className="cl-navigation">
                <Container>
                    {/* <Navbar.Brand ><Link to ="/">Megabyte Tech</Link></Navbar.Brand> */}
                    <div
                        className={`hamburger ${props.showSidebar ? "" : "show"}`}
                        onClick={props.sidebarToggle}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="" className="nav-link">
                                Sales
                            </Link>
                            <Link to="" className="nav-link">
                                Customer Recieve
                            </Link>
                            <Link to="" className="nav-link">
                                Supplier Payment
                            </Link>
                            <Link to="" className="nav-link">
                                Purchase
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="nav-right">
                        <ul>
                            <li>
                                <Link to="" className="item pos">
                                {/* <i className="fa fa-hdd-o icon"></i> */}
                                    <img src="img/pos-terminal.png" /> <span>POS</span>
                                </Link>
                            </li>
                            <li>
                                <Link to ="" className="item">
                                    <i className="fa fa-arrows-alt icon"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to ="" className="item">
                                    <i className="fa fa-language icon"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};
