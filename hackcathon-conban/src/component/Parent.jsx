import React from "react";
import "./Style.css";
import Form from "./Form";
import Render from "./Render";
function Parent() {
  return (
    <div className="container"> 
      <div className="contactInfo">
      <Render></Render>
      </div>
      <div className="contactUs">
        <Form ></Form>
      </div>
    </div>
  );
}

export default Parent;
