import "bootstrap/dist/css/bootstrap.min.css";
import FoodHeading from "./components/FoodHeading";
import Foodlist from "./components/Foodlist";
import Customfood from "./components/Customfood";
import style from "./App.module.css";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState([]);
  const [healthiFood, setHealthiFood] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);

  const hendalChangeInput = (event) => {
    //console.log(event.target.value)
    setInputValue(event.target.value);
  };
  //console.log(inputValue);

  const hendalChangeClick = (event) => {
    console.log(inputValue);
    if (event.target.name == "add" && inputValue!==null) {
      let newFooditem = [...healthiFood, inputValue];
      setHealthiFood(newFooditem);
      setInputValue("");
    }else{

      setErrorMsg("Pease enter Food value")
    }
  };

  return (
    <div className={`${style.nkContainer} container`}>
      <FoodHeading></FoodHeading>
      <Customfood
        hendalChangeInput={(event) => hendalChangeInput(event)}
        hendalChangeClick={(event) => hendalChangeClick(event)}
        inputValue={inputValue}
        errorMsg={errorMsg}
      ></Customfood>
      <Foodlist healthiFood={healthiFood}></Foodlist>
    </div>
  );
}

export default App;
