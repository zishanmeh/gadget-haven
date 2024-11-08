import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/RgLfWKM/Rectangle-1.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Best Gadget Store in Town
              </h1>
              <p className="mb-5">
                your go-to destination for the latest gadgets and tech in town!
                Known for our wide selection of top-quality products,
                competitive prices, and expert staff, we’re committed to
                bringing you the best in innovation and convenience.
              </p>
              <button className="btn btn-primary">
                <Link to={"/"}>Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="my-10 w-11/12 max-w-7xl mx-auto ">
          <h1 className="text-3xl font-bold text-center ">Our latest Update</h1>
          <div className="stats shadow-lg flex justify-center mt-7">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Sale</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Oct 1st - Nov 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Customer</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Happy Customer</div>
              <div className="stat-value">30K+</div>
              <div className="stat-desc">↗︎ 90 (4%)</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-11/12 mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Contact with Us Now
          </h1>
          <div className="hero bg-base-200 min-h-screen rounded-lg my-7">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Send us feedback now!</h1>
                <p className="py-6">
                  Your feedback is our priority. There is no chance to avoid
                  your feedback.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn border-primaryColor hover:border-primaryColor btn-primary bg-primaryColor text-white hover:bg-primaryColor">
                      Send Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
