import React from "react";

const Reservation = () => {
  return (
    <div className="form_container">
      <div className="sub_form_container">
        <form action="/action_page.php">
          <h1>Reservation Form</h1>
          <hr />
          <label for="fname">Name:</label>
          <br />
          <input type="text" id="fname" name="fname" value="" />
          <br />
          <label for="lname">Email:</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <label for="lname">Mobile No:</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <label for="lname">Country:</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <label for="lname">State:</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <label for="lname">Time to Taik:</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <label for="lname">Massage:</label>
          <textarea></textarea>
          <br />
          <input className="btn1" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
