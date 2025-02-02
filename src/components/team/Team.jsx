import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css"

const Team = () => {
  const teamMembers = [
    { img: "./img/team-1.jpg", name: "Full Name", designation: "Designation" },
    { img: "./img/team-2.jpg", name: "Full Name", designation: "Designation" },
    { img: "./img/team-3.jpg", name: "Full Name", designation: "Designation" },
    { img: "./img/team-4.jpg", name: "Full Name", designation: "Designation" },
  ];

  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container" id="team">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 * index}s`}
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                </div>
                <h5 className="mb-0">{member.name}</h5>
                <small>{member.designation}</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
