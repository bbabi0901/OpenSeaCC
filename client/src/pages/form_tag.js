// const LoginForm1 = () => {
//     const [values, setValues] = useState({
//       email: "",
//       password: "",
//     })
  
//     const handleChange = e => {
//       setValues({
//         ...values,
//         [e.target.name]: e.target.value,
//       })
//     }
  
//     const handleSubmit = e => {
//       e.preventDefault()
//       alert(JSON.stringify(values, null, 2))
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         />
//         <button type="submit">로그인</button>
//       </form>
//     )
//   }
import React, { useState } from 'react';
import axios from 'axios';

function Hotels() {
  const [hotelName, setHotelName] = useState(null);
  
  const handleSearch = (e) => {
    setHotelName(e.value);
    
    fetchHotelName();
    };
  };

  const fetchHotelName = async() => {
    const response = await axios('http://localhost:3001/text', {
      name: hotelName
    });
    console.log(response.data);
    // data속에 담겨져 나온다.
  };

  return (
    <div>
      <h1>호텔 검색</h1>
      <select id="hotels-select" onClick={handleSearch}>
        <option value="호텔1" selected>
          호텔1
        </option>
        <option value="호텔2">호텔2</option>
        <option value="호텔3">호텔3</option>
      </select>
      <button id="hotels-search">검색</button>
    </div>
  );


export default Hotels;