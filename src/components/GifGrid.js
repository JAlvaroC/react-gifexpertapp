import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category])
 
   // getGifs();

   const {data:images,loading}=useFetchGifs(category);
   
     return (
        <>
            <h3>{category}</h3>
            {/* {loading?<p>loading</p>:null} */}
            {/* otra forma */}

            {loading&&<p className='animate__animated animate__flash'>loading</p>}
         <div className='card-grid'>
        
            {
                images.map(img=>(
                
                    <GifGridItem
                    key={img.id} 
                    // img={img}
                    {...img}
                     
                     />
                ))
     
            }
        

        </div>
        
        </>

        )
    }