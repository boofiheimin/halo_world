import Card from '../components/Card'
import Masonry from 'react-masonry-css'

import { response } from '../helper/data'
import { useState } from 'react'

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  700: 1,
}

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 pt-10">
      <div className="mb-8 w-full max-w-xl">
        <div className="p-2 text-center text-3xl font-bold text-white drop-shadow-xl">
          HALO WORLD PROJECT 💫
        </div>
        <div className="text-center italic text-white">
          collected from heimin all over the world to celebrate Amane Kanata
          Birthday!
        </div>
      </div>
      <div className="flex h-full w-full justify-center">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {response.map((response, i) => (
            <Card response={response} key={`${i}_${response.name}`} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}
