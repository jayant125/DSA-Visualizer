import React from "react";
import { useEffect,useState,useRef } from "react";

const MergeSort = () => {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [splitHistory, setSplitHistory] = useState([]);
    const [mergeHistory, setMergeHistory] = useState([]);
    const [speed, setSpeed] = useState(100);
    const [comparisons, setComparisons] = useState(0);
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
        const newArray = Array.from({ length: 16 }, () => Math.floor(Math.random() * 90) + 10);
        setArray(newArray);
        setIsSorting(false);
        setSteps([]);
        setCurrentStep(0);
        setSplitHistory([]);
        setMergeHistory([]);
        setComparisons(0);
    };

    const mergeSort = async () => {
        setIsSorting(true);
        let arr = [...array];
        let stepList = [];
        let splitHist = [];
        let mergeHist = [];
        let compCount = 0;

        const merge = async (left, right) => {
            let result = [];
            let leftIdx = 0;
            let rightIdx = 0;

            while (leftIdx < left.length && rightIdx < right.length) {
                compCount++;
                if (left[leftIdx] < right[rightIdx]) {
                    result.push(left[leftIdx]);
                    leftIdx++;
                } else {
                    result.push(right[rightIdx]);
                    rightIdx++;
                }
                stepList.push([...result, ...left.slice(leftIdx), ...right.slice(rightIdx)]);
                mergeHist.push([...result]);
            }

            return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
        };

        const sort = async (arr) => {
            if (arr.length <= 1) return arr;

            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);

            splitHist.push([left, right]);
            setSplitHistory([...splitHist]);

            return await merge(
                await sort(left),
                await sort(right)
            );
        };

        const sortedArray = await sort(arr);
        setSteps(stepList);
        setComparisons(compCount);

        // Visualize steps
        for (let i = 0; i < stepList.length; i++) {
            setCurrentStep(i);
            await new Promise(resolve => setTimeout(resolve, speed));
        }

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
        ctx.fillText('Operations (O(n log n))', 0, 0);
        ctx.restore();

        // O(n log n) curve
        ctx.beginPath();
        ctx.strokeStyle = '#3B82F6';
        ctx.moveTo(30, height - 20);
        for (let x = 0; x <= array.length; x++) {
            const y = height - 20 - (x * Math.log2(x + 1)) / (array.length/3);
            ctx.lineTo(30 + (x * (width - 40)/array.length), y || height - 20);
        }
        ctx.stroke();

        // O(n²) comparison
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
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Merge Sort Visualization
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
                    onClick={mergeSort}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={isSorting}
                >
                    {isSorting ? 'Sorting...' : 'Start Merge Sort'}
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

            {/* Visualizations */}
            <div className="space-y-8">
                {/* Original Array */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">Original Array</h3>
                    <div className="flex justify-center gap-1">
                        {array.map((value, index) => (
                            <div
                                key={index}
                                className="w-8 h-8 bg-blue-200 flex items-center justify-center rounded"
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Splitting Process */}
                {splitHistory.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-2">Splitting</h3>
                        <div className="flex flex-col items-center gap-2">
                            {splitHistory.map(([left, right], idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex gap-1 bg-blue-50 p-2 rounded">
                                        {left.map((num, i) => (
                                            <div key={i} className="w-6 h-6 bg-blue-300 flex items-center justify-center rounded text-xs">
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-1 bg-blue-50 p-2 rounded">
                                        {right.map((num, i) => (
                                            <div key={i} className="w-6 h-6 bg-blue-300 flex items-center justify-center rounded text-xs">
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Merging Process */}
                {steps.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-2">Merging</h3>
                        <div className="flex flex-col items-center gap-2">
                            {steps.slice(0, currentStep + 1).map((step, idx) => (
                                <div key={idx} className="flex gap-1 bg-green-50 p-2 rounded">
                                    {step.map((num, i) => (
                                        <div
                                            key={i}
                                            className={`w-6 h-6 flex items-center justify-center rounded text-xs
                                                ${i < currentStep % step.length ? 'bg-green-400' : 'bg-green-300'}`}
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Time Complexity</h3>
                    <p>O(n log n)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Space Complexity</h3>
                    <p>O(n)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Comparisons</h3>
                    <p>{comparisons}</p>
                </div>
            </div>

            {/* Time Complexity Graph */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4 text-center">Time Complexity Comparison</h3>
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="mx-auto"
                ></canvas>
                <div className="mt-4 flex justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500"></div>
                        <span>Merge Sort (O(n log n))</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500"></div>
                        <span>Bubble Sort (O(n²))</span>
                    </div>
                </div>
            </div>

            {/* Algorithm Explanation */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Merge Sort Algorithm</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Divide-and-conquer algorithm with O(n log n) time complexity</li>
                    <li>Stable sorting algorithm (maintains relative order)</li>
                    <li>Steps:
                        <ol className="list-decimal pl-8 mt-2">
                            <li>Divide the unsorted array into n subarrays of single elements</li>
                            <li>Repeatedly merge subarrays to produce new sorted subarrays</li>
                            <li>Continue until final merged array is completely sorted</li>
                        </ol>
                    </li>
                    <li>Space complexity: O(n) for temporary arrays</li>
                    <li>Efficient for large datasets</li>
                    <li>Works well for linked lists and external sorting</li>
                </ul>
            </div>
        </div>
    );
};

export default MergeSort;
