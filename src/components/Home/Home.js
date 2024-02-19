import React, { useState } from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
// import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const Home = () => {
  const navigate = useNavigate();

  const [numberOfElders, setNumberOfElders] = useState();
  const [snacksElder, setSnacksElder] = useState("");
  const [drinksElder, setDrinksElder] = useState("");
  const [totalItemElder, setTotalItemElder] = useState();

  const [numberOfChild, setNumberOfChild] = useState();
  const [snacksChildren, setSnacksChildren] = useState("");
  const [drinksChildren, setDrinksChildren] = useState("");
  const [totalItemChildren, setTotalItemChildren] = useState();

  const [visible, setVisible] = useState(false);

  // console.log("numberOfElders", numberOfElders);
  // console.log("snacksElder", snacksElder);
  // console.log("drinksElder", drinksElder);
  // console.log("totalItemElder", totalItemElder);
  // console.log("numberOfChild", numberOfChild);
  // console.log("snacksChildren", snacksChildren);
  // console.log("drinksChildren", drinksChildren);
  // console.log("totalItemChildren", totalItemChildren);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createOrder", {
        numberOfElders,
        snacksElder,
        drinksElder,
        totalItemElder,
        numberOfChild,
        snacksChildren,
        drinksChildren,
        totalItemChildren,
      })
      .then((result) => {
        console.log(result);
        navigate("/menu");
      })
      .catch((err) => console.log(err));
  };

  // const popup = document.getElementById("popup");

  // function openPopup(){
  //      popup.classList.add("open-popup")
  // }
  // function closePopup(){
  //      popup.classList.remove("open-popup")
  // }

  return (
      <div>
        {/* <marquee direction="right">Select your delicious snack here</marquee> */}
        <div className="background">
          {/* <div className="scrolling"> */}
          <marquee direction="right">
            <h4>Select your delicious snack here</h4>
          </marquee>
          {/* </div> */}

          <form className="formdata">
            <label className="m-3 p-4">
              <h5>Elders</h5>
              {/* <input
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              /> */}
              <select
                style={{ width: 200}}
                className="form-control"
                type="dropdown"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Snacks</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="dropdown"
                name="snacks"
                onChange={(e) => setSnacksElder(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chats">Chats</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Drinks</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="dropdown"
                name="drinks"
                onChange={(e) => setDrinksElder(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Coffe">Coffe</option>
                <option value="Tea">Tea</option>
                <option value="Cool drink">Cool drink</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Item count</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="number"
                name="itemcount"
                onChange={(e) => setTotalItemElder(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <div>
              <h4>Selected data:</h4>
              <p>Elder: {numberOfElders}</p>
              <p>Snacks: {snacksElder}</p>
              <p>Drinks: {drinksElder}</p>
              <p>Item Count: {totalItemElder}</p>
            </div>
            {/* <Link to='/menu' type="button" className="btn btn-success">Submit</Link> */}
          </form>

          <form className="formdata">
            <label className="m-3 p-4">
              <h5>Childrens</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="number"
                name="elders"
                onChange={(e) => setNumberOfChild(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Snacks</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="dropdown"
                name="snacks"
                onChange={(e) => setSnacksChildren(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chats">Chats</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Drinks</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="dropdown"
                name="drinks"
                onChange={(e) => setDrinksChildren(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Coffe">Coffe</option>
                <option value="Tea">Tea</option>
                <option value="Cool drink">Cool drink</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Item count</h5>
              <select
                style={{ width: 200}}
                className="form-control"
                type="number"
                name="itemcount"
                onChange={(e) => setTotalItemChildren(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <div>
              <h4>Selected data</h4>
              <p>Children: {numberOfChild}</p>
              <p>Snacks: {snacksChildren}</p>
              <p>Drinks: {drinksChildren}</p>
              <p>Item Count: {totalItemChildren}</p>
            </div>
            {/* <button onClick={Submit} type="button" className="btn btn-success">
              Submit
            </button> */}
            {/* <Link to='/menu' type="button" className="btn btn-success">Submit</Link> */}
          </form>

          <div>
            <button type="submit" class="btn btn-success" onClick={() => setVisible(true)}>
              Submit
            </button>
            <Modal
              isOpen={visible}
              onRequestClose={() => setVisible(false)}
              style={{
                overlay: {
                  position: "fixed",
                  zIndex: 1020,
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(255, 255, 255, 0.75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                content: {
                  background: "white",
                  width: "45rem",
                  maxWidth: "calc(100vw - 2rem)",
                  maxHeight: "calc(100vh - 2rem)",
                  overflowY: "auto",
                  position: "relative",
                  border: "1px solid #ccc",
                  borderRadius: "0.3rem",
                },
              }}
            >
              <h1>Success</h1>
              <p>
                Your Order has been submitted! <br />
                Thank you.{" "}
              </p>
              <button type="button" class="btn btn-success" onClick={() => setVisible(false)}>
                OK
              </button>
            </Modal>
          </div>
        </div>
      </div>
  
  );
};

export default Home;
