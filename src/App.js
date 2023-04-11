import logo from "./logo.svg";

import { useState, useEffect } from "react";
import styled from "styled-components";
import mockdata from "./mockdata";
import { NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

function App() {
  const [tab, setTab] = useState(1);
  function activeTab(tabnumber) {
    setTab(tabnumber);
  }
  const mobiles = mockdata.filter((items) => items.item === "Mobile");
  const shirts = mockdata.filter((items) => items.item === "Shirt");
  const pants = mockdata.filter((items) => items.item === "Pant");
  const data = tab === 1 ? mobiles : tab === 2 ? shirts : pants;
  return (
    <div className="App">
      <div className="category">
        <Button
          style={{ borderBottom: tab === 1 ? "5px solid yellow" : "" }}
          onClick={() => activeTab(1)}
        >
          Mobile
        </Button>
        <Button
          style={{ borderBottom: tab === 2 ? "5px solid yellow" : "" }}
          onClick={() => activeTab(2)}
        >
          Shirts
        </Button>
        <Button
          style={{ borderBottom: tab === 3 ? "5px solid yellow" : "" }}
          onClick={() => activeTab(3)}
        >
          Pants
        </Button>
      </div>
      <div className="items-container">
        <ul>
          {data &&
            data.map((pro, index) => (
              <li key={index}>
                <NavLink
                  style={{color:'black',fontStyle:'italic',textDecoration: 'none'
                  }}
                  to={`/${pro.item}/${pro.id}/${pro.description}`}
                >
                  {pro.description}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: skyblue;
`;

export default App;
