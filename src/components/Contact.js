import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input name="firstName" placeholder="First name" />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" placeholder="Last Name" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}