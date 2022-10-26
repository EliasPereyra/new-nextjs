import React from "react";
import Navbar from "../components/Navbar";

function contact() {
  return (
    <section>
      <Navbar />
      <h1>Contact</h1>
      <form>
        <label>Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Message</label>
        <textarea />
        <button>Send</button>
      </form>
    </section>
  );
}

export default contact;
