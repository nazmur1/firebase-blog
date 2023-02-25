import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";

import { db, storage } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

import "../chapter.css";

import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Chapter = () => {

	const [customerName, setCustomerName] = useState("");
	const [customerPassword, setCustomerPassword] = useState("");

	const [customersData, setCustomersData] = useState([]);

	
	useEffect(() => {
	    
	    const unsub = onSnapshot(
	      collection(db, "customersData"),
	      (snapshot) => {
	        setCustomersData(
		    snapshot.docs.map((doc) => ({
		      id: doc.id,
		      data: doc.data(),
		    }))
		  );
	     });
		console.log({ customersData });

	    return () => {
	      unsub();
	      
	    };
	  }, []);



	const submit = async (e) => {
		e.preventDefault();
	

		await addDoc(collection(db, "customersData"), {
	      name: customerName,
		  password: customerPassword,
	    })
	    .then(() => {
	      alert('Message submitted 👍' );
	    })
	    .catch((error) => {
	      alert(error.message);
	    });

	    setCustomerName("");
		setCustomerPassword("");

	};


	return (
		
		<div className="chapter">
		<div>Chapter</div>
	      <div className="chapter__form">
	        
	        <input
	          type="text"
	          placeholder="Name"
	          value={customerName}
	          onChange={(e) => setCustomerName(e.target.value)}
	        />
	        <input
	          type="text"
	          placeholder="Password"
	          value={customerPassword}
	          onChange={(e) => setCustomerPassword(e.target.value)}
	        />
	        <button onClick={submit}>Submit</button>
	      
	      </div>
	      <br/><br/>
	      <div className="chapter__DataDisplay">
	        <table>
	          <tr>
	            <th>NAME</th>
	            <th>PASSWORD</th>
	          </tr>
	  
	          {customersData?.map(({ id, data }) => (
	            <tr key={id}>
	              <td>{data.name}</td>
	              <td>{data.password}</td>
	            </tr>
	          ))}
	        </table>
	      </div>
	    </div>
	)
}

export default Chapter