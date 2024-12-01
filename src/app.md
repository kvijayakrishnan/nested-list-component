<!-- import React, { useEffect, useState } from 'react'



const countries = [
  {name:'India',Value:'IN',state:['tanmilnadu','kerala','andra'],cities:['Chennai','Mumbai','Kolkata']},
  {name:'Pakistan',Value:'PK',cities:['Lahor','Karachi']},
  {name:'Bangaladesh',Value:'BG',cities:['Dhaka','Dhaka']}
]
  
const App = () => {
  const [country, setCountry] =useState([])
  const [state, setState]= useState([])

  useEffect(() =>{
    console.log(country[0])
  },[country])

  return (
    <div>
      {/* 1st dropdown */}
      <select
        value={country}
        onChange={(e) => {
          setCountry([e.target.value]);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      {/* 2nd drop down */}
      <select>
       {countries[country] &&
          countries[country].cities.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
      </select>

    </div>
  )
}

export default App -->