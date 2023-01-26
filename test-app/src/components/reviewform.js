import React from 'react';

export default class ReviewForm extends React.Component {

    render() {
    return (
        <div>
        <h3>Review Form</h3>
   <label htmlFor="fname">First Name:</label>
  <input type="text" id="fname" name="fname"/>
  <label htmlFor="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/>
</div>

)
}
}