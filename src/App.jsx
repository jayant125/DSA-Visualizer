import './App.css'
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes,Route,Router } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Searching from "./pages/Searching";
import Sorting from "./pages/Sorting"; // Fixed path
import Graph from "./pages/Graph"; // Fixed path
import Tree from "./pages/Tree"; // Fixed path

import LinearSearch from "./algorithms/Searching/LinearSearch"; // Fixed path
import BinarySearch from "./algorithms/Searching/BinarySearch";
import BubbleSort from "./algorithms/Sorting/BubbleSort";
import MergeSort from "./algorithms/Sorting/MergeSort";
import QuickSort from "./algorithms/Sorting/QuickSort";
import Bfs from "./algorithms/graph/Bfs";
import Dfs from "./algorithms/graph/Dfs";
import Dijkstra from "./algorithms/graph/Dijkstra";
import Bst from "./algorithms/tree/Bst";

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
