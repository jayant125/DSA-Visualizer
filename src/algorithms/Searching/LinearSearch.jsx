import React, { useState, useEffect } from "react";

const LinearSearch = () => {
    const [arr, setArr] = useState([]);
    const [target, setTarget] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [result, setResult] = useState(null);
    const [count, setCount] = useState(0);
    const [searching, setSearching] = useState(false);
    const [speed, setSpeed] = useState(500);
    const [error, setError] = useState("");

    // Generate initial array
    useEffect(() => {
        generateArray();
    }, []);

    const generateArray = () => {
        const newArray = Array.from({ length: 10 }, () =>
            Math.floor(Math.random() * 50) + 1
        );
        setArr(newArray);
        resetSearch();
    };

    const resetSearch = () => {
        setCurrentIndex(-1);
        setResult(null);
        setCount(0);
        setSearching(false);
        setError("");
    };

    const linearSearch = async () => {
        if (!arr.length || !target) {
            setError("Please generate array and enter a target value");
            return;
        }
        if (isNaN(target)) {
            setError("Please enter a valid number");
            return;
        }

        setSearching(true);
        setError("");
        let steps = 0;
        const targetNum = Number(target);

        for (let i = 0; i < arr.length; i++) {
            steps++;
            setCurrentIndex(i);
            setCount(steps);

            await new Promise(resolve => setTimeout(resolve, speed));

            if (arr[i] === targetNum) {
                setResult(i);
                setSearching(false);
                return;
            }
        }

        setResult(-1);
        setSearching(false);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Linear Search Visualization
            </h1>

            {/* Controls */}
            <div className="mb-6 flex flex-wrap gap-4 justify-center items-center">
                <button
                    onClick={generateArray}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    disabled={searching}
                >
                    Generate New Array
                </button>

                <input
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="border p-2 rounded w-32"
                    placeholder="Enter target"
                    disabled={searching}
                />

                <button
                    onClick={linearSearch}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={searching}
                >
                    {searching ? "Searching..." : "Start Search"}
                </button>

                <button
                    onClick={resetSearch}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    disabled={searching}
                >
                    Reset
                </button>

                <div className="flex items-center gap-2">
                    <label>Speed:</label>
                    <input
                        type="range"
                        min="100"
                        max="2000"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        className="w-32"
                    />
                    <span>{2000 - speed + 100}ms</span>
                </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Array Visualization */}
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {arr.map((num, index) => (
                    <div
                        key={index}
                        className={`w-12 h-12 flex items-center justify-center rounded
                            ${index === currentIndex ? "bg-yellow-400" : "bg-gray-200"}
                            ${result === index ? "bg-green-400" : ""}
                            transition-colors duration-300`}
                    >
                        {num}
                    </div>
                ))}
            </div>

            {/* Complexity & Info */}
            <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Time Complexity</h3>
                    <p>O(n)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Space Complexity</h3>
                    <p>O(1)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Steps Taken</h3>
                    <p>{count}</p>
                </div>
            </div>

            {/* Result Display */}
            {result !== null && (
                <div className="text-center text-lg">
                    {result === -1 ? (
                        <p className="text-red-500">Element not found in array</p>
                    ) : (
                        <p className="text-green-600">
                            Element found at index {result}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default LinearSearch;
