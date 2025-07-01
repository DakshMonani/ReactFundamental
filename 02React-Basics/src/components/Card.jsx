import React from 'react'

function Card({username,btnText = "Message"}) {
    return (
        <>
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">{username}</p>
                        <p className="font-medium text-gray-500">Product Engineer</p>
                    </div>
                    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                       {btnText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;