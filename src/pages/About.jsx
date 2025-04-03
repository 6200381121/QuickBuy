import React from 'react';
import './About.css';
import {
  FaUsers,
  FaChartLine,
  FaShoppingBag,
  FaDollarSign,
  FaTruck,
  FaHeadset,
  FaUndo,
  FaHeart,
  FaUser
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">


      {/* Our Story */}
      <section className="our-story">
        <div className="story-text">
          <h3>Our Story</h3>
          <p>
            Launched in 2025, QuickNuy is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very
            fast rate. Exclusive offers a diverse assortment in categories ranging
            from consumer electronics to lifestyle.
          </p>
        </div>
        <div className="story-img">
          <img
            src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
            alt="Our Story"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <FaUsers size={30} />
          <h5>10.5k</h5>
          <p>Sellers active on site</p>
        </div>
        <div className="stat-card highlight">
          <FaDollarSign size={30} />
          <h5>33k</h5>
          <p>Monthly Product Sale</p>
        </div>
        <div className="stat-card">
          <FaChartLine size={30} />
          <h5>45.5k</h5>
          <p>Customer active in our site</p>
        </div>
        <div className="stat-card">
          <FaShoppingBag size={30} />
          <h5>25k</h5>
          <p>Annual gross sale in our site</p>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        {[
          {
            name: 'Tom Cruise',
            title: 'Founder & Chairman',
            img: 'https://randomuser.me/api/portraits/men/44.jpg'
          },
          {
            name: 'Emma Watson',
            title: 'Managing Director',
            img: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            name: 'Will Smith',
            title: 'Product Designer',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIgKihpzJcI6htq6FlIzON-Sn35gfU3OPyVxjI4ydWFznzdlbacV59bHR2Vj1aJK2Osw&usqp=CAU'
          }
        ].map((member, idx) => (
          <div key={idx} className="team-member">
            <img src={member.img} alt={member.name} />
            <h5>{member.name}</h5>
            <p>{member.title}</p>
            <div className="socials">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        ))}
      </section>

      {/* Features */}
    */
    </div>
  );
};

export default About;
