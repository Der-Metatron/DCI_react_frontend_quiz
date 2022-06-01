import React, { Fragment, useEffect, useState } from "react";

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
          
    </Fragment>
  );
};
