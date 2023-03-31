import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import "materialize-css/dist/css/materialize.min.css"; 
 
 
export default function Home() {
  const [vehicleInput, setVehicleInput] = useState({
    name: "",
    phoneNumber: "",
    make: "",
    model: "",
    year: "",
    vin: "",
    problemDescription: "",
  });
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleInput),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setVehicleInput({

        name: "",
        phoneNumber: "",
        make: "",
        model: "",
        year: "",
        vin: "",
        problemDescription: "",
      });
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  };

  
  return (
    <div>
      <Head>
        <title>Protocol Network</title>
   
      </Head>
 {/* Navbar */}
 <nav>
          <div className="nav-wrapper black">
            <a href="#" className="brand-logo">
               
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
         
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#about">Home</a>
              </li>
             
              <li>
                <a href="#pricing">Services Pricing</a>
              </li>
              
              <li>
                <a href="#photo">Photo Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile navbar */}
        <ul className="sidenav" id="mobile-demo">
        <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#photo">Photo Gallery</a>
              </li>
        </ul>
      <main className={styles.main}>
      
        

        {/* Home section */}
        <section className={styles.home + " container"}>
          <h1>Protocol Network</h1>
          <h5>
          25+ Years of Automotive Excellence Right at Your Doorstep
 
          </h5>
          <p>
          Colossians 
  3:23-24
          </p>
        </section>

     
        <section className="section" id="pricing">
  <div className="container">
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Basic Plan</span>
            <h3>$50</h3>
            <p>per service</p>
            <ul className="pricing-feature-list">
              <li className="pricing-feature">Oil Change</li>
              <li className="pricing-feature">Tire Rotation</li>
              <li className="pricing-feature">Brake Inspection</li>
              <li className="pricing-feature">Fluid Check & Top-up</li>
              <li className="pricing-feature">Diagnostic Check</li>
              <li className="pricing-feature">10% Discount on Parts & Labor</li>
            </ul>
          </div>
          <div className="card-action">
            <a href="#contact" className="btn waves-effect waves-light black">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Premium Plan</span>
            <h3>$150</h3>
            <p>per service</p>
            <ul className="pricing-feature-list">
              <li className="pricing-feature">All Basic Plan Services</li>
              <li className="pricing-feature">Air Conditioning Service</li>
              <li className="pricing-feature">Battery Replacement</li>
              <li className="pricing-feature">Alternator Replacement</li>
              <li className="pricing-feature">Starter Replacement</li>
              <li className="pricing-feature">15% Discount on Parts & Labor</li>
            </ul>
          </div>
          <div className="card-action">
            <a href="#contact" className="btn waves-effect waves-light black">Book Now</a>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Ultimate Plan</span>
            <h3>$250</h3>
            <p>per service</p>
            <ul className="pricing-feature-list">
              <li className="pricing-feature">All Premium Plan Services</li>
              <li className="pricing-feature">Transmission Service</li>
              <li className="pricing-feature">Engine Tune-up</li>
              <li className="pricing-feature">Fuel Injection Service</li>
              <li className="pricing-feature">25% Discount on Parts & Labor</li>
            </ul>
          </div>
          <div className="card-action">
            <a href="#contact" className="btn waves-effect waves-light black">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  
 
<section className="z-depth-3 card" id="photo">
 
</section >
      <div classNameName={styles.result} id="contact">{result}</div>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={vehicleInput.name}
              onChange={(e) => setVehicleInput({ ...vehicleInput, name: e.target.value })}
            />
          </label>
          <label>
           Phone Number:
           <input
           type="text"
           name="phoneNumber"
           placeholder="What is the best phone number to reach you?"
           value={vehicleInput.phoneNumber}
           onChange={(e) => setVehicleInput({ ...vehicleInput, phoneNumber: e.target.value })}
          />
         </label>
          <label>
            Make:
            <input
              type="text"
              name="make"
              placeholder="What is the Make of the Vehicle?"
              value={vehicleInput.make}
              onChange={(e) => setVehicleInput({ ...vehicleInput, make: e.target.value })}
            />
          </label>
          <label>
            Model:
            <input
              type="text"
              name="model"
              placeholder="What is the model of the Vehicle"
              value={vehicleInput.model}
              onChange={(e) => setVehicleInput({ ...vehicleInput, model: e.target.value })}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              placeholder="What is the year of the Vehicle?"
              value={vehicleInput.year}
              onChange={(e) => setVehicleInput({ ...vehicleInput, year: e.target.value })}
            />
          </label>
          <label>
            VIN:
            <input
              type="text"
              name="vin"
              placeholder="Can you provide the VIN NUMBER of the Vehicle?"
              value={vehicleInput.vin}
              onChange={(e) => setVehicleInput({ ...vehicleInput, vin: e.target.value })}
            />
          </label>
          <label>
            Problem description:
            <input
              type="text"
              name="problemDescription"
              placeholder="How can we help you?"
              value={vehicleInput.problemDescription}
              onChange={(e) => setVehicleInput({ ...vehicleInput, problemDescription: e.target.value })}
            />
          </label>
          <input type="submit" value="Submit Form" />
        </form>
       
      </main>
    
    </div>
  );
}
