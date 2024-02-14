import Listitem from "./Listitem";
import style from "./Foodlist.module.css";
import Message from "./Message";
import { useState } from "react";
const Foodlist = ({ healthiFood }) => {
let [activeFood,setActiveFood] = useState([]);

const hendlefoodclick = (event,item)=>{
  console.log(event.target.name);
  if(event.target.name== 'Buy'){
    let newArr = [...activeFood,item];
    setActiveFood(newArr);
  }else if(event.target.name== 'remove') {
    let newArr1 = activeFood.filter(item1 => item1!==item);
    setActiveFood(newArr1);
  } 
}
//console.log(activeFood);
  return (
    <ul className={`${style.foodGroup} list-group`}>
      {healthiFood.length === 0 ? <Message></Message> : null}
      {healthiFood.map((item) => (
        <Listitem
          key={item}
          healthiFood={item}
          active={activeFood.includes(item)}
          getfooditem={(event) => hendlefoodclick(event,item)}
        ></Listitem>
      ))}
    </ul>
  );
};
export default Foodlist;
