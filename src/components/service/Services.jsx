import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

const Services = () => {
  const services = [
    { icon: "fa-users",        title: "About Us",     id:"#about"},
    { icon: "fa-phone",        title: "Contact Us",   id:"#contact"},
    { icon: "fa-user-tie",     title: "Master Chefs", id:"#team"},
    { icon: "fa-comment-dots", title: "Feedback",     id:"#feedback"},
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.2 * index}s`}
            >
              <a href={service.id}>
              <div className="service-item rounded pt-3">
                <div className="p-4 text-center">
                  <i className={`fa fa-3x ${service.icon} mb-4`}></i>
                  <h5>{service.title}</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
