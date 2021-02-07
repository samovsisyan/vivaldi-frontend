import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Wrapper(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="wrapper">
      <header className="header_area">
        <div className="top_header_area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-end">

              <div className="col-12 col-lg-7">
                <div className="top_single_area d-flex align-items-center">
                  <div className="top_logo">
                    <Link to="#"><img src="images/core-images/logo.png" alt=""/></Link>
                  </div>
                  <div className="header-cart-menu d-flex align-items-center ml-auto">
                    <div className="cart">
                      <Link to="#" id="header-cart-btn" target="_blank"><span className="cart_quantity">2</span> <i
                        className="fa fa-shopping-bag" aria-hidden="true"></i>
                        Ձեր զամբյուղը 1000դրամ</Link>
                      <ul className="cart-list">
                        <li>
                          <Link to="#" className="image">
                            <img
                              src="images/product-images/product-10.jpg"
                              className="cart-thumb"
                              alt=""
                            />
                          </Link>
                          <div className="cart-item-desc">
                            <h6><Link to="#">Women's Fashion</Link></h6>
                            <p>1x - <span className="price">$10</span></p>
                          </div>
                          <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                        </li>
                        <li>
                          <Link to="#" className="image"><img src="images/product-images/product-11.jpg"
                                                              className="cart-thumb"
                                                              alt=""/></Link>
                          <div className="cart-item-desc">
                            <h6><Link to="#">Women's Fashion</Link></h6>
                            <p>1x - <span className="price">$10</span></p>
                          </div>
                          <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                        </li>
                        <li className="total">
                          <span className="pull-right">Total: $20.00</span>
                          <Link to="cart.html" className="btn btn-sm btn-cart">Cart</Link>
                          <Link to="checkout-1.html" className="btn btn-sm btn-checkout">Checkout</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="main_header_area">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 d-md-flex justify-content-between">
                <div className="header-social-area">
                  <Link to="#"><span className="karl-level">Կիսվել</span> <i className="fa fa-pinterest"
                                                                             aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                </div>
                <div className="main-menu-area">
                  <nav className="navbar navbar-expand-lg align-items-start">

                    <button
                      className="navbar-toggler"
                      onClick={() => setMenuOpen(!menuOpen)}
                      type="button"
                    >
                      <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"></i>
                      </span>
                    </button>
                   {/*Bug ka, kompi u mobilei chpaperi pahov*/}
                    {menuOpen ?
                      <div className=" navbar-collapse align-items-start " id="karl-navbar">
                        <ul className="navbar-nav animated" id="nav">
                          <li className="nav-item active"><Link className="nav-link" to="/">Գլխավոր</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/shop">Տեսականի</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="#">Կապ</Link></li>
                        </ul>
                      </div>
                      : null
                    }

                  </nav>
                </div>
                <div className="help-line">
                  <Link to="tel:+37443337776">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    Հեռ։ 043337776
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  )
}

export default Wrapper;