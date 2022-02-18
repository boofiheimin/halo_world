import { useState } from "react";
import Image from "next/image";
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';

const IMG_WIDTH = 300;

const Card = ({ imgSrc }: { imgSrc: string}) => {
    const [paddingTop, setPaddingTop] = useState('0');
    return (
        <motion.div
            whileHover={{scale: 1.05}}
        >
            <div className="relative min-h-0" style={{width: IMG_WIDTH}}>
                <div className="absolute right-1 top-1 z-10 drop-shadow-md" style={{width: IMG_WIDTH*0.15}}>
                    <Flag code="GBR"></Flag>
                </div>
                <div className="relative" style={{ paddingTop }} >
                    <Image src={imgSrc} alt="test-pic" layout="fill" objectFit="contain" onLoad={({target}) => {
                        const { naturalWidth, naturalHeight } = target as HTMLImageElement;
                        setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
                    }}/>
                </div>
                <div className="">
                    <div className="bg-gray-800 p-2 text-right" style={{width: IMG_WIDTH}}>
                        <div className="text-white">
                            Happy Birthday Kanatan 💫
                        </div>
                        <div className="text-white italic">
                            - @demo_man
                        </div>
                        <div className="text-sm text-white italic">
                            London, United Kingdom
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default Card;