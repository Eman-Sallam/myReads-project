import React from "react";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 py-5">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="input"
                      className="form-control"
                      id="FirstName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="input"
                      className="form-control"
                      id="LastName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Age">Age</label>
                    <input type="number" className="form-control" id="Age" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="text-center ">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
