import Masonry from 'react-masonry-css'

import Card from '../components/Card'
import { Crane } from '../components/Crane'

import { response } from '../helper/data'

import { groupBy } from 'lodash'

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  700: 1,
}

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 pt-10">
      <div className="halo_body mb-8 flex w-full flex-col items-center">
        <img
          className="mb-4"
          src={'/TENKAI_HALO_WORLD.webp'}
          width={600}
          alt="halo-world"
        />
        <div className="box mb-4 flex items-center rounded-md bg-blue-500 bg-opacity-50 p-6 text-lg text-white">
          <div className="intro flex items-center pl-4">
            <img src="kanata_slep.webp" alt="kanata-slep" width={300} />
            <p className="mb-4 lg:pl-6">
              <p className="mb-4 font-bold">Hei!</p>
              <p className="mb-4">First of all, Happy Birthday Kanatan!</p>
              <p className="mb-4">
                {`Recently, us overseas Heimin have been working on a project for
                Kanata's birthday, and it's called the Halo World Project!`}
              </p>
              <p className="mb-4">
                {`
                With this project, we aimed to show how much all the Heimin from
                around the world love Kanata by sending a picture representative
                of where they live along with Kanata's merch! Each post also has
                a birthday message to Kanata, so that we could show our
                appreciation no matter where any of us live!
                  `}
              </p>
              <p>
                {`
              And we want to thank all of you Heimin who have participated!
              Thanks to all of you, we were able to get ${
                response.length
              } birthday messages
              for Kanata from ${
                Object.keys(groupBy(response, 'country')).length - 1
              } different countries around the world!`}
              </p>
            </p>
          </div>
        </div>
        <div className="intro box mb-4 flex items-center rounded-md bg-blue-500 bg-opacity-50 p-4 text-lg text-white">
          <div className="mb-4 flex items-center lg:mb-0">
            <p>
              Along with that project,
              <span className="font-bold">
                we also did a collaboration campaign with MASS!
              </span>{' '}
              With this, Heimin from around the world also folded together paper
              cranes so that we could get to 1000 to help Kanata get better
              soon! You can see all the submissions right here!
              <a
                href="https://twitter.com/hashtag/1000CranesForKanatan"
                target="_blank"
                rel="noreferrer"
                className="ml-2  items-center justify-center rounded-lg bg-blue-400 py-1 px-4"
              >
                #1000CranesForKanatan
              </a>
            </p>
          </div>
          <div className="flex h-full w-40 items-center justify-center">
            <Crane />
          </div>
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
