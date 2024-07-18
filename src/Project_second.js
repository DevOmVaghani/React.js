// import Project_first from "./project_first";

import { useCallback, useState, useEffect } from "react"
import "./Styele.css"

function Project_second() {

    const [length, setlength] = useState(8)
    const [numberallowed, setnumberallowd] = useState(false)
    const [charallowed, setcharallowed] = useState(false)
    const [password, setpassword] = useState("")
    const pass = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
        if (numberallowed) {
            str += "0123456789"
        }
        if (setcharallowed) {
            str += "!@#$%^&*"
        }
        // let val=Array.length
        for (let i = 0; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setpassword(pass)
    }, [length, numberallowed, charallowed, setpassword])

    useEffect(() => {
        pass()
    }, [length, numberallowed, charallowed, pass])

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-500">
                <h1 className="text-white text-center my-3">Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="password"
                        readOnly
                    >
                    </input>
                    <button className="outline-none bg-blue-700 text-white py-0.5 shrink-0">Copy</button>
                </div>
                <div className="flex texts-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => { setlength(e.target.value) }}></input>
                        <lable>length: {length}</lable>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberallowed} id="numberinput" onChange={() => { setnumberallowd((prev) => !prev) }}></input>
                        <lable htmlFor="numberinput">Numbers</lable>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={charallowed} id="charinput" onChange={() => { setcharallowed((prev) => !prev) }}></input>
                        <lable htmlFor="charinput">Characters</lable>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project_second