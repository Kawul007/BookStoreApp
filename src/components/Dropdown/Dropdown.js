// import React, { useState } from "react";
import { Wrapper } from "./Dropdown.style";
// import ReactEcharts from "echarts-for-react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Clock from "./Clock";
export default function Dropdown() {
  return (
    <Wrapper>
      <div >
        <div id="space-holder1" type="button" value="新增注册量"><strong>新增注册量</strong></div>
        <div id="space-holder2" type="button" value="新增收藏量"><strong>新增收藏量</strong></div>
        <div id="space-holder3" type="button" value="新增浏览量"><strong>新增浏览量</strong></div>
      </div>
        
        {/* <div id="space-holder1">
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            style={{marginLeft:100,width:200}}
            options={range.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="选择查看类型" />}
          />
        </div> */}
        <div><Clock/></div>
        {/* <div id="space-holder2">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={range.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="新增收藏"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div>
        <div id="space-holder3">
          <Autocomplete
            freeSolo
            id="free-solo-3-demo"
            disableClearable
            options={range.map((option) => option.title)}
            renderInput={(params) => (
              <TextField style={{fontsize:40}}
                {...params}
                label="新增浏览"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div> */}
   
    </Wrapper>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const range = [
  { title: "本月新增浏览" },
  { title: "本月新增收藏" },
  { title: "本月新增注册" },
];

// let option1 = {
//   legend: {},
//   tooltip: {},
//   dataset: {
//     source: [
//       ["Matcha Latte", 43.3, 85.8, 93.7],
//       ["Milk Tea", 83.1, 73.4, 55.1],
//       ["Cheese Cocoa", 86.4, 65.2, 82.5],
//       ["Walnut Brownie", 72.4, 53.9, 39.1],
//     ],
//   },
//   xAxis: { type: "category" },
//   yAxis: {},
//   // Declare several bar series, each will be mapped
//   // to a column of dataset.source by default.
//   series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
// };

// function Dropdown() {
//   const [selects, setSelects] = useState();
//   return (
//     <>
//       <Wrapper>
//         <select value={selects} onChange={(e) => setSelects(e.target.value)}>
//           <option>本年新增用户</option>
//           <option>本年新增收藏</option>
//           <option>本年新增浏览</option>
//         </select>
//         {/* <div>
//            <ReactEcharts option = {option1} style={{height:500,width:1000}}></ReactEcharts>
//         </div> */}
//       </Wrapper>
//     </>
//   );
// }
// export default Dropdown;
// function Dropdown(props) {
//   const { items } = props
//   const [displayMenu, setDisplayMenu] = useState(false)
//   const [title, setTitle] = useState(props.title)
//   const showDropdownMenu = () => setDisplayMenu(!displayMenu)

//   const hideDropdownMenu = v => {
//     setDisplayMenu(false)
//     setTitle(v)
//   }

//   return (
//     <>
//     <Wrapper >
//     <div style={{ 'position': 'fixed', 'inset': '0px' }} onClick={() => setDisplayMenu(false)}></div>
//       <div className='dropdown'>
//         <div className='button' onClick={() => showDropdownMenu()}>
//           {title}
//           <div className='triangle_button'>
//             <i className='triangle'></i>
//           </div>
//         </div>
//         {
//           displayMenu && (
//             <div className='menu'>
//               {items.map((item) => (
//                 <div className={ item === title && 'active' } onClick={() => hideDropdownMenu(item)} key={item.toString()}>
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )
//         }
//       </div>
//     </Wrapper>

//     </>
//   )
// }
// Dropdown.propTypes = {
//   title: PropTypes.string,
//   items: PropTypes.array
// }

// export default Dropdown
