import React from 'react'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757095767~exp=1757099367~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=81bbcff826b21a285b39df94d1133e8a9cfdbb35f0de6049b2f1c890d6b8210a&r=dXMtd2VzdDE%3D"></video>
        </div>
    )
}

export default Video
