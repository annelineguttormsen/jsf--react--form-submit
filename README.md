# React routing

Add the Contact component to the navigation.  Then update the component to handle the form submit event.  When hnadling the event, simply log out various information about that form that was submitted.  In the example look in the console to see this.

## Example

[The example is here](https://jsf-react-form-submit.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task Steps

### Add Contact to navigation

1. The basic Contact component has been create already in the compenents folder.
2. You need to:
3. Import it into the App component
4. Add a link to it in the navigation
5. Add a Route for it in the Switch component

### Handle the form submission

1. In the Contact component create a function that will handle the submission.  Add the function inside the component function, on a new line before the `return` statement.  Name the function `handleSubmit`.  The function should take in one parameter called `event` which will be the event object as with standard JS.
2. To hook up the submit handler sinple add an attribute to the `form` element called `onSubmit`.  Set the value to the name of the handle function.  Because we are referring to a JavaScript function and not a string the value must be surrounded with `{}` i.e. `onSubmit={handleSubmit}`.
3. Now when the form is submitted the handler will run.

### Log out event details

1. Inside the handler function, first add `event.preventDefault()` to stop the form from submitting.
2. Then log out "Form submitted" to test that it is hooked up correctly.
3. Next log out:
4. The event object
5. event.target.elements to see the list of form fields.
6. Then use a for loop (not forEach()), to loop through the elements and log out the `name` and `value` of each element.

### Bootstrap forms and form validation

1. Follow the instructions from Moodle that will walk you through:
2. converting the form to use bootstrap styling
3. Adding validation using `react-form-hook` and `Yup`.
4. The instructions are here: https://interactive-content.now.sh/js-frameworks/3/4

