import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-100 w-100 flex justify-center items-center'>
      <div>
        <div className='font-bold text-white text-3xl drop-shadow-lg my-4'>
          Halo-world Demo 💫
        </div>
        <div className='bg-white rounded-xl p-4 flex flex-col justify-center drop-shadow-md'>
          <Link href="/instruction">
            <button className='mb-2 bg-blue-300 p-2 rounded-2xl text-white font-bold'>
              Instruction
            </button>
          </Link>
          <Link href="/album">
            <button className=' bg-blue-300 p-2 rounded-2xl text-white font-bold'>
              Album
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
