import { useState } from 'react'
import HandleMultipleInputs from './HandleMultipleInputs'

// function App() {
//   const [gender, setGender] = useState('')
//   return (
//     <>
//       <input
//         type="radio"
//         checked={gender === "male"}
//         onChange={() => {
//           setGender("male");
//         }}
//       />
//       <label htmlFor="male">Male</label>

//       <input
//         type="radio"
//         checked={gender === "female"}
//         onChange={() => {
//           setGender("female");
//         }}
//       />
//       <label htmlFor="female">Female</label>

//       <input
//         type="radio"
//         checked={gender === "others"}
//         onChange={() => {
//           setGender("others");
//         }}
//       />
//       <label htmlFor="others">Others</label>
     
//     </>
//   );
// }

function App(){
  return (
    <>
    <HandleMultipleInputs/>
    </>
  )
}

export default App
