import React from "react";
import "../App.css";
import {Button} from "react-bootstrap"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const Footer = () => {

  return (
    <div style={{ color:"#fff", backgroundColor: "#2e3548"}}>
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow style={{display: 'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput type="text" id="form5Example2" placeHolder="Email address" />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <Button style={{borderColor:"rgb(193, 143, 89)", borderRadius: "10px", backgroundColor:"rgb(193, 143, 89)", color: "rgb(255, 255, 255)"}}>Subscribe</Button>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{backgroundColor: "#202534", color:"#fff"}}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://re-coded.com/" style={{ textDecoration:"none", color:"#fff"}} >
          re:coded.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};
export default Footer;
