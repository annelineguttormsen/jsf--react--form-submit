import React from 'react';

export default function Contact() {

  function handleSubmit(event) {
    // stop the form from submitting
    event.preventDefault();

    // log out the event object
    console.log(event);
    // log out the elements from the page
    console.log(event.target.elements);
    // log out the name of each element and the value of each element
    for (let i = 0; i < event.target.elements.length; i++) {
      const element = event.target.elements[i];
      console.log(element.name, element.value);
    }
  }

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