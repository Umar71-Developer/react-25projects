import { useEffect, useState } from "react"

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState("#000")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateHexColor() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
    }

    function handleCreatRgbColor() {
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);
        let b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreatRgbColor()
        else handleCreateHexColor()
    },[typeOfColor])

    return <div style={{
        width: '100%',
        height: '100vh',
        background: color
    }} >

        <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreatRgbColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection : 'column',
            gap : '20px'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}