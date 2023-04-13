import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
 
import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css"; 
import Footer from "./Footer";


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
 
      <main className={styles.main}>
      
        

        {/* Home section */}
        <section className={styles.main}>
          <h1>Protocol Network</h1>
          <h5>
          25+ Years of Automotive Excellence Right at Your Doorstep
 
          </h5>
          <p>
          Colossians 
  3:23-24
          </p>
        </section>
        
<h1  id="contact">Contact Andrew</h1>
      <div classNameName={styles.result}>{result}</div>
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
     <Footer />
    </div>
  );
}
