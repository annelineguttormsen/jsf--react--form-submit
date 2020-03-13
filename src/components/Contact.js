import React from 'react';
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required")
});

export default function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  /*function handleSubmit(event) {
    event.preventDefault();
    for (let i=0;i<event.target.elements.length;i++) {
      console.log(event.target.elements[i].name,
        event.target.elements[i].value);
    }
  }*/
  function onSubmit(data) {
		console.log("data", data);
	}

  return (
    <div className="Contact">
      <h1>Contact Page</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" placeholder="First name" ref={register({required:true})}/>
          {errors.firstName && <p>First name is required</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" placeholder="Last name" ref={register({required:true})}/>
          {errors.lastName && <p>Last name is required</p>}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}