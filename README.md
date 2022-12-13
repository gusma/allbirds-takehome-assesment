# AllBirds Take Home Assignment

This exercise is a take home exercise for AllBirds consisting of a validated form that can both send a request for sign up as well as a mocked failed request.

### Deliverables

Create a sign up page. The inputs are:

    First Name
    Last Name
    Phone Number
        When a user enters their phone number, it should automatically format the input to follow the pattern
        (***)***-**** as they are typing. 
    Email Address
    Password
    Password Confirmation

### Additional Considerations/Requirements

- User experience is important! We not only want to see a functional product, but also want to see your perspective on what makes a positive experience for your users.
- Add any additional validation you think is relevant for a standard signup form.
- You should use React to build this page.
- You don’t have to actually submit the form data to an API, but you should mock a success/error state once submitting the form.
- Please don’t spend more than a few hours on this assignment.

### Installation

To mount this demo, you should clone this repository, then

`npm install` in its directory

and then `npm run dev` to be able to run it.

### Online availability

This example has also been been uploaded [here](http://#) to be seen online.

### Successful requests

As per the NextJS api, successful requests return a 200 state, and are console logged on the APIs console and should be able to be viewable on your mounted version like this:

```
wait  - compiling /api/form-submission (client and server)...
event - compiled successfully in xxx ms (102 modules)
{
  firstName: 'Gustavo',
  lastName: 'Malamud',
  phone: '(333) 765-4444',
  email: 'gustavo.malamud@xxxxxxxxx.xxx',
  password: '123456',
  confirmPassword: '123456'
}

```

### Technologies used

- NextJS & React
- Various React Hooks (useState, use)
- Custom Hooks
- CSS Modules
- Yup (For form validations)
- Tailwind CSS mounted over CSS modules

### A little bit on the structure

This app was built as an SPA with certain components to avoid repetition of certain portions of code. However, some incompatibilities especially concerning classes that are foreign to the @apply structure on css modules had to be hardcoded. Nevertheless, it should be structured enough not to repeat too many pieces of code.

On the validation side, from the front-end, our form uses Yup's defined requirement structure to validate almost all informations, although phone validity is not one of its built in characteristics. However, the yup-phone module allows us to verify the validity of the numbers, and a helper function has been brought in to modify the structure of the phone number in its input field as its being typed.

For code correctness, this app also has prettier/ eslint built into it to assure proper styling and that no major errors are undertaken while produced.

#### Done by

Gustavo Malamud, on December 2022, for AllBirds. No rights reserved.
