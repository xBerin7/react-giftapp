import React,{useState} from "react";
import ReactDom from "react-dom";
import {Fragment} from "react";
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid";


const GifExpertApp = ()=>{
    const [categories,setCategories] = useState(["One Punch "])


    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                  categories.map(category=>(
                      <GifGrid key={category} category={category}/>
                  ))
                }
            </ol>
        </Fragment>
        )



}
export default GifExpertApp