const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-names">
          <div className="name-input">
            <label htmlFor="">first name</label>
            <input type="text" placeholder="enter your first name" />
          </div>
          <div className="name-input">
            <label htmlFor="">last name</label>
            <input type="text" placeholder="enter your last name" />
          </div>
        </div>
        <div className="email-input">
          <label>email</label>
          <input type="email" placeholder="yourname@gmail.com" />
        </div>
        <div className="message-input">
          <label>message</label>
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="send me a message and i will reply you as soon as possible..."
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
