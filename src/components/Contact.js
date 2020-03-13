import React from 'react';
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const { register, errors } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    for (let i=0;i<event.target.elements.length;i++) {
      console.log(event.target.elements[i].name,
        event.target.elements[i].value);
    }
  }
  return (
    <div className="Contact">
      <h1>Contact Page</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" placeholder="First name" ref={register({required:true})}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" placeholder="Last name" ref={register({required:true})}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}