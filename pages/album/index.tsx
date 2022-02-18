import Card from "../../components/Card"
import Masonry from "react-masonry-css";

import { yoshi_sampler } from "../../helper/sampler"

const sampleYoshi = yoshi_sampler(100);

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
}

const Album = () => {
    return (
        <div className="flex flex-col items-center pt-10 p-2">
            <div className="w-full max-w-xl mb-8">
                <div className='text-center font-bold text-white drop-shadow-xl text-3xl p-2' >
                    HALO WORLD PROJECT 💫
                </div>
                <div className="text-center text-white italic">
                    collected from heimin all over the world to celebrate Amane Kanata Birthday!
                </div>
            </div>
            <div className="w-full h-full flex justify-center">
                <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                    {
                        sampleYoshi.map((imgSrc, i) => (<Card imgSrc={imgSrc} key={`${i}_${imgSrc}`} />))
                    }
                </Masonry>
            </div>
        </div>    
    )
}


export default Album