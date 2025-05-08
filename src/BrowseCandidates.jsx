import React from 'react'

export const BrowseCandidates = () => {
    return (
        <div>
            <div className="page-content bg-white">

                {/* <div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:`url('assets/images/banner/bnr1.jpg')`}}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">Browse Candidates</h1>
                            
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><a href="#">Home</a></li>
                                    <li>Browse Candidates</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div> */}

                <div className="content-block">
                    <div className="section-full bg-white browse-job content-inner-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-8">
                                    <div className="m-b30">
                                        <input type="text" className="form-control" placeholder="Search Candidates" />
                                    </div>
                                    <ul className="post-job-bx">
                                        <li>
                                            <a href="#">
                                                <div className="d-flex m-b30">
                                                    <div className="job-post-company">
                                                        <span><img src="assets/images/testimonials/pic1.jpg" /></span>
                                                    </div>
                                                    <div className="job-post-info">
                                                        <h4>Dilani Madushika</h4>
                                                        <ul>
                                                            <li><i className="fa fa-user"></i> 24 Years</li>
                                                            <li><i className="fa fa-map-marker"></i> Gampaha</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="job-time mr-auto">
                                                        <span>Expected Minimum Salary: <b>Rs. 1800</b></span>
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
                                                                    <h5 className="modal-title">Find Candidates</h5>
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
                                                                                src="assets/images/testimonials/pic1.jpg"
                                                                                alt="Dilani Madushika"
                                                                                className="img-fluid rounded shadow-sm"
                                                                            />
                                                                        </div>

                                                                        {/* Right Column: Info */}
                                                                        <div className="col-md-8">
                                                                            <h4 className="fw-bold">Dilani Madushika</h4>
                                                                            <div className="text-muted small">
                                                                                <p>
                                                                                    A motivated and reliable part-time job seeker from Gampaha, Sri Lanka. Currently studying Business Management while seeking flexible work in customer service, cashiering, or receptionist roles. Strong communication skills, punctual, and adaptable to different working environments.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row text-center mt-4">
                                                                        <div className="col-md-3">
                                                                            <p><strong><i className="fa fa-map-marker"></i> Gampaha</strong></p>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <p><strong><i className="fa fa-user"></i> 24 Years</strong></p>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <p><strong><i className="fa fa-usd"></i> Rs. 1800 / Day</strong></p>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <p><strong><i className="fa fa-briefcase"></i> 1 Year</strong></p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="modal-footer border-0">
                                                                    <button type="button" className="btn btn-primary">
                                                                        Contact Now
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
                                                        <span><img src="assets/images/testimonials/pic2.jpg" /></span>
                                                    </div>
                                                    <div className="job-post-info">
                                                        <h4>Nadeesha Fernando</h4>
                                                        <ul>
                                                            <li><i className="fa fa-user"></i> 26 Years</li>
                                                            <li><i className="fa fa-map-marker"></i> Colombo 05</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="job-time mr-auto">
                                                        <span>Expected Minimum Salary: <b>Rs. 2200</b></span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#largeModal1"
                                                    >
                                                        View More  <i className="ri-hand-heart-fill"></i>
                                                    </button>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="largeModal1" tabIndex="-1">
                                                        <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                            <div className="modal-content">
                                                                <div className="modal-header border-0">
                                                                    <h5 className="modal-title">Find Candidates</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="row g-3 align-items-start">
                                                                        <div className="col-md-4">
                                                                            <img src="assets/images/testimonials/pic2.jpg" alt="Nadeesha Fernando" className="img-fluid rounded shadow-sm" />
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <h4 className="fw-bold">Nadeesha Fernando</h4>
                                                                            <p className="text-muted small">
                                                                                Hardworking and detail-oriented university student looking for part-time cashier or store assistant roles. Fluent in Sinhala and English, with prior experience working weekends at a supermarket in Colombo. Fast learner and team player.
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row text-center mt-4">
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-map-marker"></i> Colombo 05</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-user"></i> 26 Years</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-usd"></i> Rs. 2200 / Day</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-briefcase"></i> 2 Years</strong></p></div>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer border-0">
                                                                    <button className="btn btn-primary">Contact Now</button>
                                                                    <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                        <li>
                                            <a href="#">
                                                <div className="d-flex m-b30">
                                                    <div className="job-post-company">
                                                        <span><img src="assets/images/testimonials/pic3.jpg" /></span>
                                                    </div>
                                                    <div className="job-post-info">
                                                        <h4>Harshani De Silva</h4>
                                                        <ul>
                                                            <li><i className="fa fa-user"></i> 29 Years</li>
                                                            <li><i className="fa fa-map-marker"></i> Negombo</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="job-time mr-auto">
                                                        <span>Expected Minimum Salary: <b>Rs. 2000</b></span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#largeModal2"
                                                    >
                                                        View More  <i className="ri-hand-heart-fill"></i>
                                                    </button>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="largeModal2" tabIndex="-1">
                                                        <div className="modal-dialog modal-lg modal-dialog-centered mt-5 pt-5">
                                                            <div className="modal-content">
                                                                <div className="modal-header border-0">
                                                                    <h5 className="modal-title">Find Candidates</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="row g-3 align-items-start">
                                                                        <div className="col-md-4">
                                                                            <img src="assets/images/testimonials/pic3.jpg" alt="Harshani De Silva" className="img-fluid rounded shadow-sm" />
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <h4 className="fw-bold">Harshani De Silva</h4>
                                                                            <p className="text-muted small">
                                                                                Passionate preschool assistant from Negombo seeking part-time childcare or teaching support roles. Experienced with young children and excellent in managing activities. Available on weekdays and weekends.
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row text-center mt-4">
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-map-marker"></i> Negombo</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-user"></i> 29 Years</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-usd"></i> Rs. 2000 / Day</strong></p></div>
                                                                        <div className="col-md-3"><p><strong><i className="fa fa-briefcase"></i> 3 Years</strong></p></div>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer border-0">
                                                                    <button className="btn btn-primary">Contact Now</button>
                                                                    <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                    <div className="pagination-bx m-t30">
                                        <ul className="pagination">
                                            <li className="previous"><a href="#"><i className="ti-arrow-left"></i> Prev</a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li className="next"><a href="#">Next <i className="ti-arrow-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <div className="sticky-top">
                                        <div className="clearfix m-b30">
                                            <h5 className="widget-title font-weight-700 text-uppercase">Keywords</h5>
                                            <div className="">
                                                <input type="text" className="form-control" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="clearfix m-b10">
                                            <h5 className="widget-title font-weight-700 m-t0 text-uppercase">Location</h5>
                                            <input type="text" className="form-control m-b30" placeholder="Location" />
                                            <div className="input-group m-b20">
                                                <input type="text" className="form-control" placeholder="120" />
                                                <select>
                                                    <option>Km</option>
                                                    <option>miles</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="clearfix m-b30">
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
                                        <div className="clearfix">
                                            <h5 className="widget-title font-weight-700 text-uppercase">Category</h5>
                                            <select>
                                                <option>Any Category</option>
                                                <option>Automotive Jobs</option>
                                                <option>Construction Facilities</option>
                                                <option>Design, Art & Multimedia</option>
                                                <option>Food Services</option>
                                            </select>
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
