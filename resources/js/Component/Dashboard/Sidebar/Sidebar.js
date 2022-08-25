import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export const Sidebar = (props) => {
  return (
    <> 
      <div className="cl-sidebar">
        <div class="user-info">
            <figure>
            <img src="img/team.jpg" alt="testo" />
            </figure>
            <div class="user-name">
                <h6 class="title">Chandani Lama</h6>
                <small>Admin</small>
            </div>
        </div>
        <Accordion className="cl-sidemenu">
          <Link className="menu-item" to="/home">
            <i className="fa fa-windows icon"></i>
            <span>Dashboard</span>
          </Link>

          <Accordion.Item eventKey="0">
            <Accordion.Header className="menu-item">
              <i className="fa fa-area-chart icon"></i>
              <span>Sale</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="/productsale">
                Product Sale
              </Link>
              <Link className="item" to="/newsale">
               New Sale
              </Link>
              <Link className="item" to="/managesale">
               Manage Sale
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="menu-item">
              <i className="fa fa-user icon"></i>
              <span>Customer</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Customer 1
              </Link>
              <Link className="item" to="">
              Customer 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-industry"></i>
              <span>Supplier</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Supplier 1
              </Link>
              <Link className="item" to="">
              Supplier 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-product-hunt"></i>
              <span>Product</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Product 1
              </Link>
              <Link className="item" to="">
              Product 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-shopping-cart"></i>
              <span>Purchase</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Purchase 1
              </Link>
              <Link className="item" to="">
              Purchase 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-houzz"></i> 
              <span>Stcok</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Stcok 1
              </Link>
              <Link className="item" to="">
              Stcok 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-users"></i>
              <span>Accounts</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Accounts 1
              </Link>
              <Link className="item" to="">
              Accounts 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="menu-item">
            <i class="icon fa fa-gear"></i>
              <span>Settings</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="">
              Settings 1
              </Link>
              <Link className="item" to="">
              Settings 2
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
