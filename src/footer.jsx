
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container1">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">contact us</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>services</h4>
            <ul>
              <li><a href="#">community management</a></li>
              <li><a href="#">affiliate marketing</a></li>
              <li><a href="#">growth marketing</a></li>
              <li><a href="#">Ecommerce</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">branding</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
