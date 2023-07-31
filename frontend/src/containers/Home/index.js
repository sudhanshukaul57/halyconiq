import React from "react";
import { HomePageText } from "./data";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import  aboutus  from "../../assets/Images/about-us.jpg";
import  test  from "../../assets/Images/test.jpg";


import {
  AiOutlineRocket,
  AiOutlineRise,
  AiOutlineMail,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";

function Home({}) {
  return (
    <div>
      <section>
        <Slideshow />
        <div className="container">
          <div className="header-section mt-5 pt-5">
            <h6>{HomePageText.subheader1}</h6>
            <h1>{HomePageText.header}</h1>
            <p>{HomePageText.subheader}</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRise className="icon1" />
                <h4>{HomePageText.services_title1}</h4>
                <p>{HomePageText.services_subheading1}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRocket className="icon2" />
                <h4>{HomePageText.services_title2}</h4>
                <p>{HomePageText.services_subheading2}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineMail className="icon3" />
                <h4>{HomePageText.services_title3}</h4>
                <p>{HomePageText.services_subheading3}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="abouthome">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={aboutus} className="img-fluid mt-5 pt-5" alt="aboutus" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="abouthome">
                  <h6 className="mt-3">{HomePageText.about_subheader}</h6>
                  <h4 className="mt-3">{HomePageText.about_header}</h4>
                  <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
                  <p className="text-justify">{HomePageText.about_des2}</p>

                  <button className="btn readmore mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="serviceshome">
          <div className="container">
            <div className="servicesheader">
              <h6>{HomePageText.serviceshome_subheader}</h6>
              <h4>{HomePageText.serviceshome_header}</h4>
              <p>{HomePageText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineNotification className="icon1" />
                  <h4>{HomePageText.services_box_title1}</h4>
                  <p>{HomePageText.services_box_des1}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon2" />
                  <h4>{HomePageText.services_box_title2}</h4>
                  <p>{HomePageText.services_box_des2}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon3" />
                  <h4>{HomePageText.services_box_title3}</h4>
                  <p>{HomePageText.services_box_des3}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon3" />
                  <h4>{HomePageText.services_box_title4}</h4>
                  <p>{HomePageText.services_box_des4}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon2" />
                  <h4>{HomePageText.services_box_title5}</h4>
                  <p>{HomePageText.services_box_des5}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon1" />
                  <h4>{HomePageText.services_box_title6}</h4>
                  <p>{HomePageText.services_box_des6}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-test">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="">
                  <h6>Marketing Automation</h6>
                  <h4>MARKETING FOR YOUR INDUSTRY</h4>
                  <p>
                  Technological developments have transformed the way consumers shop and have created a niche for startups to compete with the more established brands, eroding market share and proving the power of digital marketing.Every industry is distinctive. Our team will help you reach the most valuable audiences in your industry. Contact one of our developers for more information on how we can help you achieve results.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
