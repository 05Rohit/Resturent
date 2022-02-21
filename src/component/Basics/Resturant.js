import React,{useState} from 'react';
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


// to find the unique data...i.e  all data in their respected data.
//this method was introduced in the ECMA script 2019


const uniqueList =[


       // to extract the data in the array form we use spread operator and symbol of  this is tripple dot " ... " if we not use these spread operator the we get data in the form of object
     ...new Set(                         
        Menu.map((curElem)=>
        {
            return curElem.category;
        })
    ),
    "All"
    ];
    console.log(uniqueList);

 const Resturant = () => {

     const [menuData, setMenuData] = useState(Menu);
     const [menuList,setMenuList]=useState(uniqueList);

     const filterItem = (category) =>{
         if(category==="All"){
             setMenuData(Menu);
             return;
         }
         const updatedList=Menu.filter((curElem)=>
         {
             return curElem.category===category;
         });
         setMenuData(updatedList);
     };
    return (
        <>
         <Navbar  filterItem={filterItem} menuList={menuList} />
         <MenuCard menuData={menuData} />

    
        </>
    );
   
};

export default Resturant;
