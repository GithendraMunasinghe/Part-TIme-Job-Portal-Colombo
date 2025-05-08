// components/JobCard.jsx
import React from "react";

const JobCard = ({ job, modalId }) => {
  return (
    <li>
      <div className="d-flex m-b30">
        <div className="job-post-company">
          <span><img src={job.logo} alt="Logo" /></span>
        </div>
        <div className="job-post-info">
          <h4>{job.title}</h4>
          <ul>
            <li><i className="fa fa-map-marker"></i> {job.name}</li>
            <li><i className="fa fa-bookmark-o"></i> {job.address}</li>
            <li><i className="fa fa-clock-o"></i> {job.date}</li>
          </ul>
        </div>
      </div>

      <div className="d-flex">
        <div className="job-time mr-auto">
          <span>{job.age}</span>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        >
          View More <i className="ri-hand-heart-fill"></i>
        </button>

        {/* Modal */}
        <div className="modal fade" id={modalId} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Listing Type: Job Opportunity</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row g-3 align-items-start">
                  <div className="col-md-4">
                    <img
                      src={job.image}
                      alt="Caregiver"
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>

                  <div className="col-md-8">
                    <h4 className="fw-bold">{job.title}</h4>

                    <div className="row">
                      <div className="col-md-6">
                        <ul className="mb-3">
                          <li><strong>Employer:</strong> {job.employer}</li>
                          <li><strong>Role:</strong> {job.role}</li>
                          <li><strong>Job Type:</strong> {job.jobType}</li>
                          <li><strong>Salary:</strong> {job.salary}</li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <ul className="mb-3">
                          <li><strong>Age Group:</strong> {job.age}</li>
                          <li><strong>Experience:</strong> {job.experience}</li>
                          <li><strong>Education:</strong> {job.education}</li>
                          <li><strong>Deadline:</strong> {job.deadline}</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-muted small">
                      <p>{job.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button type="button" className="btn btn-primary">
                  Apply Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
      </div>
    </li>
  );
};

export default JobCard;
