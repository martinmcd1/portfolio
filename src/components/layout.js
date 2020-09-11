/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.scss"

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My name is Martin MacDonald.</h1>
      </header>
      <div className="boxes">
        <div className="box">
          <img
            src="https://images.pexels.com/photos/4526398/pexels-photo-4526398.jpeg?cs=srgb&dl=pexels-screen-post-4526398.jpg&fm=jpg"
            alt=""
          />
          <div className="box-content">Box1 </div>
        </div>
        <div className="box">
          <img
            src="https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?cs=srgb&dl=pexels-markus-spiske-193349.jpg&fm=jpg"
            alt=""
          />

          <div className="box-content">Box2</div>
        </div>
        <div className="box">
          <img
            src="https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?cs=srgb&dl=pexels-sound-on-3756879.jpg&fm=jpg"
            alt=""
          />

          <div className="box-content">Box3 </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
