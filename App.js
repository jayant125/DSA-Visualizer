import React from "react";
import { BrowserRouter, Routes,Route,Router } from "react-router";
import Header from "./src/components/Header";
import Sidebar from "./src/components/Sidebar";
import Home from "./src/pages/Home";
import Searching from "./src/pages/Searching";
import Sorting from "./src/pages/Sorting";
import Graph from "./src/pages/Graph";
import Tree from "./src/pages/Tree";
import LinearSearch from "./src/algorithms/Searching/LinearSearch";
import BinarySearch from "./src/algorithms/Searching/BinarySearch";
import BubbleSort from "./src/algorithms/Sorting/BubbleSort";
import MergeSort from "./src/algorithms/Sorting/MergeSort";
import QuickSort from "./src/algorithms/Sorting/QuickSort";
import Bfs from "./src/algorithms/graph/Bfs";
import Dfs from "./src/algorithms/graph/Dfs";
import Dijkstra from "./src/algorithms/graph/Dijkstra";
import Bst from "./src/algorithms/tree/Bst";

export default function App() {
    return (
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 overflow-y-scroll p-4 bg-gradient-to-r from-[#0097b2] to-[#7ed957]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/searching" element={<Searching />} />
                <Route path="/sorting" element={<Sorting />} />
                <Route path="/Graph" element={<Graph/>} />
                <Route path="/Tree" element={<Tree />} />
                <Route path="/LinearSearch" element={<LinearSearch />} />
                <Route path="/BinarySearch" element={<BinarySearch />} />
                <Route path="/BubbleSort" element={<BubbleSort/>}/>
                <Route path="/MergeSort" element={<MergeSort />} />
                <Route path="/QuickSort" element={<QuickSort />} />
                <Route path="/Bfs" element={<Bfs/>}/>
                <Route path="/Dfs" element={<Dfs/>}/>
                <Route path="/Dijkstra" element={<Dijkstra/>}/>
                <Route path="/Bst" element={<Bst/>}/>
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
