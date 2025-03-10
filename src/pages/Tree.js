export default function Tree() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                    Tree Data Structures
                </h1>

                {/* Main BST Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                            <span className="text-2xl">🌳</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">Binary Search Tree</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-emerald-600 mb-2">DEFINITION</h3>
                                <p className="text-gray-600">
                                    A node-based tree structure where:
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Left subtree contains only nodes with values less than parent</li>
                                        <li>Right subtree contains only nodes with values greater than parent</li>
                                        <li>Each subtree must also be a binary search tree</li>
                                    </ul>
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-600 mb-2">KEY OPERATIONS</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Search</p>
                                        <p className="font-bold text-blue-600">O(log n)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Insert</p>
                                        <p className="font-bold text-blue-600">O(log n)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Delete</p>
                                        <p className="font-bold text-blue-600">O(log n)</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Traversal</p>
                                        <p className="font-bold text-blue-600">O(n)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-purple-600 mb-2">COMPLEXITY ANALYSIS</h3>
                                <div className="space-y-3">
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Average Case (Balanced)</p>
                                        <p className="font-bold text-purple-600">O(log n)</p>
                                    </div>
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Worst Case (Skewed)</p>
                                        <p className="font-bold text-purple-600">O(n)</p>
                                    </div>
                                    <div className="bg-purple-50 p-2 rounded">
                                        <p className="text-xs text-gray-600">Space Complexity</p>
                                        <p className="font-bold text-purple-600">O(n)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-rose-600 mb-2">TYPICAL USES</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                                        Database indexing
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                                        Filesystem hierarchies
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                                        Auto-completion systems
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tree Variations Section */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-2 rounded-lg mr-2">
                                <span className="text-xl">⚖️</span>
                            </div>
                            <h3 className="text-lg font-semibold">AVL Tree</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Self-balancing BST with height difference constraint of 1 between subtrees
                        </p>
                        <div className="bg-blue-50 p-2 rounded text-center">
                            <p className="text-xs font-bold text-blue-600">Guaranteed O(log n)</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-3">
                            <div className="bg-purple-100 p-2 rounded-lg mr-2">
                                <span className="text-xl">🔄</span>
                            </div>
                            <h3 className="text-lg font-semibold">B-Tree</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Self-balancing tree optimized for systems that read/write large blocks of data
                        </p>
                        <div className="bg-purple-50 p-2 rounded text-center">
                            <p className="text-xs font-bold text-purple-600">O(log n) Operations</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-3">
                            <div className="bg-rose-100 p-2 rounded-lg mr-2">
                                <span className="text-xl">📚</span>
                            </div>
                            <h3 className="text-lg font-semibold">Heap</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Complete binary tree with heap property (min/max at root)
                        </p>
                        <div className="bg-rose-50 p-2 rounded text-center">
                            <p className="text-xs font-bold text-rose-600">O(1) Find Min/Max</p>
                        </div>
                    </div>
                </div>

                {/* Traversal Section */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tree Traversal Methods</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-600 mb-2">In-Order</h4>
                            <p className="text-sm text-gray-600">
                                Left → Root → Right<br/>
                                <span className="text-xs text-green-600">Sorted output for BST</span>
                            </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">Pre-Order</h4>
                            <p className="text-sm text-gray-600">
                                Root → Left → Right<br/>
                                <span className="text-xs text-blue-600">Prefix notation</span>
                            </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-600 mb-2">Post-Order</h4>
                            <p className="text-sm text-gray-600">
                                Left → Right → Root<br/>
                                <span className="text-xs text-purple-600">Delete operations</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
