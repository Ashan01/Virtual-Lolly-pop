import React, { useState, useRef } from "react";
import Lolly from "../components/lolly";
import "./styles.css";

const Home = () => {
   let [c1, setC1] = useState("#FF0000");
   let [c2, setC2] = useState("#800080	");
   let [c3, setC3] = useState("#FF00FF	");

   let recField = useRef();
   let senderField = useRef();
   let msgField = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <div className="container">
         <div className="main-container">
            <div>
               <Lolly top={c1} middle={c2} bottom={c3} />
               <br />
               <input type="color" onChange={(e) => setC1(e.target.value)} />
               <input type="color" onChange={(e) => setC2(e.target.value)} />
               <input type="color" onChange={(e) => setC3(e.target.value)} />
            </div>

            <div className="form-container">
               <input type="text" placeholder="To" ref={recField} />
               <textarea
                  placeholder="Enter your message!"
                  ref={msgField}
               ></textarea>
               <input type="text" placeholder="From" ref={senderField} />
               <button onClick={handleSubmit}>Send</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
