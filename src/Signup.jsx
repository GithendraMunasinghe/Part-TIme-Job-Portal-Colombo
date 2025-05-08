import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <div class="page-content bg-white">


                <div class="section-full content-inner shop-account">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h3 class="font-weight-700 m-t0 m-b20">Create An Account</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 m-b30">
                                <div class="p-a30 border-1  max-w500 m-auto">
                                    <div class="tab-content">
                                        <form id="login" class="tab-pane active">
                                            <h4 class="font-weight-700 text-center">PERSONAL INFORMATION</h4>
                                            <div class="form-group">
                                                <label class="font-weight-700">First Name *</label>
                                                <input name="dzName" required="" class="form-control" placeholder="First Name" type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-700">Last Name *</label>
                                                <input name="dzName" required="" class="form-control" placeholder="Last Name" type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-700">E-MAIL *</label>
                                                <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email" />
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-700">PASSWORD *</label>
                                                <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password" />
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-700 mt-2">ROLE *</label>
                                                <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>Job Seeker</option>
                                                    <option>Employer</option>
                                                </select>
                                            </div>
                                    
                                            <div class="text-center">
                                                <button class="site-button button-lg primary align-center">CREATE</button>
                                            </div>
                                            <div className='mt-2'>
                                            <p class="font-weight-600">If you have an account with us, please <a href="/Login">Log in.</a></p>
                                            </div>
                                            
                                        </form>
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
