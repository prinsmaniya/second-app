import './App.css';
import './media.css';
import { Container, Row, Col, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './image/logo.png';
import img2 from './image/s1.jpg';
import img3 from './image/s2.jpg';
import img4 from './image/s3.jpg';
import img5 from './image/s4.jpg';
import img6 from './image/welcome.jpeg';
import img15 from './image/n1.jpeg';
import img16 from './image/n2.jpeg';
import img17 from './image/n3.jpeg';

import { IoSearch } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { BsFillHousesFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGooglePlusG, FaAngleRight, FaHotel, FaDesktop, FaHouseUser, FaTruckMoving, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <>
      {/* top-menu start */}
      <nav className='top-menu'>
        <Container>
          <Row className='justify-content-start'>
            <Col className='py-3 d-none d-lg-block'><div className='d-flex'><h5 className='me-2'><IoIosCall></IoIosCall></h5><p className='m-0'>Need help? Call Us Now : 1234 567 8910</p></div></Col>
            <Col className='text-center text-lg-end py-3'>
              <FaFacebookF className='top22 me-3'></FaFacebookF>
              <FaLinkedinIn className='top22 mx-3'></FaLinkedinIn>
              <FaTwitter className='top22 mx-3'></FaTwitter>
              <FaGooglePlusG className='top22 top2 ms-3'></FaGooglePlusG>
            </Col>
          </Row>
        </Container>
      </nav>
      {/* top-menu end */}

      <hr className='m-0'></hr>

      {/* header start */}
      <div className='header'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#logo"><img src={img1}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavDropdown title="Home" id="basic-nav-home" >
                  <NavDropdown.Item href="#home/1.1">Home Page 01</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#home/1.2">Home Page 02</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#home/1.3">Home Page 03</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#home/1.4">Home Page 04</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#home/1.5">Home Page 05(New)</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About us" id="basic-nav-about us">
                  <NavDropdown.Item href="#about us/2.1">Company Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#about us/2.2">Our Team</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#about us/2.3">Testimonials</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Services" id="basic-nav-our services">
                  <NavDropdown.Item href="#our services/3.1">Services Style1 Dark</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#our services/3.2">Services Style2 Light</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#our services/3.3">Services Details 1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#our services/3.4">Services Details 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Projects" id="basic-nav-projects">
                  <NavDropdown.Item href="#projects/4.1">Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#projects/4.2">Project Full Screen</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#projects/4.3">Project Masonry</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="basic-nav-blog">
                  <NavDropdown.Item href="#blog/5.1">Blog</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#blog/5.2">Blog Style 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#blog/5.3">Blog Details</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-pages">
                  <NavDropdown.Item href="#pages/6.1">Testimonials</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#pages/6.2">Blog Style 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#pages/6.3">Blog Details</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Shop" id="basic-nav-shop">
                  <NavDropdown.Item href="#shop/7.1">Main Shop Page</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#shop/7.2">Product Detail Page</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#shop/7.3">Cart Page</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#shop/7.4">Checkout</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Navbar.Brand href="#search" className='ps-5 d-none d-lg-block'><IoSearch className='search'></IoSearch></Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* header end */}

      {/* slider start */}
      <OwlCarousel className='owl-theme slider1' nav={true} loop items={1} dots={false} autoplay={true} autoplayTimeout={3000}>
        <div class='item'>
          <img src={img2} ></img>
          <Container>
            <div class="content">
              <h2>We Preferred Safety,<br></br> Quality, Professionalism</h2>
              <div class="text">We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.</div>
              <button type="button" class="btn btn-primary">Know more</button>
            </div>
          </Container>
        </div>

        <div class='item'>
          <img src={img3}></img>
          <Container>
            <div class="content">
              <h2>From here You're  <br></br> Almost There.</h2>
              <div class="text">We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.</div>
              <button type="button" class="btn btn-primary">Know more</button>
            </div>
          </Container>
        </div>
        <div class='item'>
          <img src={img4}></img>
          <Container>
            <div class="content">
              <h2>Let Us Move You With  <br></br> Honesty And Greatness.</h2>
              <div class="text">We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.</div>
              <button type="button" class="btn btn-primary">Know more</button>
            </div>
          </Container>
        </div>
        <div class='item'>
          <img src={img5}></img>
          <Container>
            <div class="content">
              <h2>Moving every customer <br></br> with care.</h2>
              <div class="text">We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.</div>
              <button type="button" class="btn btn-primary">Know more</button>
            </div>
          </Container>
        </div>
      </OwlCarousel>
      {/* slider end */}

      {/* Logistics and Transposition start */}
      <section className='welcome'>
        <Container>
          <div className='title'>
            <h2>We provide the best suggestions for <span className='color'> Logistics and Transposition</span> in town<br></br> Go beyond logistics, make the world go round and revolutionize business.</h2>
          </div>
          <div className='row clearfix welcome1'>
            <div className='content-column col-lg-6 col-md-12 col-sm-12'>
              <div className='inner-column'>
                <h2>Welcome to the MyLogistics And Transportation</h2>
                <h4><span className='color'>25+ Years of Experience in logistics services</span></h4>
                <div className='text'>Mylogistics is a Leading Provider of Quality Packers And Movers in world. With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.<br></br>We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.We offer a wide range of Moving And Packing, logistics, transportation Upholestery Services in all over the world.</div>
              </div>
            </div>
            <div className='video-column col-lg-6 col-md-12 col-sm-12'>
              <div className='inner-column'>
                <div className='video-box'>
                  <img src={img6} alt='logistics' className='w-100'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='row clearfix'>
            <div className='col-lg-4'>
              <ul className='list-style-three'>
                <li><FaAngleRight className='m-2'></FaAngleRight>4 years material warranty.</li>
                <li><FaAngleRight className='m-2'></FaAngleRight>1000+ projects has been com.</li>
                <li><FaAngleRight className='m-2'></FaAngleRight>499+ professinals are available.</li>
              </ul>
            </div>
            <div className='col-lg-4'>
              <ul className='list-style-three'>
                <li><FaAngleRight className='m-2'></FaAngleRight>15+ awards.</li>
                <li><FaAngleRight className='m-2'></FaAngleRight>Available on 10+ countries. </li>
                <li><FaAngleRight className='m-2'></FaAngleRight>Borderless logistics.</li>
              </ul>
            </div>
            <div className='col-lg-4'>
              <ul className='list-style-three'>
                <li><FaAngleRight className='m-2'></FaAngleRight>A world-class port.</li>
                <li><FaAngleRight className='m-2'></FaAngleRight>Endless possibilities.</li>
                <li><FaAngleRight className='m-2'></FaAngleRight>Happiness delivered.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {/* Logistics and Transposition end */}

      {/* Services Section Two start */}
      <section className='services-section-two'>
        <Container>
          <div className='sec-title'>
            <h2>Our Excellent <span className='color'>Services</span></h2>
            <div className='text'>We provides our clients excellent, trustworthy and safe logistics services, having all you need to insure your freight without  where the destination is in depending or how big is the shipment. </div>
          </div>

          <div className="row clearfix">
            <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box " >
                <div className="content d-flex">
                  <div className="icon-box">
                    <FaHotel className='icon'></FaHotel>
                  </div>
                  <div>
                    <h3><a href="services-dark.html"> Machinery</a></h3>
                    <div class="text">Lorem Ipsum is simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box ">
                <div class="content d-flex">
                  <div class="icon-box">
                    <FaDesktop className='icon'></FaDesktop>
                  </div>
                  <div>
                    <h3><a href="services-dark.html">Commercial</a></h3>
                    <div class="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box ">
                <div class="content d-flex">
                  <div class="icon-box">
                    <FaHouseUser className='icon'></FaHouseUser>
                  </div>
                  <div>
                    <h3><a href="services-dark.html">Residential</a></h3>
                    <div class="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>



            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box ">
                <div class="content d-flex">
                  <div class="icon-box">
                    <FaTruckMoving className='icon'></FaTruckMoving>
                  </div>
                  <div>
                    <h3><a href="services-dark.html">Transportation</a></h3>
                    <div class="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box ">
                <div class="content d-flex">
                  <div class="icon-box">
                    <BsFillHousesFill className='icon'></BsFillHousesFill>
                  </div>
                  <div>
                    <h3><a href="services-dark.html">Warehousing</a></h3>
                    <div class="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content d-flex">
                  <div class="icon-box">
                    <MdApartment></MdApartment>
                  </div>
                  <div>
                    <h3><a href="services-dark.html">Multimodal</a></h3>
                    <div class="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                    <a href="services-dark.html" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Services Section Two end */}

      {/* Testimonial Section start */}
      <section className='testimonial-section'>
        <Container>
          <div class="sec-title-two centered">
            <h2 >What our <span class="color">client say</span></h2>
            <div class="title-text">Just Look What Our Clients Say.</div>
          </div>
        </Container>
      </section>
      {/* Testimonial Section end */}

      {/* Blog Section start */}
      <section className='news-section'>
        <Container>
          <div class="sec-title">
            <h2>Media / <span class="color">News</span></h2>
          </div>

          <div class="row clearfix">

            <div class="news-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="image">
                  <a href="blog-detail.html"><img src={img15} alt="" className='w-100'></img></a>
                </div>
                <div class="lower-content">
                  <ul class="post-meta">
                    <li>By <span>Kane Starc</span></li>
                    <li>Logistics</li>
                  </ul>
                  <h3>How logistics service works.?</h3>
                  <div class="read-more">Read more <FaArrowRight ></FaArrowRight></div>
                </div>
              </div>
            </div>

            <div class="news-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="image">
                  <a href="blog-detail.html"><img src={img16} alt="" className='w-100'></img></a>
                </div>
                <div class="lower-content">
                  <ul class="post-meta">
                    <li>By <span>Steve Gates</span></li>
                    <li>Warehouse</li>
                  </ul>
                  <h3>How to do for warehouse.</h3>
                  <div class="read-more">Read more <FaArrowRight ></FaArrowRight></div>
                </div>
              </div>
            </div>

            <div class="news-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box ">
                <div class="image">
                  <a href="blog-detail.html"><img src={img17} alt="" className='w-100'></img></a>
                </div>
                <div class="lower-content">
                  <ul class="post-meta">
                    <li>By <span>Jason Root</span></li>
                    <li>Transportation</li>
                  </ul>
                  <h3>how transportation work ?</h3>
                  <div class="read-more">Read more <FaArrowRight ></FaArrowRight></div>
                </div>
              </div>
            </div>

          </div>

        </Container>
      </section>
      {/* Blog Section end */}

      {/* Call To Action Section  start */}
      <section className='call-to-action-section' >
        <Container>
          <div class="row clearfix">
            <div class="col-lg-8">
              <h2>Let us move you with honesty and greatness.</h2>
            </div>
            <div class="col-lg-4">
              <div class="theme-btn btn-style-two"><span class="txt">contact us</span></div>
            </div>
          </div>
        </Container>
      </section>
      {/* Call To Action Section  end */}


      {/* footer start */}
      <footer className='main-footer'>
        <Container>
          <div class="widgets-section">
            <div class="row clearfix">

              <div class="big-column col-lg-6 col-md-12 col-sm-12">
                <div class="row clearfix">

                  <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div class="footer-widget logo-widget">
                      <div class="logo">
                        <a href="index.html"><img src={img1} alt=""></img></a>
                      </div>
                      <div class="text">With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.</div>
                      <ul class="social-icons">
                        <li><FaFacebookF className='icon'></FaFacebookF></li>
                        <li><FaLinkedinIn className='icon'></FaLinkedinIn> </li>
                        <li><FaTwitter className='icon'></FaTwitter> </li>
                        <li><FaGooglePlusG className='icon'></FaGooglePlusG></li>
                      </ul>
                    </div>
                  </div>

                  <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div class="footer-widget links-widget">
                      <h2>Our Services</h2>
                      <div class="widget-content">
                        <ul class="list">
                          <li>Warehousing</li>
                          <li>Machinery Transport</li>
                          <li>Transportation</li>
                          <li>Multimodal Transportation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="big-column col-lg-6 col-md-12 col-sm-12">
                <div class="row clearfix">


                  <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div class="footer-widget contact-widget">
                      <h2>Contact Details</h2>
                      <div class="widget-content">

                        <ul>
                          <li>(1234) 567 8910</li>
                          <li> 000, Mumbai, India</li>
                          <li> youremail@example.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div class="footer-widget newsletter-widget">
                      <h2>Quick Inquiry</h2>
 
                      <div class="newsletter-form">
                        <form method="post" action="contact-footer.php">
                          <div class="form-group">
                            <input type="text" name="name" value="" placeholder="Your Name" required=""></input>
                            <input type="email" name="email" value="" placeholder="Your Email" required=""></input>
                            <input type="text" name="message" value="" placeholder="Message" required=""></input>
                            <button type="submit" class="theme-btn btn-style-one"><span class="txt">Submit</span></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-bottom clearfix">
              <div class="pull-left">
                <div class="copyright">© Yoursite 2021 All Right Reserved.</div>
              </div>
              <div class="pull-right">
                <div>Terms & Conditions | Privacy Policy | Disclaimer</div>
                
              </div>
            </div>
          </div>
        </Container>
      </footer>
      {/* footer end */}

    </>
  );
}

export default App;
