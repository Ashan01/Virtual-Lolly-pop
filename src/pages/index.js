import React, { useRef, useState } from "react";
// import Lolly from "../components/lolly";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
// import "./styles.css";

const GET_DATA = gql`
   {
      getvCard {
         name
      }
   }
`;

// const ADD_VCARD = gql`
//    mutation addvCard(
//       $c1: String!
//       $c2: String!
//       $c3: String!
//       $rec: String!
//       $msg: String!
//       $sender: String
//    ) {
//       addvCard(c1: $c1, c2: $c2, c3: $c3, rec: $rec, msg: $msg, sender: $sender)
//    }
// `;

export default function Home() {
   // const [c1, setC1] = useState("#deaa43");
   // const [c2, setC2] = useState("#e95946");
   // const [c3, setC3] = useState("#d52358");

   // const [addvCard] = useMutation(ADD_VCARD);

   let { data, loading, error } = useQuery(GET_DATA);

   if (loading) {
      return <h1>Loading......</h1>;
   }
   if (error) {
      return <h1>Error</h1>;
   }

   // const handleSubmit = () => {
   // addvCard({
   //    variables: {
   //       c1,
   //       c2,
   //       c3,
   //       rec: recFeild.current.value,
   //       msg: msgFeild.current.value,
   //       sender: senderFeild.current.value,
   //    },
   // });
   // };

   // const senderFeild = useRef();
   // const msgFeild = useRef();
   // const recFeild = useRef();

   return (
      <div className="container">
         <h1>{data}</h1>
         <h1>Create Lolly</h1>
         {/* <div className="main-container">
            <div>
               <Lolly top={c1} middle={c2} bottom={c3} />
               <br />
               <input
                  type="color"
                  value={c1}
                  onChange={(e) => {
                     setC1(e.target.value);
                  }}
               />
               <input
                  type="color"
                  value={c2}
                  onChange={(e) => {
                     setC2(e.target.value);
                  }}
               />
               <input
                  type="color"
                  value={c3}
                  onChange={(e) => {
                     setC3(e.target.value);
                  }}
               />
            </div>
            <div className="form-container">
               <input type="text" placeholder="To" ref={recFeild} />
               <textarea
                  placeholder="Enter your message!"
                  ref={msgFeild}
               ></textarea>
               <input type="text" placeholder="From" ref={senderFeild} />
               <button onClick={handleSubmit}>Send</button>
            </div>
         </div> */}
      </div>
   );
}
