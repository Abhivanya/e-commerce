import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNo: e.target.phone.value,
    };
    try {
      const response = await fetch(
        "https://movieapp-ed53d-default-rtdb.firebaseio.com/contactus.json",
        {
          method: "POST",
          body: userData,
          headers: {
            "Content-Type": "applicatin/json",
          },
        }
      );
      console.log(response);
      alert("Form submitted Succesfully");
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <h2
        className="align-self-center"
        style={{
          fontFamily: "Metal Mania",
          width: "80%",
          margin: "35px auto",
          textAlign: "center",
          fontSize: "35px",
          color: "black",
        }}
      >
        CONTACT US
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" id="name" required />
        <label>Email ID</label>
        <input name="email" required />
        <label>Phone Number</label>
        <input name="phone" required />
        <button>Submit </button>
      </form>
    </section>
  );
};

export default ContactUs;
