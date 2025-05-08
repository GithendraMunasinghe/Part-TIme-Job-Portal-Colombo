import React from 'react'

export const JobAdForm = () => {
    return (
        <div>
            <div className="content-block">
                <div className="section-full bg-white submit-resume content-inner-2">
                    <div className="container">
                        <h2>Submit Job Details</h2>
                            <div className="col-lg-8 col-md-12">
                                <form>
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input type="text" className="form-control" placeholder="Your Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Employer</label>
                                        <input type="text" className="form-control" placeholder="Employer" />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Description</label>
                                        <textarea className="form-control" placeholder="Your Content"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Age Group</label>
                                        <select className="form-control">
                                            <option>20-30</option>
                                            <option>30-40</option>
                                            <option>40-50</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Required Education</label>
                                        <input type="text" className="form-control" placeholder="O/L" />
                                    </div>
                                    <div className="form-group">
                                        <label>Experience</label>
                                        <input type="text" className="form-control" placeholder="3 yrs" />
                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <input type="text" className="form-control" placeholder="Care Giver" />
                                    </div>
                                    <div className="form-group">
                                        <label>Photo (optional)</label>
                                        <div className="custom-file">
                                            <input type="file" className="site-button" id="customFile" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Deadline</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <button type="submit" className="site-button">Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
