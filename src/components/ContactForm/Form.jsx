import React, { useState } from 'react'
import styles from "./Form.module.css";
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi"

const Form = () => {
  const [name,setName] = useState("");
  const[email,setEmail]= useState("");
  const[text , setText] = useState("");
  // let name = "palak";
  // let email = 'saxenapalak@gmail.com';
  // let text = " hello plz subscribe my channel";

  const  OnSubmit= (event)=>{
    event.preventDefault();
    // console.log(event);


    setName(event.target[0].value);
    setEmail( event.target[1].value);
    setText (event.target[2].value);
    
    // console.log({
    //   name,
    //   email,
    //   text
    // })
    
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
        <Button text= " VIA SUPPORT CHAT" icon ={<MdMessage fontSize="24px" />} />
         <Button  
         text= " VIA CALL" icon ={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
        isOutLine={true}
         text= " VIA EMAIL FORM" icon ={<HiMail fontSize="24px" />} />
         <form onSubmit={OnSubmit}>
          <div className={styles.form_control}>
          <label htmlFor='name'> Name</label>
          <input type='text' name='Name' />
          </div>
          <div className={styles.form_control}>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
          </div>
          <div className={styles.form_control}>
          <label htmlFor='text'>Text</label>
          < textarea name='text' rows="5"/>
          </div>
          <div style={{
            display: "flex",
            justifyContent : "end"
          }}>
          <Button text="Submit Button" />

            </div>
            <div>
              {name + " " + email + " " + text}
            </div>
          
          
         </form>

        </div>
        <div className={styles.contact_image}>
          <img src='/images/contact.avif' alt='contact Image'  style={{width:"550px"}}/>
        </div>

    </section>
  );
};

export default Form;