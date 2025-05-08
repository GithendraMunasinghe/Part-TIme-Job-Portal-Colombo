import React from 'react'


export const BrowseJobs = () => {
    return (
        <div>
            <div className="page-content">
                <div className="section-full bg-white content-inner-2">
                    <div className="container">
                        <div className="d-flex job-title-bx section-head">
                            <div className="mr-auto">
                                <h2 className="m-b5">Recent Jobs</h2>
                                <h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
                            </div>
                            <div className="align-self-end">
                                <a href="#" className="site-button button-sm">Browse All Jobs <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <ul className="post-job-bx">
                                    {/* Job Card*/}
                                    <li>
                                        <a href="#">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-company">
                                                    <span><img src="/assets/images/logo/life-guard.png" /></span>
                                                </div>
                                                <div className="job-post-info">
                                                    <h4>Event Helper</h4>
                                                    <ul>
                                                        <li><i className="fa fa-map-marker"></i> Kasun Perera</li>
                                                        <li><i className="fa fa-bookmark-o"></i> Kaduwela</li>
                                                        <li><i className="fa fa-clock-o"></i> Date - 2025-04-30</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="job-time mr-auto">
                                                    <span>Rs. 2500</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#largeModal"
                                                >
                                                    View More  <i className="ri-hand-heart-fill"></i>
                                                </button>
                                                {/* Pop up Model*/}

                                                <div className="modal fade" id="largeModal" tabIndex="-1">
                                                    <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                        <div className="modal-content">
                                                            <div className="modal-header border-0">
                                                                <h5 className="modal-title">Part-Time Job Opportunity</h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>

                                                            <div className="modal-body">
                                                                <div className="row g-3 align-items-start">
                                                                    {/* Left Column: Image */}
                                                                    <div className="col-md-4">
                                                                        <img
                                                                            src="/assets/images/logo/life-guard.png"
                                                                            alt="Event Helper"
                                                                            className="img-fluid rounded shadow-sm"
                                                                        />
                                                                    </div>

                                                                    {/* Right Column: Job Info */}
                                                                    <div className="col-md-8">
                                                                        <h4 className="fw-bold">Event Helper</h4>

                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Employer:</strong> Kausn Perera</li>

                                                                                    <li><strong>Location:</strong> Kaduwela</li>
                                                                                    <li><strong>Salary:</strong> Rs 2500</li>
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <ul className=" mb-3">
                                                                                    <li><strong>Age Group:</strong> 40–50</li>
                                                                                    <li><strong>Experience:</strong> No Need</li>
                                                                                    <li><strong>Deadline:</strong> 2024.04.30</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-muted small">
                                                                            <p>
                                                                                We are looking for energetic part-time Event Helpers to assist with setup, coordination, and guest support during events in Colombo and surrounding areas.
                                                                                Pay starts at Rs 2500 per event based on hours and responsibilities. Ideal for students or those seeking flexible weekend work.
                                                                                Please apply via WhatsApp with your name, age, availability, and any past event experience.
                                                                            </p>

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
                                                {/* End Pop up Model*/}
                                            </div>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-company">
                                                    <span><img src="/assets/images/logo/loudspeaker.png" /></span>
                                                </div>
                                                <div className="job-post-info">
                                                    <h4>Announcer</h4>
                                                    <ul>
                                                        <li><i className="fa fa-map-marker"></i> Dilsha Fernando</li>
                                                        <li><i className="fa fa-bookmark-o"></i> Nugegoda</li>
                                                        <li><i className="fa fa-clock-o"></i> Date - 2025-05-05</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="job-time mr-auto">
                                                    <span>Rs. 3000</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#cafeModal"
                                                >
                                                    View More <i className="ri-hand-heart-fill"></i>
                                                </button>

                                                {/* Pop up Modal */}
                                                <div className="modal fade" id="cafeModal" tabIndex="-1">
                                                    <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                        <div className="modal-content">
                                                            <div className="modal-header border-0">
                                                                <h5 className="modal-title">Part-Time Job Opportunity</h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>

                                                            <div className="modal-body">
                                                                <div className="row g-3 align-items-start">
                                                                    {/* Left Column: Image */}
                                                                    <div className="col-md-4">
                                                                        <img
                                                                            src="/assets/images/logo/loudspeaker.png"
                                                                            alt="Café Assistant"
                                                                            className="img-fluid rounded shadow-sm"
                                                                        />
                                                                    </div>

                                                                    {/* Right Column: Job Info */}
                                                                    <div className="col-md-8">
                                                                        <h4 className="fw-bold">Announcer</h4>

                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Employer:</strong> Dilsha Fernando</li>
                                                                                    <li><strong>Location:</strong> Nugegoda</li>
                                                                                    <li><strong>Salary:</strong> Rs 3000</li>
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Age Group:</strong> 18–30</li>
                                                                                    <li><strong>Experience:</strong> 1 Year Preferred</li>
                                                                                    <li><strong>Deadline:</strong> 2025.05.10</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-muted small">
                                                                            <p>
                                                                                FlexJob brings you a weekend-only position as a part-time Café Assistant at a cozy coffee shop in Nugegoda.
                                                                                Responsibilities include serving customers, preparing beverages, and maintaining cleanliness.
                                                                                Previous experience in hospitality is a bonus. Ideal for students or recent graduates looking for work experience.
                                                                                Send your CV or WhatsApp your details including name, age, and available days to the number mentioned on the listing.
                                                                            </p>
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
                                                {/* End Pop up Modal */}
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-company">
                                                    <span><img src="/assets/images/logo/delivery-man.png" /></span>
                                                </div>
                                                <div className="job-post-info">
                                                    <h4>Delivery Assistant</h4>
                                                    <ul>
                                                        <li><i className="fa fa-map-marker"></i> Nuwan Madushanka</li>
                                                        <li><i className="fa fa-bookmark-o"></i> Colombo 05</li>
                                                        <li><i className="fa fa-clock-o"></i> Date - 2025-05-08</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="job-time mr-auto">
                                                    <span>Rs. 2000 + Allowance</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#deliveryModal"
                                                >
                                                    View More <i className="ri-hand-heart-fill"></i>
                                                </button>

                                                {/* Pop up Modal */}
                                                <div className="modal fade" id="deliveryModal" tabIndex="-1">
                                                    <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                        <div className="modal-content">
                                                            <div className="modal-header border-0">
                                                                <h5 className="modal-title">Part-Time Job Opportunity</h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>

                                                            <div className="modal-body">
                                                                <div className="row g-3 align-items-start">
                                                                    {/* Left Column: Image */}
                                                                    <div className="col-md-4">
                                                                        <img
                                                                            src="/assets/images/logo/delivery-man.png"
                                                                            alt="Delivery Assistant"
                                                                            className="img-fluid rounded shadow-sm"
                                                                        />
                                                                    </div>

                                                                    {/* Right Column: Job Info */}
                                                                    <div className="col-md-8">
                                                                        <h4 className="fw-bold">Delivery Assistant</h4>

                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Employer:</strong> Nuwan Madushanka</li>
                                                                                    <li><strong>Location:</strong> Colombo 05</li>
                                                                                    <li><strong>Salary:</strong> Rs 2000 + Allowance</li>
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Age Group:</strong> 20–35</li>
                                                                                    <li><strong>Experience:</strong> Basic Driving Skills Required</li>
                                                                                    <li><strong>Deadline:</strong> 2025.05.12</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-muted small">
                                                                            <p>
                                                                                FlexJob is listing a reliable part-time Delivery Assistant position for a small logistics company operating in Colombo 05.
                                                                                Tasks include supporting the main delivery driver, managing packages, and helping with on-site drop-offs.
                                                                                Candidates should be punctual and willing to work 4–5 hours per day, including weekends.
                                                                                Apply now by sending your basic info and availability via WhatsApp. Vehicle not required.
                                                                            </p>
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
                                                {/* End Pop up Modal */}
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-company">
                                                    <span><img src="/assets/images/logo/clerk.png" /></span>
                                                </div>
                                                <div className="job-post-info">
                                                    <h4>Cashier Assistant</h4>
                                                    <ul>
                                                        <li><i className="fa fa-map-marker"></i> Dilani Fernando</li>
                                                        <li><i className="fa fa-bookmark-o"></i> Nugegoda</li>
                                                        <li><i className="fa fa-clock-o"></i> Date - 2025-05-10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="job-time mr-auto">
                                                    <span>Rs. 1800 (Evening Shift)</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#cashierModal"
                                                >
                                                    View More <i className="ri-hand-heart-fill"></i>
                                                </button>

                                                {/* Pop up Modal */}
                                                <div className="modal fade" id="cashierModal" tabIndex="-1">
                                                    <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                        <div className="modal-content">
                                                            <div className="modal-header border-0">
                                                                <h5 className="modal-title">Part-Time Job Opportunity</h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>

                                                            <div className="modal-body">
                                                                <div className="row g-3 align-items-start">
                                                                    {/* Left Column: Image */}
                                                                    <div className="col-md-4">
                                                                        <img
                                                                            src="/assets/images/logo/clerk.png"
                                                                            alt="Cashier Assistant"
                                                                            className="img-fluid rounded shadow-sm"
                                                                        />
                                                                    </div>

                                                                    {/* Right Column: Job Info */}
                                                                    <div className="col-md-8">
                                                                        <h4 className="fw-bold">Cashier Assistant</h4>

                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Employer:</strong> Dilani Fernando</li>
                                                                                    <li><strong>Location:</strong> Nugegoda</li>
                                                                                    <li><strong>Salary:</strong> Rs 1800 per shift</li>
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <ul className="mb-3">
                                                                                    <li><strong>Age Group:</strong> 18–30</li>
                                                                                    <li><strong>Experience:</strong> Basic math & customer handling</li>
                                                                                    <li><strong>Deadline:</strong> 2025.05.15</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-muted small">
                                                                            <p>
                                                                                FlexJob is helping a local grocery store in Nugegoda find a part-time Cashier Assistant for evening hours (4 PM – 9 PM).
                                                                                The job includes handling transactions, assisting the main cashier, and managing small item inventory.
                                                                                Prior cashiering experience is preferred but not required. Friendly attitude and basic Sinhala or Tamil communication are a plus.
                                                                                Ideal for students or anyone looking for part-time evening work. Apply now via WhatsApp or visit in person with a copy of your NIC.
                                                                            </p>
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
                                                {/* End Pop up Modal */}
                                            </div>
                                        </a>
                                    </li>




                                </ul>
                                <div className="pagination-bx m-t30">
                                    <ul className="pagination">
                                        <li className="previous"><a href="#"><i class="ti-arrow-left"></i> Prev</a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="next"><a href="#">Next <i class="ti-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4">
                                <div class="sticky-top">
                                    <div class="clearfix m-b30">
                                        <h5 class="widget-title font-weight-700 text-uppercase">Keywords</h5>
                                        <div class="">
                                            <input type="text" class="form-control" placeholder="Search" />
                                        </div>
                                    </div>
                                    {/* <div class="clearfix mb-2">
                                        <h5 class="widget-title font-weight-700 text-uppercase">Category</h5>
                                        <select>
                                            <option>Any Category</option>
                                            <option>Automotive Jobs</option>
                                            <option>Construction Facilities</option>
                                            <option>Design, Art & Multimedia</option>
                                            <option>Food Services</option>
                                        </select>
                                    </div> */}

                                    <div class="clearfix m-b10">
                                        <h5 class="widget-title font-weight-700 m-t0 text-uppercase">Location</h5>
                                        <input type="text" class="form-control m-b30" placeholder="Location" />
                                    </div>
                                    <div class="clearfix m-b30">
                                        <h5 className="widget-title font-weight-700 text-uppercase">Job type</h5>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div class="product-brand">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job6" name="job_role[]" />
                                                        <label class="custom-control-label" for="job6">Decorator</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job7" name="job_role[]" />
                                                        <label class="custom-control-label" for="job7">Announcer</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job8" name="job_role[]" />
                                                        <label class="custom-control-label" for="job8">Stock</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job9" name="job_role[]" />
                                                        <label class="custom-control-label" for="job9">Cashier</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job10" name="job_role[]" />
                                                        <label class="custom-control-label" for="job10">Delivery</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div class="product-brand">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job1" name="job_role[]" />
                                                        <label class="custom-control-label" for="job1">Event</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job2" name="job_role[]" />
                                                        <label class="custom-control-label" for="job2">Promotion</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job3" name="job_role[]" />
                                                        <label class="custom-control-label" for="job3">Sales</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job4" name="job_role[]" />
                                                        <label class="custom-control-label" for="job4">Mascot</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="job5" name="job_role[]" />
                                                        <label class="custom-control-label" for="job5">Bouncer</label>
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
            </div>
        </div>
    )
}
