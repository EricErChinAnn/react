import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import React from "react"

function App() {
  return (
    <React.Fragment>
      <nav>
        <ul className="navBar p-0 m-0 pb-2">
          <li ><a className="navTab p-2" href="#home">Home</a></li>
          <li ><a className="navTab p-2" href="#aboutUs">About Us</a></li>
          <li ><a className="navTab p-2" href="">Our Menu</a></li>
          <li ><a className="navTab p-2" href="">Contact Us</a></li>
        </ul>
      </nav>
      <section id="home">
      <div className="topPic d-flex justify-content-center align-items-center">
          <h2 className="bookingTxt">Make a Booking</h2>
      </div>
      </section>
      <section id="aboutUs" className="aboutUs">
        <div className="contentHolder"></div>
        <h1 className="content">Food so fresh, any fresher you have to fly to Japan</h1>
      </section>
    </React.Fragment>
  );
}

export default App;
