import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";


export const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/MainBoard");
  }

  return (
    <div
      style={{
        minHeight: "75vh",
      }}
    >
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://martech.org/wp-content/ml-loads/2014/10/businessman-businesswoman-cmo-ss-1920.jpg'
            alt="First slide"
            style={{

            }}
          />
          <Carousel.Caption style={{ color: "#fff" }}>
            <div
              style={{
                width: "100%",
                border: "1px solid rgba(32, 37, 52, 0.3)",
                backgroundColor: "rgba(32, 37, 52 , 0.5)",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h2>Welcome To The Warehouse Management System</h2>
              <p>Your Way To Manage Your Shipments Easily</p>
              <Button
                onClick={handleClick}
                style={{
                  borderColor: "rgb(193, 143, 89)",
                  borderRadius: "10px",
                  backgroundColor: "rgb(193, 143, 89)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Go to the Board
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/2053114.jpg"
            alt="Second slide"
            style={{
   
            }}
          />
          <Carousel.Caption style={{ color: "#fff" }}>
            <div
              style={{
                border: "1px solid rgba(32, 37, 52, 0.3)",
                backgroundColor: "rgba(32, 37, 52 , 0.5)",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h2>Welcome to the Warehouse Management System</h2>
              <p>Track and Satisfy Your Clients</p>
              <Button
                onClick={handleClick}
                style={{
                  borderColor: "rgb(193, 143, 89)",
                  borderRadius: "10px",
                  backgroundColor: "rgb(193, 143, 89)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Go to the Board
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
