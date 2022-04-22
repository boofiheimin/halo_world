import Flag from 'react-world-flags'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const IMG_WIDTH = 300

interface Response {
  name: string
  message: string
  imgSrc: string
  country: string
  countryCode: string
  city: string
}

const Card = ({ response }: { response: Response }) => {
  const [imageHeight, setImageHeight] = useState(0)
  const { countryCode, city, country, name, imgSrc, message } = response
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="box relative min-h-0 rounded-md bg-gray-800 bg-opacity-50"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {countryCode && (
          <div
            className="absolute right-1 top-1 z-10 drop-shadow-md"
            style={{ width: IMG_WIDTH * 0.15 }}
          >
            <Flag code={countryCode}></Flag>
          </div>
        )}
        {imgSrc ? (
          <div
            style={{
              position: 'relative',
              width: IMG_WIDTH,
              height: `${imageHeight}px`
            }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={imgSrc}
              alt={`${name}'s picture`}
              onLoad={({ target }) => {
                const { naturalWidth, naturalHeight } =
                  target as HTMLImageElement
                setImageHeight(IMG_WIDTH/(naturalWidth/naturalHeight))
              }}
            />
          </div>
        ) : (
          <div className="flag_placeholder" />
        )}
        <div className="p-2 text-right" style={{ width: IMG_WIDTH }}>
          <div className="text-white">{message}</div>
          <div className="italic text-white">{`- ${name}`}</div>
          <div className="text-sm italic text-white">
            {`${city ? `${city}` : ''}${city && country !== '-' ? ', ' : ''}${
              country !== '-' ? country : ''
            }`}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
