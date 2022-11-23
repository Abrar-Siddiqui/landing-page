import React from "react";
import './Static/Contact.css'
const Contactpage = () => {
  return (
    <>
      <div className="bgcolor">
        <div className="container">
          <div className="row">
          <h3 className="text-center font">Contact-Us</h3>
            <div className="col-lg-6 m-auto">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    class="form-control"
                    id="exampleInputNumber"
                    aria-describedby="NumberHelp"
                    placeholder="Mobile No."
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="E-mail Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="query"
                    class="form-control"
                    id="exampleInputMessage"
                    placeholder="Message"
                  />
                </div>
                <div>
                  <button type="submit" class="btn btn-primary form-control">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
