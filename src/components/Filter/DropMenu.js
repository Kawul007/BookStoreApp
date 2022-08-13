// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import * as React from 'react';
// import { Wrapper } from './Filter.style';

// // const DropMenu = () => {
// //   const [value, setValue] = React.useState('user');

// //   const handleChange = (event) => {
// //     setValue(event.target.value);
// //   };

// //   return (
// //     <Wrapper>
// //       <div id='all-user'>
// //       <label>
// //         <select value={value} onChange={handleChange}>
// //           <option value="user">Fruit</option>
// //           <option value="vegetable">Vegetable</option>
// //           <option value="meat">Meat</option>
// //         </select>
// //       </label>
// //     </div>
// //     <div id='all-collect'>
// //     <label>
// //       <select value={value} onChange={handleChange}>
// //         <option value="fruit">Fruit</option>
// //         <option value="vegetable">Vegetable</option>
// //         <option value="meat">Meat</option>
// //       </select>
// //     </label>
// //   </div>
// //   <div id='all-visit'>
// //   <label>
// //     <select value={value} onChange={handleChange}>
// //       <option value="fruit">Fruit</option>
// //       <option value="vegetable">Vegetable</option>
// //       <option value="meat">Meat</option>
// //     </select>
// //   </label>
// // </div>
// //     </Wrapper>
// //   );
// // };

// const DropMenu = () => {
//   const options = [
//     { label: 'Fruit', value: 'fruit' },
//     { label: 'Vegetable', value: 'vegetable' },
//     { label: 'Meat', value: 'meat' },
//   ];

//   const [value, setValue] = React.useState('fruit');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         <select value={value} onChange={handleChange}>
//           {options.map((option) => (
//             <option value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       </label>

//       {/* <p>We eat {value}!</p> */}
//     </div>
//   );
// };

// export default DropMenu;

