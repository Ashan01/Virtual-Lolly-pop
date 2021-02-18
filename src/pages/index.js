import React, { useState } from "react";
import Lolly from "../components/lolly";

const Home = () => {
   let [c1, setC1] = useState();
   return (
      <div>
         <Lolly />

         <div>
            <input type="color" />
            <input type="color" />
            <input type="color" />
         </div>
      </div>
   );
};

export default Home;
