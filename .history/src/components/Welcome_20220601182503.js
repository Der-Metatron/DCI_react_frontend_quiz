import React from "react";

export const Welcome = () => {
  return (
    // For the main page
    <Fragment>
      <Helmet>
        <title>Webdev-Quiz</title>
      </Helmet>
      <div id="home">
        <section>
          {/* <div style={{ textAlign: 'center' }}> 
                    <p>LOGO HERE</p>
                </div> */}
          <h1>WEBDEV-Quiz </h1>
          <div className="play-button-container">
            <ul>
              <Link className="play-button" to="/play/instructions">
                Play
              </Link>
            </ul>
          </div>
          <div className="auth-container">
            <Link to="/login" className="auth-buttons" id="login-button">
              Login
            </Link>
            <Link to="/register" className="auth-buttons" id="signup-button">
              Sign Up
            </Link>
          </div>
          <br></br> <p>By Serdar,Dennis und Sprotte 2022</p>
        </section>
      </div>
    </Fragment>
  );
};
export default Welcome;
