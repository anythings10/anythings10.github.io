import{r as s,j as e,d as f}from"./index-JVZqYOsO.js";import{T as c}from"./Components-slKsvsal.js";import{F as p}from"./HeartIcon-xxZhP6qV.js";function j({title:t,titleId:a,...r},l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,s.createElement("path",{d:"M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z"}))}const w=s.forwardRef(j),o=s.createContext(),b={beritaDummy:f,selectedNews:null},N=(t,a)=>{switch(a.type){case"READ_NEWS":return{...t,selectedNews:a.payload};default:return t}},E=({children:t})=>{const[a,r]=s.useReducer(N,b),l=s.useMemo(()=>({state:a,dispatch:r}),[a]);return e.jsx(o.Provider,{value:l,children:t})},v=()=>s.useContext(o),R=({item:t,onOpenModal:a})=>{const{name:r,desc:l,image:i,date:d}=t,{dispatch:m}=v(),[n,x]=s.useState(!1),u=()=>{m({type:"READ_NEWS",payload:t}),a()},h=()=>{x(!n)};return e.jsxs("div",{className:"bg-white rounded shadow-md p-4 flex flex-col h-full border border-gray-200 space-y-3",children:[e.jsx("header",{className:"flex items-center mb-2",children:e.jsxs("div",{children:[e.jsx(c,{variant:"h5",child:r,className:"font-bold line-clamp-1"}),e.jsx(c,{variant:"kecil",child:d,className:"font-thin text-gray-600"})]})}),e.jsxs("section",{className:"flex-grow",children:[e.jsx("img",{src:i,alt:"BERITA",className:"w-full h-52 object-cover rounded-md"}),e.jsx(c,{variant:"kecil",child:l,className:"my-3 font-thin line-clamp-2"})]}),e.jsxs("footer",{className:"mt-auto flex items-center justify-between",children:[e.jsx("button",{onClick:u,className:"uppercase font-bold text-sm text-blue-700 hover:underline",children:"Baca Berita"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{onClick:h,children:e.jsx(p,{className:`w-5 h-5 ${n?"text-red-500":"text-gray-400"}`})}),e.jsx("button",{children:e.jsx(w,{className:"w-5 h-5 text-gray-600"})})]})]})]})};export{R as B,E as a,v as u};
