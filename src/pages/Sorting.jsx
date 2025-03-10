export default function Sorting() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Sorting Algorithms
                </h1>

                {/* Algorithms Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Bubble Sort Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">🫧</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Bubble Sort</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Simple comparison-based algorithm that repeatedly steps through the list,
                            compares adjacent elements, and swaps them if they are in the wrong order.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time (Avg/Worst)</p>
                                        <p className="font-bold text-blue-600">O(n²)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-blue-600">O(1)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Small datasets
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Educational purposes
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Simple implementations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Merge Sort Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">🔀</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Merge Sort</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Efficient, stable, divide-and-conquer algorithm that divides input into halves,
                            sorts them, and merges the sorted halves.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-purple-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time (All Cases)</p>
                                        <p className="font-bold text-purple-600">O(n log n)</p>
                                    </div>
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-purple-600">O(n)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Large datasets
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Stable sorting required
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        External sorting
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Quick Sort Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-red-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Quick Sort</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Divide-and-conquer algorithm that selects a 'pivot' element and partitions
                            the array around the pivot.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-red-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-red-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time (Avg)</p>
                                        <p className="font-bold text-red-600">O(n log n)</p>
                                    </div>
                                    <div className="bg-red-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-red-600">O(log n)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        General-purpose sorting
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        In-place sorting
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Performance-critical applications
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Key Characteristics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">Bubble Sort</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Simple implementation</li>
                                <li>Adaptive (efficient for partially sorted data)</li>
                                <li>Not practical for large datasets</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-600 mb-2">Merge Sort</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Stable sorting</li>
                                <li>Consistent performance</li>
                                <li>Requires extra memory</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-red-600 mb-2">Quick Sort</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Cache-efficient</li>
                                <li>In-place version available</li>
                                <li>Worst case O(n²) time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
