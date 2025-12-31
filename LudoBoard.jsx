import { useState } from 'react';
export default function LudoBoard(){
    let[moves,setMoves] = useState({
        blue:0,
        red:0,
        green:0,
        yellow:0
    });

    function updateBlue(){
        moves.blue += 1;
        setMoves({...moves});
    }
    function updateRed(){
        moves.red += 1;
        setMoves({...moves});
    }
    function updateGreen(){
        moves.green += 1;
        setMoves({...moves});
    }
    function updateYellow(){
        moves.yellow += 1;
        setMoves({...moves});
    }
    return (
        <>
        <div>
            <p> Blue moves :{moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        </div>
        <div>
            <p> red moves :{moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
        <div>
            <p> green moves :{moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        </div>
        <div>
            <p> yellow moves :{moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
        </div>
        </>        
    );
}