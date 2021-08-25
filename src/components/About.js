import React from "react";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
  
  return (
    <div style={{ display: 'flex', minHeight: "75vh", alignItems: "center",  justifyContent: 'center'}}>
      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style = {{ textAlign: "center", fontWeight: "bold"}}>Developed By:</h1>
        <h4 style = {{ textAlign: "center", fontWeight: "bold"}}>Moulham Hallak <a href="https://github.com/MoulhamHallak" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub></a> </h4>
        <h4 style = {{ textAlign: "center", fontWeight: "bold"}}>Kutay Kağan Özen <a href="https://github.com/Iseluin" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub></a></h4>
      </div>
    </div>
  );
};

export default About;
