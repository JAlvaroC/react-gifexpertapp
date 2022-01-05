import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState(
        {
        data:[],
        loading:true
        });
        useEffect(() => {
            getGifs(category)
                .then(imgs=>{

                    setState({
                        data:imgs,
                        loading:false
                    });
                        /* Se quito por la animacion de aimate  */
                        // setTimeout(()=>{
                        //     console.log(imgs)
                        // console.log(imgs)
                        //     setState({
                        //         data:imgs,
                        //         loading:false
                        //     });

                        // },3000)
                    }
            );
        }, [category])

        // setTimeout(()=>{
        // setState({
        //     data:[1,2,3,4,5,6],
        //     loading:false
        // })
        // },3000);
        return state;
}
