import React, { useState } from 'react';

function Form() {
  const [product, setProduct] = useState({
    name: "",
    email: "",
    phone: "",
    messenger: "",
  });
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkMessenger, setCheckMessenger] = useState(false);
  const [checkRegexEmail, setCheckRegexEmail] = useState(false);
  const [checkRegexPhone, setCheckRegexPhone] = useState(false);


  const { name, email, phone, messenger } = product;

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleContactUsSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setCheckName(true);
    } else {
      setCheckName(false);
      setProduct({ ...product, name: name });
    }

    if (!messenger) {
      setCheckMessenger(true);
    } else {
      setCheckMessenger(false);
      setProduct({ ...product, messenger: messenger });
    }

    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!email) {
      setCheckEmail(true);
      setCheckRegexEmail(false);
    } else if (!emailFilter.test(email)) {
      setCheckEmail(false);
      setCheckRegexEmail(true);
    } else {
      setCheckEmail(false);
      setCheckRegexEmail(false);
      setProduct({ ...product, email: email });
    }

    var phoneFilter = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!phone) {
      setCheckPhone(true);
      setCheckRegexPhone(false);
    } else if (!phoneFilter.test(phone)) {
      setCheckPhone(false);
      setCheckRegexPhone(true);
    } else {
      setCheckPhone(false);
      setCheckRegexPhone(false);
      setProduct({ ...product, phone: phone });
    }
  };

  return (
    <div>
      <h2>Liên hệ</h2>
      <hr />
      <form onSubmit={handleContactUsSubmit}>
        <label htmlFor="name">
          Tên:
          <input type="text" name="name" id="name" value={name} onChange={handleChangeValue} /><br />
          <span style={{ color: "red", display: checkName ? 'block' : 'none' }}>Không được để trống!</span>
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" value={email} onChange={handleChangeValue} /><br />
          <span style={{ color: "red", display: checkEmail ? 'block' : 'none' }}>Không được để trống!</span>
          <span style={{ color: "red", display: checkRegexEmail ? 'block' : 'none' }}>Không đúng định dạng email!</span>
        </label>
        <br />
        <label htmlFor="phone">
          Điện thoại:
          <input type="text" name="phone" id="phone" value={phone} onChange={handleChangeValue} /><br />
          <span style={{ color: "red", display: checkPhone ? 'block' : 'none' }}>Không được để trống!</span>
          <span style={{ color: "red", display: checkRegexPhone ? 'block' : 'none' }}>Không đúng định dạng số điện thoại!</span>
        </label>
        <br />
        <label htmlFor="messenger">Tin nhắn:</label>
        <textarea name="messenger" id="messenger" cols="30" rows="10" value={messenger} onChange={handleChangeValue}></textarea><br />
        <span style={{ color: "red", display: checkMessenger ? 'block' : 'none' }}>Không được để trống!</span>
        <br />
        <button type="submit">Gửi</button>
      </form>
      <h3>Thông tin đã nhập đúng:</h3>
      <p>Tên: {name}</p>
      <p>Email: {email}</p>
      <p>Điện thoại: {phone}</p>
      <p>Tin nhắn: {messenger}</p>
    </div>
  );
}

export default Form;
