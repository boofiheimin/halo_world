import Image from 'next/image'

const Instruction = () => {
    return (
        <div className="flex justify-center pt-10 p-2">
            <div className="w-full max-w-md">
                <div className='text-center font-bold text-white drop-shadow-xl text-3xl p-2' >
                    Instruction
                </div>
                <div className="bg-white rounded-xl">
                    <div className="p-4 text-center">
                        Insert participation instruction here.
                    </div>
                    <div className='p-4 italic' >
                       #image for props shuriken instruction. (pending) 
                    </div>
                    <Image src="https://i.pinimg.com/736x/b3/d4/47/b3d44728d3369b1b5f9a30de9973fa5d.jpg" height={652} width={570} alt="origami" />
                </div>
                <div className='flex justify-center p-8'>
                    <button className='bg-blue-600 text-white rounded-xl text-xl p-4 font-bold drop-shadow-sm'>
                        Join now!
                    </button>
                </div>
            </div>
        </div>    
    )
}



export default Instruction

