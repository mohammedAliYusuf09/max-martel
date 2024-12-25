import React from 'react'
import { FaStar } from "react-icons/fa";

function TestimonialCardMobile({bagColler, starsColler, textColler, testimoni, name, borderCol}) {
    return (
        <div className={`${bagColler} w-72 h-[320px] p-3 flex flex-col justify-around gap-2 rounded-lg`}>
            <div className={`flex gap-2 ${starsColler}`}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
            <p className={`${textColler} text-sm font-karla`}>{testimoni}</p>
            <div className={`h-[1px] w-full bg-black ${borderCol}`}></div>
            <h4 className={`text-lg font-karla ${textColler} font-bold`}>{name}</h4>
        </div>
      )
}

export default TestimonialCardMobile