export default function Graph() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-600">
                    Graph Algorithms
                </h1>

                {/* Algorithms Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* BFS Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Breadth First Search</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Explores graph level by level using a queue, ideal for finding shortest paths in unweighted graphs.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time</p>
                                        <p className="font-bold text-blue-600">O(V + E)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-blue-600">O(V)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Shortest path in unweighted graphs
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Web crawlers
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Social network analysis
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DFS Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">🌳</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Depth First Search</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Explores graph by going deep using a stack, useful for path finding and cycle detection.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-green-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-green-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time</p>
                                        <p className="font-bold text-green-600">O(V + E)</p>
                                    </div>
                                    <div className="bg-green-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-green-600">O(V)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        Maze solving
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        Topological sorting
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        Strongly connected components
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Dijkstra Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg mr-3">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Dijkstra's Algorithm</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Finds shortest paths in weighted graphs using a priority queue, optimal for non-negative weights.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-purple-600 mb-2">COMPLEXITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Time</p>
                                        <p className="font-bold text-purple-600">O((V+E) log V)</p>
                                    </div>
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space</p>
                                        <p className="font-bold text-purple-600">O(V)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-red-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                        Navigation systems
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                        Network routing protocols
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                        Traffic management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Algorithm Characteristics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">BFS</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Uses queue</li>
                                <li>Level-order traversal</li>
                                <li>Optimal for unweighted graphs</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-600 mb-2">DFS</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Uses stack (implicit or explicit)</li>
                                <li>Depth-first exploration</li>
                                <li>Better for memory constraints</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-600 mb-2">Dijkstra</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Priority queue implementation</li>
                                <li>Non-negative weights only</li>
                                <li>Single-source shortest path</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
