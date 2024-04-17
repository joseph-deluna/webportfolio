import React from 'react';
import smartHomeImage1 from '../../assets/img/work/smart_city_project1.jpg'; // Import images for smart home projects
import smartHomeImage2 from '../../assets/img/work/smart_home_project2.jpg'; // Import images for smart home projects
import smartHomeImage3 from '../../assets/img/work/smart_home_project3.jpg'; // Import images for smart home projects
import smartHomeImage4 from '../../assets/img/work/smart_home_project4.jpg'; // Import images for smart home projects
import smartCityImage1 from '../../assets/img/work/smart_city_project1.jpg'; // Import images for smart home projects
import smartCityImage2 from '../../assets/img/work/smart_city_project2.jpg'; // Import images for smart home projects
import webPortfolioImage1 from '../../assets/img/work/web_portfolio_project1.jpg'; // Import images for web portfolio projects
import webPortfolioImage2 from '../../assets/img/work/web_portfolio_project2.jpg'; // Import images for web portfolio projects
import webPortfolioImage3 from '../../assets/img/work/web_portfolio_project3.jpg'; // Import images for web portfolio projects
import webPortfolioImage4 from '../../assets/img/work/web_porftfolio_project4.jpg'; // Import images for web portfolio projects
import webPortfolioImage5 from '../../assets/img/work/web_porftfolio_project5.jpg'; // Import images for web portfolio projects
import webPortfolioImage6 from '../../assets/img/work/web_portfolio_project6.jpg'; // Import images for web portfolio projects

const WorkModal = ({ onClose }) => {
    return (
        <div className='modal-overlasy'>
      <div className="modal work-modal">
        <button className="close-btn" onClick={onClose}></button>
        <h2>My Work</h2>
  
        {/* Web Portfolio Projects */}
          <h3>Web Portfolio</h3>
        <div className="project-category web">
            <a href='https://github.com/joseph-deluna/Face-recognition-App' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage1} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>Face Recognition App</h4>
              <p>An app that uses face recognition technology for security purposes.</p>
            </div>
          </div>
            </a>
            <a href='https://github.com/joseph-deluna/gulayexpress.github.io' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage2} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>Gulay Express</h4>
              <p>An e-commerce platform for buying and selling fresh produce.</p>
            </div>
          </div>
            </a>
            <a href='https://github.com/joseph-deluna/Firestation-System' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage3} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>Firestation System</h4>
              <p>A system designed to manage operations in a fire station.</p>
            </div>
          </div>
            </a>
            <a href='https://publuu.com/flip-book/85162/242115' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage4} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>Taraki - CAR</h4>
              <p>A consortium website showcasing the Cordilleras.</p>
            </div>
          </div>
            </a>
            <a href='https://publuu.com/flip-book/85162/242115' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage5} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>MCDL-INTL Trading Corporation</h4>
              <p>My company website.</p>
            </div>
          </div>
            </a>
            <a href='https://publuu.com/flip-book/85162/242115' target='__blank' className="project-link">
          <div className="project">
            <img src={webPortfolioImage6} alt="Web Portfolio Project" />
            <div className="project-details">
              <h4>Portal (Under Development)</h4>
              <p>An interactive web portal for accessing various services.</p>
            </div>
          </div>
            </a>
        </div>

        {/* Smart Home Projects */}
          <h3>Smart Home Projects</h3>
        <div className="project-category smart-home">
            <a href='https://mcdl-intl.blogspot.com/2023/02/showroom-tour-lunamaria-designs.html' target='__blank' className="project-link">
          <div className="project">
            <img src={smartHomeImage1} alt="Smart Home Project" />
            <div className="project-details">
              <h4>Albergo Office</h4>
              <p>A smart home project designed for office automation.</p>
            </div>
          </div>
            </a>
            <a href='https://mcdl-intl.blogspot.com/2022/11/spa-villa-renovation-at-rancho-bernardo.html' target='__blank' className="project-link">
          <div className="project">
            <img src={smartHomeImage2} alt="Smart Home Project" />
            <div className="project-details">
              <h4>Rancho Bernardo Luxury Villa</h4>
              <p>A luxury villa with advanced smart home features.</p>
            </div>
          </div>
            </a>
            <a href='https://mcdl-intl.blogspot.com/2022/10/morrocan-design-aibnb-el-hardin.html' target='__blank' className="project-link">
          <div className="project">
            <img src={smartHomeImage3} alt="Smart Home Project" />
            <div className="project-details">
              <h4>El Jardin Condominium</h4>
              <p>A condominium project featuring state-of-the-art smart home solutions.</p>
            </div>
          </div>
            </a>
        </div>
            <a href='' target='__blank' className="project-link">
          <div className="project">
            <img src={smartHomeImage4} alt="Smart Home Project" />
            <div className="project-details">
              <h4>Sagada House (Under Construction)</h4>
              <p>A modern house in Sagada equipped with smart home technology.</p>
            </div>
          </div>
            </a>
  
        {/* Smart City Projects */}
          <h3>Smart City Projects</h3>
        <div className="project-category smart-city">
            <a href='https://mcdl-intl.blogspot.com/2023/05/mcdl-intl-trading-corporations-ongoing.html' target='__blank' className="project-link">
          <div className="project">
            <img src={smartCityImage2} alt="Smart City Project" />
            <div className="project-details">
              <h4>Solar Street Light with 4G CCTV</h4>
              <p>An innovative project combining solar-powered street lights with CCTV surveillance.</p>
            </div>
          </div>
              </a>
            <a href='https://mcdl-intl.blogspot.com/2023/05/mcdl-intl-trading-corporations-ongoing.html' target='__blank' className="project-link">
          <div className="project">
            <img src={smartCityImage1} alt="Smart City Project" />
            <div className="project-details">
              <h4>Torrijos Smart Office Furniture </h4>
              <p>A modern government office leveraging smart technologies for efficient governance.</p>
            </div>
          </div>
            </a>
        </div>
      </div>
      </div>
    );
  }
  
  export default WorkModal;