import "./../styles/CheckoutUserData.css";

function CheckoutUserData (props){
  return (
    <form className='checkoutForm'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={props.phoneNumber}
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Address:
        <textarea
          name="address"
          value={props.address}
          onChange={props.handleInputChange}
        />
      </label>
      <br />
    </form>
  );
};

export default CheckoutUserData;
