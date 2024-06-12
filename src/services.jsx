import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 25,
      speed: 400,
      scale: 1.05,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
   
    <section className="service" id="services">
      <h1>Our Services</h1>
      <div className="box">
        <div className="item tilt">
          <h2>Community Management</h2>
          <img src="./public/chat.png" alt="Community Management" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Affiliate Marketing</h2>
          <img src="public/emoji-very-happy-alt.png" alt="Affiliate Marketing" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Growth Marketing</h2>
          <img src="public/megaphone.png" alt="Growth Marketing" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Ecommerce</h2>
          <img src="public/rocket-launch.png" alt="Ecommerce" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>SEO</h2>
          <img src="public/star.png" alt="SEO" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Branding</h2>
          <img src="public/user-group.png" alt="Branding" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="shape one"></div>
        <div className="shape two"></div>
      </div>
    </section>
  );
};

export default Services;
