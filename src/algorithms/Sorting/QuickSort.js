import React from "react";
import { useEffect,useState,useRef } from "react";

const QuickSort = () => {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [stack, setStack] = useState([]);
    const [pivot, setPivot] = useState(null);
    const [pointers, setPointers] = useState({ left: null, right: null });
    const [swaps, setSwaps] = useState(0);
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
        setIsSorting(false);
        setStack([]);
        setPivot(null);
        setPointers({ left: null, right: null });
        setSwaps(0);
    };

    const quickSort = async () => {
        setIsSorting(true);
        let arr = [...array];
        let swapCount = 0;
        const tempStack = [[0, arr.length - 1]];

        while (tempStack.length) {
            const [low, high] = tempStack.pop();
            if (low < high) {
                const pivotIndex = await partition(arr, low, high);
                tempStack.push([low, pivotIndex - 1]);
                tempStack.push([pivotIndex + 1, high]);
                setStack([...tempStack]);
                swapCount++;
                setSwaps(swapCount);
            }
        }
        setIsSorting(false);
    };

    const partition = async (arr, low, high) => {
        const pivotValue = arr[high];
        let i = low - 1;
        setPivot(high);

        for (let j = low; j < high; j++) {
            setPointers({ left: j, right: i });
            await new Promise(resolve => setTimeout(resolve, speed));

            if (arr[j] <= pivotValue) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        return i + 1;
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
        ctx.fillText('Operations', 0, 0);
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
            <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
                Quick Sort Visualization
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
                    onClick={quickSort}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={isSorting}
                >
                    {isSorting ? 'Sorting...' : 'Start Quick Sort'}
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
                            ${index === pivot ? 'bg-yellow-400' :
                             index === pointers.left ? 'bg-red-400' :
                             index === pointers.right ? 'bg-green-400' : 'bg-purple-400'}`}
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
                    <p>O(n log n) avg</p>
                    <p>O(n²) worst</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Space Complexity</h3>
                    <p>O(log n)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">Swaps/Partitions</h3>
                    <p>{swaps}</p>
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
                        <span>Quick Sort (O(n log n))</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500"></div>
                        <span>Worst Case (O(n²))</span>
                    </div>
                </div>
            </div>

            {/* Algorithm Explanation */}
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Quick Sort Algorithm</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Divide-and-conquer algorithm with O(n log n) average case</li>
                    <li>Steps:
                        <ol className="list-decimal pl-8 mt-2">
                            <li>Select a pivot element (here: last element)</li>
                            <li>Partition array into elements less than and greater than pivot</li>
                            <li>Recursively sort the partitions</li>
                        </ol>
                    </li>
                    <li>In-place sorting with O(log n) space complexity (stack)</li>
                    <li>Efficient for large datasets, cache-friendly</li>
                    <li>Worst case occurs when pivot selection is unbalanced</li>
                    <li>Practical implementations use randomized pivot selection</li>
                </ul>
            </div>
        </div>
    );
};

export default QuickSort;
