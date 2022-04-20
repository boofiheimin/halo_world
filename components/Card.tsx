import Flag from 'react-world-flags'
import { motion } from 'framer-motion'

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
  const { countryCode, city, country, name, imgSrc, message } = response
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="relative min-h-0" style={{ width: IMG_WIDTH }}>
        {countryCode && (
          <div
            className="absolute right-1 top-1 z-10 drop-shadow-md"
            style={{ width: IMG_WIDTH * 0.15 }}
          >
            <Flag code={countryCode}></Flag>
          </div>
        )}
        {imgSrc ? (
          <img src={imgSrc} alt="test-pic" />
        ) : (
          <div className="h-8 bg-gray-800" />
        )}
        <div className="">
          <div
            className="bg-gray-800 p-2 text-right"
            style={{ width: IMG_WIDTH }}
          >
            <div className="text-white">{message}</div>
            <div className="italic text-white">{`- ${name}`}</div>
            <div className="text-sm italic text-white">
              {`${city ? `${city}, ` : ''}${country}`}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
