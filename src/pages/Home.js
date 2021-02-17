import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Wrapper from "../components/Wrapper";
import {getProductsRequest} from "../store/actions/products";

function Home(props) {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    props.getProductsRequest()
  }, [])

  return (
    <Wrapper>
      {modalActive ?
        <div
          className="modal fade show modal-center"
          id="quickview"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered"
               role="document">
            <div className="modal-content">
              <button onClick={() => setModalActive(false)}
                      type="button"
                      className="close btn"
                      data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

              <div className="modal-body">
               <div className="quickview_body">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-5">
                        <div className="quickview_pro_img">
                          <img src="images/product-images/product-1.jpg"
                               alt="" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7">
                        <div className="quickview_pro_des">
                          <h4 className="title">Boutique Silk Dress</h4>
                          <div className="top_seller_product_rating mb-15">
                            <i className="fa fa-star"
                               aria-hidden="true"></i>
                            <i className="fa fa-star"
                               aria-hidden="true"></i>
                            <i className="fa fa-star"
                               aria-hidden="true"></i>
                            <i className="fa fa-star"
                               aria-hidden="true"></i>
                            <i className="fa fa-star"
                               aria-hidden="true"></i>
                          </div>
                          <h5 className="price">$120.99 <span>$130</span></h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam
                            aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in
                            fugiat?</p>
                          <a href="#">View Full Product Details</a>
                        </div>
                        <form className="cart"
                              method="post">
                          <div className="quantity">
                              <span className="qty-minus"><i
                                className="fa fa-minus"
                                aria-hidden="true"></i></span>

                            <input type="number"
                                   className="qty-text"
                                   id="qty"
                                   step="1"
                                   min="1"
                                   max="12"
                                   name="quantity"
                                   value="1" />

                            <span className="qty-plus"><i
                              className="fa fa-plus"
                              aria-hidden="true"></i></span>
                          </div>
                          <button type="submit"
                                  name="addtocart"
                                  value="5"
                                  className="cart-submit">Add to cart
                          </button>
                          <div className="modal_pro_wishlist">
                            <a href="wishlist.html"
                               target="_blank"><i className="ti-heart"></i></a>
                          </div>
                          <div className="modal_pro_compare">
                            <a href="compare.html"
                               target="_blank"><i className="ti-stats-up"></i></a>
                          </div>
                        </form>

                        <div className="share_wf mt-30">
                          <p>Share With Friend</p>
                          <div className="_icon">
                            <a href="#"><i className="fa fa-facebook"
                                           aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter"
                                           aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-pinterest"
                                           aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-google-plus"
                                           aria-hidden="true"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      <section className="top-discount-area d-md-flex align-items-center">
        <div className="single-discount-area">
          <h5>Free Shipping &amp; Returns</h5>
          <h6><Link to="#">BUY NOW</Link></h6>
        </div>
        <div className="single-discount-area">
          <h5>20% Discount for all dresses</h5>
          <h6>USE CODE: Colorlib</h6>
        </div>
        <div className="single-discount-area">
          <h5>20% Discount for students</h5>
          <h6>USE CODE: Colorlib</h6>
        </div>
      </section>
      <section className="welcome_area">
        <div className="welcome_slides owl-carousel">
          <div className="single_slide height-800 bg-img background-overlay"
               style={{"backgroundImage": "url(images/bg-images/glavni-1.png)"}}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome_slide_text">
                    <h6 data-animation="bounceInDown"
                        data-delay="0"
                        data-duration="500ms">* Only today we offer free
                      shipping</h6>
                    <h2 data-animation="fadeInUp"
                        data-delay="500ms"
                        data-duration="500ms">Fashion Trends</h2>
                    <Link to="#"
                          className="btn karl-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          data-duration="500ms">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single_slide height-800 bg-img background-overlay"
               style={{"backgroundImage": "url(images/bg-images/glavni-2.png)"}}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome_slide_text">
                    <h6 data-animation="fadeInDown"
                        data-delay="0"
                        data-duration="500ms">* Only today we offer free
                      shipping</h6>
                    <h2 data-animation="fadeInUp"
                        data-delay="500ms"
                        data-duration="500ms">Summer Collection</h2>
                    <Link to="#"
                          className="btn karl-btn"
                          data-animation="fadeInLeftBig"
                          data-delay="1s"
                          data-duration="500ms">Check Collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single_slide height-800 bg-img background-overlay"
               style={{"backgroundImage": "url(images/bg-images/glavni-1.png)"}}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome_slide_text">
                    <h6 data-animation="fadeInDown"
                        data-delay="0"
                        data-duration="500ms">* Only today we offer free
                      shipping</h6>
                    <h2 data-animation="bounceInDown"
                        data-delay="500ms"
                        data-duration="500ms">Women Fashion</h2>
                    <Link to="#"
                          className="btn karl-btn"
                          data-animation="fadeInRightBig"
                          data-delay="1s"
                          data-duration="500ms">Check Collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top_catagory_area d-md-flex clearfix">
        <div className="single_catagory_area d-flex align-items-center bg-img"
             style={{"backgroundImage": "url(images/bg-images/glavni-1.png)"}}>
          <div className="catagory-content">
            <h6>On Accesories</h6>
            <h2>Sale 30%</h2>
            <Link to="#"
                  className="btn karl-btn">SHOP NOW</Link>
          </div>
        </div>
        <div className="single_catagory_area d-flex align-items-center bg-img"
             style={{"backgroundImage": "url(images/bg-images/glavni-2.png)"}}>
          <div className="catagory-content">
            <h6>in Bags excepting the new collection</h6>
            <h2>Designer bags</h2>
            <Link to="#"
                  className="btn karl-btn">SHOP NOW</Link>
          </div>
        </div>
      </section>
      <div className="modal fade"
           id="quickview"
           tabIndex="-1"
           role="dialog"
           aria-labelledby="quickview"
           aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered"
             role="document">
          <div className="modal-content">
            <button type="button"
                    className="close btn"
                    data-dismiss="modal"
                    aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>


          </div>
        </div>
      </div>
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="karl-projects-menu mb-100">
          <div className="text-center portfolio-menu">
            <button className="btn active"
                    data-filter="*">ALL</button>
            <button className="btn"
                    data-filter=".women">WOMAN</button>
            <button className="btn"
                    data-filter=".man">MAN</button>
            <button className="btn"
                    data-filter=".access">ACCESSORIES</button>
            <button className="btn"
                    data-filter=".shoes">shoes</button>
            <button className="btn"
                    data-filter=".kids">KIDS</button>
          </div>
        </div>

        <div className="container">
          <div className="row karl-new-arrivals">
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig"
                 data-wow-delay="0.3s">
              <div className="product-img">
                <img src="images/product-images/product-2.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig"
                 data-wow-delay="0.3s">
              <div className="product-img">
                <img src="images/product-images/product-2.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig"
                 data-wow-delay="0.4s">
              <div className="product-img">
                <img src="images/product-images/product-3.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig"
                 data-wow-delay="0.5s">
              <div className="product-img">
                <img src="images/product-images/product-4.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig"
                 data-wow-delay="0.6s">
              <div className="product-img">
                <img src="images/product-images/product-5.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig"
                 data-wow-delay="0.7s">
              <div className="product-img">
                <img src="images/product-images/product-6.jpg"
                     alt="" />
                <div onClick={() => setModalActive(true)}
                     className="product-quicview">
                  <div data-toggle="modal"
                       data-target="#quickview">
                    <i className="fa fa-plus"
                       aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">$39.90</h4>
                <p>Jeans midi cocktail dress</p>
                <Link to="#"
                      className="add-to-cart-btn">ADD TO CART</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single_footer_area">
                <div className="footer-logo">
                  <img src="images/core-images/logo.png"
                       alt="" />
                </div>
                <div className="copywrite_text d-flex align-items-center">
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | Made with <i className="fa fa-heart-o"
                                                       aria-hidden="true"></i> by <Link
                    to="https://colorlib.com"
                    target="_blank">Colorlib</Link> &amp; distributed by <Link
                    to="https://themewagon.com"
                    target="_blank">ThemeWagon</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <div className="single_footer_area">
                <ul className="footer_widget_menu">
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Faq</Link></li>
                  <li><Link to="#">Returns</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <div className="single_footer_area">
                <ul className="footer_widget_menu">
                  <li><Link to="#">My Account</Link></li>
                  <li><Link to="#">Shipping</Link></li>
                  <li><Link to="#">Our Policies</Link></li>
                  <li><Link to="#">Afiliates</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="single_footer_area">
                <div className="footer_heading mb-30">
                  <h6>Subscribe to our newsletter</h6>
                </div>
                <div className="subscribtion_form">
                  <form action="#"
                        method="post">
                    <input type="email"
                           name="mail"
                           className="mail"
                           placeholder="Your email here" />
                    <button type="submit"
                            className="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>

          <div className="footer_bottom_area">
            <div className="row">
              <div className="col-12">
                <div className="footer_social_area text-center">
                  <Link to="#"><i className="fa fa-pinterest"
                                  aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-facebook"
                                  aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"
                                  aria-hidden="true"></i></Link>
                  <Link to="#"><i className="fa fa-linkedin"
                                  aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>

  );
}


const mapStateToProps = (state) => ({
  products: state.products.products
});

const mapDispatchToProps = {
  getProductsRequest,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;