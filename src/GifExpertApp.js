import React ,{useState}from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
 export  const GifExpertApp=()=>{
    // const catergories=['One punch ','Samurai X','Drago Ball ']
    const [catergories, setcatergories] = useState(['One punch '])
    // const handleAdd=()=>{
    //     // catergories.push('HunterXHunter')s
    //     // setcatergories('HunterXHunter',...catergories);
    //     setcatergories(cats=>[...cats,'HunterXHunter']);
    //     console.log(catergories)
    // }
    return (
        <>
        <h2>GifExpertApp</h2>
        < AddCategory setcatergories={setcatergories}/>
                    <hr/>
        {/* <button onClick={handleAdd}>Agregar</button> */}
        {/* {
            catergories
        } */}
        <ol>
            {
            catergories.map(category=>(
                <GifGrid 
                key={category}
                category={category}
                />
            )
            )};

        </ol>
        </>
    ) };
// export default GifExpertApp;
//rafc atajo