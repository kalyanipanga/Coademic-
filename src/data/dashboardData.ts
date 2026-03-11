import { Course, MockInterview, PracticeTrack } from "../types";
import { Brain, Code, Database, Target, Terminal } from "lucide-react";

export const COURSES: Course[] = [
  // Software Courses
  { 
    id: "c1", 
    title: "Data Structures & Algorithms", 
    description: "Master the foundations of computer science with our comprehensive DSA course.",
    videoUrl: "https://www.youtube.com/embed/8hly31xKli0", 
    type: "Software", 
    lessons: 24 
  },
  { 
    id: "c2", 
    title: "Version Control Systems", 
    description: "Master Git and GitHub for effective collaboration and code management.",
    videoUrl: "https://www.youtube.com/embed/rH3zE7VlIMs", 
    type: "Software", 
    lessons: 18 
  },
  { 
    id: "c3", 
    title: "Full Stack Web Development", 
    description: "Build modern web applications from scratch using React, Node.js, and MongoDB.",
    videoUrl: "https://www.youtube.com/embed/nu_pCVPKzTk", 
    type: "Software", 
    lessons: 45 
  },
  { 
    id: "c4", 
    title: "Python Programming", 
    description: "Learn Python from basics to advanced concepts for data science and web development.",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw", 
    type: "Software", 
    lessons: 30 
  },
  { 
    id: "c5", 
    title: "Cloud Computing & AWS", 
    description: "Master cloud infrastructure, deployment, and AWS services.",
    videoUrl: "https://www.youtube.com/embed/-KfHI7e75RA", 
    type: "Software", 
    lessons: 35 
  },
  { 
    id: "c6", 
    title: "Mobile App Development", 
    description: "Build cross-platform mobile applications using React Native and Flutter.",
    videoUrl: "https://www.youtube.com/embed/2esQdKzRUCw", 
    type: "Software", 
    lessons: 40 
  },
  { 
    id: "c7", 
    title: "Java Programming", 
    description: "Master object-oriented programming, enterprise applications, and Spring Boot.",
    videoUrl: "https://www.youtube.com/embed/xTtL8E4LzTQ", 
    type: "Software", 
    lessons: 35 
  },
  { 
    id: "c8", 
    title: "C Programming", 
    description: "Learn the mother of all programming languages. Pointers, memory management, and more.",
    videoUrl: "https://www.youtube.com/embed/xND0t1pr3KY", 
    type: "Software", 
    lessons: 25 
  },
  { 
    id: "c9", 
    title: "Cyber Security", 
    description: "Learn ethical hacking, network security, cryptography, and penetration testing.",
    videoUrl: "https://www.youtube.com/embed/MvrgFOwEgdA", 
    type: "Software", 
    lessons: 40 
  },
  
  // Hardware Courses
  { 
    id: "h2", 
    title: "Internet of Things (IoT)", 
    description: "Build connected devices, sensor networks, and IoT cloud platforms.",
    videoUrl: "https://www.youtube.com/embed/b7GC4Zr74M0", 
    type: "Hardware", 
    lessons: 32 
  },
  { 
    id: "h4", 
    title: "VLSI Design", 
    description: "Master digital logic design, Verilog/VHDL, and FPGA programming.",
    videoUrl: "https://www.youtube.com/embed/CZ404kC1fO8", 
    type: "Hardware", 
    lessons: 35 
  },
  { 
    id: "h6", 
    title: "PCB Design", 
    description: "Design professional printed circuit boards using Altium Designer and KiCad.",
    videoUrl: "https://www.youtube.com/embed/ZbxA90wbTZU", 
    type: "Hardware", 
    lessons: 30 
  }
];

export const MOCK_INTERVIEWS: MockInterview[] = [
  { id: "int-1", title: "Technical Mock - React/Node", date: "Mar 01, 2026", status: "completed", feedbackId: "fb-1" },
  { id: "int-2", title: "Version Controls - Git & GitHub", date: "Feb 26, 2026", status: "completed", feedbackId: "fb-2" },
  { id: "int-3", title: "Behavioral - Leadership", date: "Feb 22, 2026", status: "completed", feedbackId: "fb-3" },
  { id: "int-4", title: "HR Mock Session", date: "Mar 02, 2026", status: "scheduled" },
];

export const PRACTICE_TRACKS: PracticeTrack[] = [
  { 
    id: "ds", 
    title: "Data Structures", 
    description: "Arrays, Linked Lists, Trees, Graphs, and more.",
    icon: Brain,
    problems: 45,
    completed: 0,
    difficulty: "Intermediate",
    color: "emerald",
    assignments: [
      { id: "ds-1", title: "Implement a Linked List", description: "Create a singly linked list with add, remove, and find methods.", completed: false },
      { id: "ds-2", title: "Reverse a Binary Tree", description: "Write a function to invert a binary tree.", completed: false },
      { id: "ds-3", title: "Graph Traversal (BFS/DFS)", description: "Implement Breadth-First and Depth-First search algorithms.", completed: false },
      { id: "ds-4", title: "Stack Implementation", description: "Implement a stack using an array or linked list.", completed: false },
      { id: "ds-5", title: "Queue Implementation", description: "Implement a queue using an array or linked list.", completed: false },
      { id: "ds-6", title: "Binary Search Tree Insertion", description: "Insert a node into a Binary Search Tree.", completed: false },
      { id: "ds-7", title: "Detect Cycle in Linked List", description: "Check if a linked list contains a cycle.", completed: false },
      { id: "ds-8", title: "Merge Two Sorted Lists", description: "Merge two sorted linked lists into one sorted list.", completed: false },
      { id: "ds-9", title: "Lowest Common Ancestor", description: "Find the lowest common ancestor of two nodes in a BST.", completed: false },
      { id: "ds-10", title: "Implement a Hash Map", description: "Create a hash map with put, get, and remove methods.", completed: false }
    ]
  },
  { 
    id: "algo", 
    title: "Algorithms", 
    description: "Sorting, Searching, DP, and Greedy algorithms.",
    icon: Code,
    problems: 60,
    completed: 0,
    difficulty: "Advanced",
    color: "brand-red",
    assignments: [
      { id: "algo-1", title: "Implement Merge Sort", description: "Write a function to sort an array using merge sort.", completed: false },
      { id: "algo-2", title: "Binary Search Implementation", description: "Implement binary search on a sorted array.", completed: false },
      { id: "algo-3", title: "Knapsack Problem (DP)", description: "Solve the 0/1 Knapsack problem using dynamic programming.", completed: false },
      { id: "algo-4", title: "Quick Sort Implementation", description: "Implement the Quick Sort algorithm.", completed: false },
      { id: "algo-5", title: "Dijkstra's Algorithm", description: "Find the shortest path in a graph using Dijkstra's algorithm.", completed: false },
      { id: "algo-6", title: "Longest Common Subsequence", description: "Find the length of the longest common subsequence of two strings.", completed: false },
      { id: "algo-7", title: "Fibonacci Sequence (DP)", description: "Calculate the nth Fibonacci number using dynamic programming.", completed: false },
      { id: "algo-8", title: "Activity Selection Problem", description: "Solve the activity selection problem using a greedy approach.", completed: false },
      { id: "algo-9", title: "Kruskal's Algorithm", description: "Find the Minimum Spanning Tree of a graph using Kruskal's algorithm.", completed: false },
      { id: "algo-10", title: "Bellman-Ford Algorithm", description: "Find the shortest paths from a source node to all other nodes in a graph.", completed: false }
    ]
  },
  { 
    id: "sql", 
    title: "SQL & Databases", 
    description: "Master complex queries and database design.",
    icon: Database,
    problems: 30,
    completed: 0,
    difficulty: "Intermediate",
    color: "blue",
    assignments: [
      { id: "sql-1", title: "Complex Join Query", description: "Write a query using INNER, LEFT, and RIGHT joins.", completed: false },
      { id: "sql-2", title: "Database Normalization", description: "Normalize a database schema to 3NF.", completed: false },
      { id: "sql-3", title: "Indexing Strategy", description: "Design indexes for a high-traffic table.", completed: false },
      { id: "sql-4", title: "Aggregate Functions", description: "Use COUNT, SUM, AVG, MIN, and MAX in a query.", completed: false },
      { id: "sql-5", title: "Subqueries", description: "Write a query that uses a subquery in the WHERE clause.", completed: false },
      { id: "sql-6", title: "Stored Procedures", description: "Create a stored procedure to insert data into a table.", completed: false },
      { id: "sql-7", title: "Triggers", description: "Create a trigger that updates a log table on data changes.", completed: false },
      { id: "sql-8", title: "Views", description: "Create a view to simplify a complex query.", completed: false },
      { id: "sql-9", title: "Transactions", description: "Write a transaction to ensure data integrity.", completed: false },
      { id: "sql-10", title: "Window Functions", description: "Use ROW_NUMBER, RANK, and DENSE_RANK in a query.", completed: false }
    ]
  },
  { 
    id: "math", 
    title: "Mathematics", 
    description: "Number theory, Combinatorics, and Geometry.",
    icon: Target,
    problems: 25,
    completed: 0,
    difficulty: "Intermediate",
    color: "purple",
    assignments: [
      { id: "math-1", title: "Prime Number Sieve", description: "Implement the Sieve of Eratosthenes.", completed: false },
      { id: "math-2", title: "Permutations & Combinations", description: "Calculate nPr and nCr for given inputs.", completed: false },
      { id: "math-3", title: "Geometric Calculations", description: "Calculate area and perimeter of various shapes.", completed: false },
      { id: "math-4", title: "Greatest Common Divisor", description: "Calculate the GCD of two numbers using the Euclidean algorithm.", completed: false },
      { id: "math-5", title: "Least Common Multiple", description: "Calculate the LCM of two numbers.", completed: false },
      { id: "math-6", title: "Matrix Multiplication", description: "Multiply two matrices.", completed: false },
      { id: "math-7", title: "Probability Calculation", description: "Calculate the probability of an event.", completed: false },
      { id: "math-8", title: "Statistics: Mean, Median, Mode", description: "Calculate the mean, median, and mode of a dataset.", completed: false },
      { id: "math-9", title: "Linear Equations", description: "Solve a system of linear equations.", completed: false },
      { id: "math-10", title: "Number Base Conversion", description: "Convert a number from one base to another.", completed: false }
    ]
  },
  { 
    id: "python", 
    title: "Python Mastery", 
    description: "Deep dive into Python language features.",
    icon: Terminal,
    problems: 40,
    completed: 0,
    difficulty: "Beginner",
    color: "yellow",
    assignments: [
      { id: "py-1", title: "List Comprehensions", description: "Rewrite loops using list comprehensions.", completed: false },
      { id: "py-2", title: "Decorators", description: "Create a custom decorator for logging function calls.", completed: false },
      { id: "py-3", title: "File I/O Operations", description: "Read and write data to a text file.", completed: false },
      { id: "py-4", title: "Exception Handling", description: "Handle exceptions using try-except blocks.", completed: false },
      { id: "py-5", title: "Generators", description: "Create a generator function to yield values.", completed: false },
      { id: "py-6", title: "Lambda Functions", description: "Use lambda functions for concise code.", completed: false },
      { id: "py-7", title: "Object-Oriented Programming", description: "Create a class with methods and attributes.", completed: false },
      { id: "py-8", title: "Regular Expressions", description: "Use regex to match patterns in strings.", completed: false },
      { id: "py-9", title: "Multithreading", description: "Create a multithreaded Python script.", completed: false },
      { id: "py-10", title: "Web Scraping", description: "Scrape data from a website using BeautifulSoup.", completed: false }
    ]
  }
];
