import React, { useState, useEffect } from "react";

function SampleUseEffect() {
    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);

    useEffect(() => {
        console.log("useEffect called");
        console.log("Counter: " + counter);
        console.log("Pointer: " + pointer);
    }, [counter, pointer]);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decreasePointer() {
        setPointer(pointer - 5);
    }

    return (
        <div>
            <p style={{ color: "brown" }}>
                Counter: {counter}
            </p>

            <button onClick={incrementCounter}>
                Increment Counter
            </button>

            <p>Pointer: {pointer}</p>

            <button onClick={decreasePointer}>
                Decrease Pointer
            </button>
        </div>
    );
}

export default SampleUseEffect;