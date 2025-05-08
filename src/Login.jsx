import React from 'react'

export const Login = () => {
  return (
    <div>
      <div className="page-content bg-white">
        <div className="section-full content-inner-2 shop-account">

          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="font-weight-700 m-t0 m-b20">Login Your Account</h3>
              </div>
            </div>
            <div>
              <div className="max-w500 m-auto m-b30">
                <div className="p-a30 border-1 seth">
                  <div className="tab-content nav">
                    <form id="login" className="tab-pane active col-12 p-a0 ">
                      <h4 className="font-weight-700 text-center">LOGIN</h4>
                      <p className="font-weight-600 text-center">If you have an account with us, please log in.</p>
                      <div className="form-group">
                        <label className="font-weight-700">E-MAIL *</label>
                        <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-700">PASSWORD *</label>
                        <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                      </div>
                      <a data-toggle="tab" href="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</a>
                      <div className="text-center">
                        <button className="site-button m-r5 button-lg ">login</button>
                        <p className="font-weight-600">If you do not have an account please                         <a href="/signup" className="m-l5"><i className="fa fa-unlock-alt"></i> Sign up</a></p>
                      </div>
                    </form>
                    <form id="forgot-password" className="tab-pane fade  col-12 p-a0">
                      <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                      <p className="font-weight-600">We will send you an email to reset your password. </p>
                      <div className="form-group">
                        <label className="font-weight-700">E-MAIL *</label>
                        <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                      </div>
                      <div className="text-left">
                        <a className="site-button outline gray button-lg" data-toggle="tab" href="#login">Back</a>
                        <button className="site-button pull-right button-lg">Submit</button>
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
