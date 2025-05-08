import React from 'react'

export const CandidateForm = () => {
    return (
        <div>
            <div className="content-block">
                <div className="section-full bg-white submit-resume content-inner-2">
                    <div className="container">
                        <h2>Submit Your Resume</h2>
                            <div className="col-lg-8 col-md-12">
                                <form>
                                    <div className="form-group">
                                        <label>Your name</label>
                                        <input type="text" className="form-control" placeholder="Your Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" placeholder="Your Content"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Region</label>
                                        <select className="form-control">
                                            <option>New York</option>
                                            <option>London</option>
                                            <option>Los Angeles</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Professional title</label>
                                        <input type="text" className="form-control" placeholder="Web Designer" />
                                    </div>
                                    <div className="form-group">
                                        <label>Experience</label>
                                        <input type="text" className="form-control" placeholder="3 yrs" />
                                    </div>
                                    <div className="form-group">
                                        <label>Photo (optional)</label>
                                        <div className="custom-file">
                                            <input type="file" className="site-button" id="customFile" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Minimum rate/h (Rs) (optional)</label>
                                        <input type="text" className="form-control" placeholder="RS. 100" />
                                    </div>
                                    <div className="form-group">
                                        <label>Resume category</label>
                                        <select className="form-control">
                                            <option>Designe</option>
                                            <option>Construct</option>
                                            <option>Food Service</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Skills (optional)</label>
                                        <input type="text" className="form-control" placeholder="Your Skills" />
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
