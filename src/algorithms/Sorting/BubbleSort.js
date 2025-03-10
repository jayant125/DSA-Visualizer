import React from "react";
import { useState,useEffect,useRef } from "react";

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [currentCompare, setCurrentCompare] = useState([]);
    const [swaps, setSwaps] = useState(0);
    const [stepCount, setStepCount] = useState(0);
    const [speed, setSpeed] = useState(100);
    const canvasRef = useRef(null);

    // Generate initial array
    useEffect(() => {
        generateArray();
    }, []);

    // Time complexity graph setup
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawComplexityGraph(ctx);
    }, [array.length]);

    const generateArray = () => {
        const newArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 90) + 10);
        setArray(newArray);
        setSwaps(0);
        setStepCount(0);
        setIsSorting(false);
        setCurrentCompare([]);
    };

    const bubbleSort = async () => {
        setIsSorting(true);
        let arr = [...array];
        let swapCount = 0;
        let steps = 0;
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                steps++;
                setCurrentCompare([j, j + 1]);
                await new Promise(resolve => setTimeout(resolve, speed));

                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapCount++;
                    setSwaps(swapCount);
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
                setStepCount(steps);
            }
        }
        setCurrentCompare([]);
        setIsSorting(false);
    };

    const drawComplexityGraph = (ctx) => {
        const width = 400;
        const height = 200;
        ctx.clearRect(0, 0, width, height);

        // Axes
        ctx.beginPath();
        ctx.moveTo(30, 10);
        ctx.lineTo(30, height - 20);
        ctx.lineTo(width - 10, height - 20);
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#000';
        ctx.fillText('Time Complexity', width/2 - 40, 20);
        ctx.fillText('n (elements)', width - 30, height - 5);
        ctx.save();
        ctx.translate(10, height/2);
        ctx.rotate(-Math.PI/2);
        ctx.fillText('Operations (O(n²))', 0, 0);
        ctx.restore();

        // O(n²) curve
        ctx.beginPath();
        ctx.strokeStyle = '#ef4444';
        ctx.moveTo(30, height - 20);
        for (let x = 0; x <= array.length; x++) {
            const y = height - 20 - (x * x) / (array.length/2);
            ctx.lineTo(30 + (x * (width - 40)/array.length), y);
        }
        ctx.stroke();
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
                Bubble Sort Visualization
            </h1>

            {/* Controls */}
            <div className="mb-6 flex flex-wrap gap-4 justify-center items-center">
                <button
                    onClick={generateArray}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    disabled={isSorting}
                >
                    Generate New Array
                </button>

                <button
                    onClick={bubbleSort}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={isSorting}
                >
                    {isSorting ? 'Sorting...' : 'Start Bubble Sort'}
                </button>

                <div className="flex items-center gap-2">
                    <label>Speed:</label>
                    <input
                        type="range"
                        min="50"
                        max="1000"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        className="w-32"
                    />
                    <span>{1000 - speed + 50}ms</span>
                </div>
            </div>

            {/* Array Visualization */}
            <div className="flex justify-center items-end h-64 mb-8 gap-1">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`w-8 text-center transition-all duration-300
                            ${currentCompare.includes(index) ? 'bg-yellow-400' : ''}
                            ${index >= array.length - (stepCount % array.length) ? 'bg-green-400' : 'bg-red-400'}`}
                        style={{ height: `${value}%` }}
                    >
                        <span className="text-xs text-white">{value}</span>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Time Complexity</h3>
                    <p>O(n²)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Space Complexity</h3>
                    <p>O(1)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Comparisons/Swaps</h3>
                    <p>{stepCount} / {swaps}</p>
                </div>
            </div>

            {/* Time Complexity Graph */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4 text-center">Time Complexity Graph</h3>
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="mx-auto"
                ></canvas>
                <div className="mt-4 flex justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500"></div>
                        <span>Bubble Sort (O(n²))</span>
                    </div>
                </div>
            </div>

            {/* Algorithm Explanation */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bubble Sort Algorithm</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Repeatedly steps through the list comparing adjacent elements</li>
                    <li>Swaps elements if they're in the wrong order</li>
                    <li>Continues until no swaps are needed (list is sorted)</li>
                    <li>Average and worst-case time complexity: O(n²)</li>
                    <li>Best-case time complexity: O(n) (already sorted)</li>
                    <li>Space complexity: O(1) (in-place sorting)</li>
                </ul>
            </div>
        </div>
    );
};

export default BubbleSort;
