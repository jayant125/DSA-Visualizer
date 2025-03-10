export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Algorithm Visualizer
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Interactive visualization of fundamental algorithms and data structures with detailed complexity analysis and real-world use cases.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-blue-100 w-max p-4 rounded-xl mb-6">
                            <span className="text-3xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Complexity Analysis</h3>
                        <p className="text-gray-600">Detailed time and space complexity breakdowns with Big O notation comparisons.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-purple-100 w-max p-4 rounded-xl mb-6">
                            <span className="text-3xl">🎮</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Interactive Visualizations</h3>
                        <p className="text-gray-600">Step-through executions with animation controls and real-time state tracking.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 w-max p-4 rounded-xl mb-6">
                            <span className="text-3xl">💡</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Use Cases</h3>
                        <p className="text-gray-600">Practical examples and real-world applications for each algorithm.</p>
                    </div>
                </div>

                {/* Algorithm Categories */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Algorithms</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="text-xl font-semibold">Searching</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Linear Search, Binary Search, Hash Tables
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                <span className="text-2xl">📶</span>
                            </div>
                            <h3 className="text-xl font-semibold">Sorting</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Quick Sort, Merge Sort, Bubble Sort, Heap Sort
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-2 rounded-lg mr-3">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-semibold">Graph</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            BFS, DFS, Dijkstra's, A* Algorithm
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-red-100 p-2 rounded-lg mr-3">
                                <span className="text-2xl">🌳</span>
                            </div>
                            <h3 className="text-xl font-semibold">Trees</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            BST, AVL, B-Trees, Traversals
                        </p>
                    </div>
                </div>

                {/* Key Concepts */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Core Concepts</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Big O Notation</h3>
                            <p className="text-gray-600 mb-4">
                                Understand time and space complexity analysis with interactive comparisons.
                            </p>
                            <div className="flex items-center text-sm text-blue-600">
                                <span className="mr-2">📈 Learn More</span>
                                <span>→</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Data Structures</h3>
                            <p className="text-gray-600 mb-4">
                                Explore fundamental data structures and their implementations.
                            </p>
                            <div className="flex items-center text-sm text-green-600">
                                <span className="mr-2">🏗️ Explore Structures</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                    <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
                    <p className="text-lg mb-8">Visualize, Understand, and Master Algorithms</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                        Begin Exploration →
                    </button>
                </div>
            </div>
        </div>
    )
}
