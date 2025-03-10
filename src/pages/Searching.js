export default function Searching() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    Searching Algorithms
                </h1>

                {/* Algorithms Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Linear Search Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Linear Search</h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Sequentially checks each element in a collection until a match is found.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-3">COMPLEXITY</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-blue-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Best</p>
                                        <p className="font-bold text-blue-600">O(1)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Average</p>
                                        <p className="font-bold text-blue-600">O(n)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Worst</p>
                                        <p className="font-bold text-blue-600">O(n)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-purple-600 mb-3">SPACE COMPLEXITY</h3>
                                <div className="bg-purple-50 p-2 rounded text-center">
                                    <p className="font-bold text-purple-600">O(1)</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-3">IDEAL USE CASES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Unsorted datasets
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Small collections
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Simple implementations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Binary Search Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-green-100 p-3 rounded-xl mr-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Binary Search</h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Efficiently finds items in sorted arrays by repeatedly dividing search space.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-3">COMPLEXITY</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-green-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Best</p>
                                        <p className="font-bold text-green-600">O(1)</p>
                                    </div>
                                    <div className="bg-green-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Average</p>
                                        <p className="font-bold text-green-600">O(log n)</p>
                                    </div>
                                    <div className="bg-green-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Worst</p>
                                        <p className="font-bold text-green-600">O(log n)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-purple-600 mb-3">SPACE COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-purple-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Iterative</p>
                                        <p className="font-bold text-purple-600">O(1)</p>
                                    </div>
                                    <div className="bg-purple-50 p-2 rounded text-center">
                                        <p className="text-xs text-gray-600">Recursive</p>
                                        <p className="font-bold text-purple-600">O(log n)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-3">IDEAL USE CASES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        Sorted datasets
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        Large collections
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        Performance-critical systems
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Key Comparisons</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                    <span className="text-blue-600">🔍</span>
                                </div>
                                <h4 className="font-semibold text-blue-600">Linear Search</h4>
                            </div>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Works on any dataset</li>
                                <li>Simple implementation</li>
                                <li>No sorting required</li>
                                <li>Linear time complexity</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="bg-green-100 p-2 rounded-lg mr-3">
                                    <span className="text-green-600">🎯</span>
                                </div>
                                <h4 className="font-semibold text-green-600">Binary Search</h4>
                            </div>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Requires sorted data</li>
                                <li>Complex implementation</li>
                                <li>Logarithmic efficiency</li>
                                <li>Divide-and-conquer approach</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Efficiency Note */}
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                        ⚡ Pro Tip: Binary search is 100x faster than linear search for 1 million elements
                        (20 comparisons vs 500,000 average comparisons)
                    </p>
                </div>
            </div>
        </div>
    )
}
