import React from 'react'

const Agence = () => {
    return (
        <div className='parent'>
            <div id='page1' className='py-1 '>
                <div className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
                    <img className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div> 
                <div className='relative font-[font2]'>
                    <div className='lg:mt-[55vh] mt-[30vh]'>
                        <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
                            Douze</h1>
                    </div>
                    <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                        <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                    </div>
                </div>
            </div>
            <div id='page2' className=" h-screen">

            </div>
        </div>
    )
}

export default Agence