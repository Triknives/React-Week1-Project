import React from "react";
import BeersOnTap from "./BeersOnTap";

var drinkStyle = {
  margin: '1vh auto',
  display:'flex',
  width: '37%',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: 'black',
  padding: '1vh',
  color: 'white',
  fontWeight:'600',
  opacity: '.8',
}


const tapList = [
 {
    brand: "Super Dry",
    size: "Pint",
    acontent: "4.9%",
    cost: "4.00USD"
 },
 {
   brand: "Sapporo Lager",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Kirin Beer",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Suntory Premium",
   size: "Pint",
   acontent: "5.5%",
   cost: "4.00USD"
 },
 {
   brand: "Kirin Ichiban",
   size: "Pint",
   acontent: "4.9%",
   cost: "5.00USD"
 },
 {
   brand: "Sapporo Nama",
   size: "Pint",
   acontent: "4.9%",
   cost: "5.00USD"
 }
];

function TapList(){

  return (
    <div style = {drinkStyle}>
      {tapList.map((beersOnTap, index) =>
        <BeersOnTap brand={beersOnTap.brand}
        size={beersOnTap.size}
        acontent={beersOnTap.acontent}
        cost={beersOnTap.cost}
        key={index}/>
      )}
    </div>
  );
}

export default TapList;
