import { 
  FileText, Users, Code, BookOpen, 
  Share2, Terminal, BarChart3, Video, 
  Layout, Globe, Cpu, Briefcase, 
  Brain, Link as LinkIcon, Database, 
  Leaf, Bolt, GitBranch, Network, 
  Bot, Layers, Plug, Type, History, Coffee
} from "lucide-react";

import { BANK_QUESTIONS } from "./bankQuestions";

export const INTERVIEW_KIT_CATEGORIES = [
  { id: "companies", name: "Company Based Questions", icon: Briefcase, color: "bg-brand-red" },
  { id: "tech", name: "Technology Based", icon: Code, color: "bg-brand-red/90" },
  { id: "aptitude", name: "Aptitude", icon: BarChart3, color: "bg-brand-red/80" },
  { id: "softskills", name: "Soft Skills & HR", icon: Users, color: "bg-brand-red/70" },
  { id: "roadmaps", name: "Roadmaps", icon: Layout, color: "bg-brand-red" },
  { id: "universal", name: "Universal Questions", icon: Globe, color: "bg-brand-red/60" },
];

export const COMPANIES_DATA = [
  { id: "accenture", name: "Accenture", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/accenture.com" },
  { id: "adobe", name: "Adobe", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/adobe.com" },
  { id: "airbnb", name: "AirBnb", questionsCount: 20, industry: "E-commerce", logo: "https://logo.clearbit.com/airbnb.com" },
  { id: "amazon", name: "Amazon", questionsCount: 19, industry: "E-commerce", logo: "https://logo.clearbit.com/amazon.com" },
  { id: "apple", name: "Apple", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/apple.com" },
  { id: "capgemini", name: "Capgemini", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/capgemini.com" },
  { id: "citridot", name: "Citridot Pvt Ltd", questionsCount: 18, industry: "IT Services", logo: "https://logo.clearbit.com/citridot.com" },
  { id: "coforge", name: "Coforge", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/coforge.com" },
  { id: "cognizant", name: "Cognizant", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/cognizant.com" },
  { id: "coresonant", name: "Coresonant", questionsCount: 5, industry: "IT Services", logo: "https://logo.clearbit.com/coresonant.com" },
  { id: "dxc", name: "DXC Technology", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/dxc.com" },
  { id: "evergent", name: "Evergent Technologies", questionsCount: 15, industry: "Product-based", logo: "https://logo.clearbit.com/evergent.com" },
  { id: "fieldproxy", name: "FieldProxy", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/fieldproxy.com" },
  { id: "genpact", name: "Genpact", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/genpact.com" },
  { id: "google", name: "Google", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/google.com" },
  { id: "greenwaveit", name: "GreenwaveIT", questionsCount: 28, industry: "IT Services", logo: "https://logo.clearbit.com/greenwaveit.com" },
  { id: "hexaware", name: "Hexaware Technologies", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/hexaware.com" },
  { id: "ibm", name: "IBM", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/ibm.com" },
  { id: "infosys", name: "Infosys", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/infosys.com" },
  { id: "intuite", name: "Intuite", questionsCount: 20, industry: "Fintech", logo: "https://logo.clearbit.com/intuit.com" },
  { id: "launchit", name: "Launch IT Consulting", questionsCount: 40, industry: "IT Services", logo: "https://logo.clearbit.com/launchit.com" },
  { id: "lionorbit", name: "Lion Orbit Tech", questionsCount: 12, industry: "IT Services", logo: "https://logo.clearbit.com/lionorbit.com" },
  { id: "mitr", name: "MITR Pvt Ltd", questionsCount: 18, industry: "IT Services", logo: "https://logo.clearbit.com/mitr.com" },
  { id: "meta", name: "Meta", questionsCount: 19, industry: "Product-based", logo: "https://logo.clearbit.com/meta.com" },
  { id: "microsoft", name: "Microsoft", questionsCount: 19, industry: "Product-based", logo: "https://logo.clearbit.com/microsoft.com" },
  { id: "mirabel", name: "Mirabel Technologies", questionsCount: 16, industry: "Product-based", logo: "https://logo.clearbit.com/mirabel.com" },
  { id: "mphasis", name: "Mphasis", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/mphasis.com" },
  { id: "navbrind", name: "Navbrind IT Solutions", questionsCount: 16, industry: "IT Services", logo: "https://logo.clearbit.com/navbrind.com" },
  { id: "neetable", name: "Neetable", questionsCount: 2, industry: "IT Services", logo: "https://logo.clearbit.com/neetable.com" },
  { id: "oracle", name: "Oracle", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/oracle.com" },
  { id: "persistent", name: "Persistent Systems", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/persistent.com" },
  { id: "qualcomm", name: "Qualcomm", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/qualcomm.com" },
  { id: "sap", name: "SAP", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/sap.com" },
  { id: "sketchbrahma", name: "Sketch Brahma", questionsCount: 10, industry: "IT Services", logo: "https://logo.clearbit.com/sketchbrahma.com" },
  { id: "salesforce", name: "Salesforce", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/salesforce.com" },
  { id: "servicenow", name: "ServiceNow", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/servicenow.com" },
  { id: "spotify", name: "Spotify", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/spotify.com" },
  { id: "tcs", name: "TCS", questionsCount: 10, industry: "IT Services", logo: "https://logo.clearbit.com/tcs.com" },
  { id: "techmahindra", name: "Tech Mahindra", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/techmahindra.com" },
  { id: "technovert", name: "Technovert", questionsCount: 14, industry: "IT Services", logo: "https://logo.clearbit.com/technovert.com" },
  { id: "tesla", name: "Tesla", questionsCount: 20, industry: "Product-based", logo: "https://logo.clearbit.com/tesla.com" },
  { id: "ustglobal", name: "UST Global", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/ust-global.com" },
  { id: "virtusa", name: "Virtusa", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/virtusa.com" },
  { id: "vithamas", name: "Vithamas", questionsCount: 45, industry: "IT Services", logo: "https://logo.clearbit.com/vithamas.com" },
  { id: "vollmond", name: "Vollmond", questionsCount: 12, industry: "IT Services", logo: "https://logo.clearbit.com/vollmond.com" },
  { id: "wipro", name: "Wipro", questionsCount: 10, industry: "IT Services", logo: "https://logo.clearbit.com/wipro.com" },
  { id: "yswnth", name: "YSWNTH", questionsCount: 15, industry: "IT Services", logo: "https://logo.clearbit.com/yswnth.com" },
  { id: "yanthra", name: "Yanthra", questionsCount: 38, industry: "IT Services", logo: "https://logo.clearbit.com/yanthra.com" },
  { id: "zensar", name: "Zensar Technologies", questionsCount: 20, industry: "IT Services", logo: "https://logo.clearbit.com/zensar.com" },
  { id: "codevyasa", name: "CodeVyasa", questionsCount: 4, industry: "IT Services", logo: "https://logo.clearbit.com/codevyasa.com" },
  { id: "ivgroups", name: "IV Groups Limited", questionsCount: 5, industry: "IT Services", logo: "https://logo.clearbit.com/ivgroups.com" },
  { id: "tekhtree", name: "Tekh Tree", questionsCount: 8, industry: "IT Services", logo: "https://logo.clearbit.com/tekhtree.com" },
  { id: "bank", name: "All-in-One Interview Bank", questionsCount: 500, industry: "General" },
];

export const TECH_DATA = [
  { id: "html", name: "HTML", icon: Globe, questionsCount: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: "css", name: "CSS", icon: Layout, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { id: "javascript", name: "JavaScript", icon: Terminal, questionsCount: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: "react", name: "React", icon: Cpu, questionsCount: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "redux", name: "Redux", icon: GitBranch, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { id: "sql", name: "SQL", icon: Database, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: "python", name: "Python", icon: Terminal, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: "mongodb", name: "MongoDB", icon: Leaf, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: "java", name: "Java", icon: Coffee, questionsCount: 30, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: "algorithm", name: "Algorithm", icon: Brain, questionsCount: 39 },
  { id: "blockchain", name: "Blockchain", icon: LinkIcon, questionsCount: 19 },
  { id: "datastructures", name: "Data Structures", icon: Layout, questionsCount: 39 },
  { id: "express", name: "ExpressJS", icon: Bolt, questionsCount: 30, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { id: "git", name: "Git", icon: GitBranch, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: "graphql", name: "GraphQL", icon: Network, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { id: "ml", name: "Machine Learning", icon: Bot, questionsCount: 19 },
  { id: "nextjs", name: "NextJS", icon: Layers, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: "nodejs", name: "NodeJS", icon: Terminal, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: "restapi", name: "REST APIs", icon: Plug, questionsCount: 19 },
  { id: "typescript", name: "TypeScript", icon: Type, questionsCount: 39, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

export const ROADMAPS_DATA = [
  { id: "ai-ml", name: "AI & ML", description: "Beginner → Advanced" },
  { id: "blockchain", name: "Blockchain", description: "Development Path" },
  { id: "datasci", name: "Data Science", description: "Complete Guide" },
  { id: "dsa", name: "DSA", description: "Problem Solving" },
  { id: "flutter", name: "Flutter", description: "Mobile Apps" },
  { id: "fullstack", name: "Full Stack", description: "Frontend + Backend" },
  { id: "javascript", name: "JavaScript", description: "Programming" },
  { id: "java", name: "Java", description: "Backend Dev" },
  { id: "mern", name: "MERN Stack", description: "JS Fullstack" },
  { id: "python", name: "Python", description: "Programming Path" },
  { id: "nextjs", name: "Next.js", description: "Fullstack React Framework" },
  { id: "react-native", name: "React Native", description: "Frontend Development Path" },
  { id: "prompt-engineering", name: "Prompt Engineering", description: "AI & LLM Interaction Skills" },
];

export const COMPANY_QUESTIONS = {
  accenture: [
    { q: "What is SDLC?", a: "SDLC (Software Development Life Cycle) is a process for planning, creating, testing, and deploying an information system, including stages like requirement analysis, design, coding, testing, and maintenance." },
    { q: "What are the types of SDLC models?", a: "Waterfall Model, Agile Model, Spiral Model, V-Model, and Iterative Model are major SDLC models, each with different approaches to software development." },
    { q: "What is Agile methodology?", a: "Agile is an iterative approach to software development that emphasizes flexibility, customer feedback, and continuous delivery of small, functional pieces of software." },
    { q: "What are Data Structures?", a: "Data Structures are ways of organizing and storing data for efficient access and modification. Examples include arrays, linked lists, stacks, queues, trees, and graphs." },
    { q: "Difference between Array and Linked List.", a: "Array stores elements in contiguous memory locations and has fixed size. Linked List stores elements non-contiguously with pointers and can grow dynamically." },
    { q: "What is the difference between C and C++?", a: "C is a procedural programming language, while C++ supports both procedural and object-oriented programming with features like classes, inheritance, and polymorphism." },
    { q: "What is an Object in OOPS?", a: "An object is an instance of a class that contains data and methods to operate on that data. It is a fundamental building block in OOPS." },
    { q: "Explain Polymorphism with an example.", a: "Polymorphism allows one interface to be used for a general class of actions. Example: Overloading add(int, int) and add(double, double)." },
    { q: "What is Overloading and Overriding?", a: "Overloading is having multiple methods with the same name but different parameters. Overriding is redefining a parent class method in a child class." },
    { q: "Difference between Procedural and Object-Oriented Programming.", a: "Procedural programming is based on procedures/functions. Object-Oriented programming organizes code into objects containing both data and behavior." },
    { q: "What is DBMS?", a: "DBMS (Database Management System) is software that manages databases and provides a systematic way to create, retrieve, update, and manage data." },
    { q: "What is Normalization in databases?", a: "Normalization organizes data to reduce redundancy and improve integrity. It involves splitting large tables into smaller ones and defining relationships." },
    { q: "Difference between SQL and NoSQL databases.", a: "SQL databases are relational (structured data), while NoSQL databases are non-relational (unstructured or semi-structured data) like MongoDB, Cassandra." },
    { q: "What are ACID properties in DBMS?", a: "ACID stands for Atomicity, Consistency, Isolation, and Durability — these ensure reliable transactions in databases." },
    { q: "What is Cloud Computing?", a: "Cloud computing delivers computing services like servers, storage, databases, networking, software over the internet to offer flexible resources and economies of scale." },
    { q: "What is Git?", a: "Git is a distributed version control system used to track changes in source code during software development, enabling collaboration among multiple developers." },
    { q: "What is REST API?", a: "REST API allows systems to communicate using HTTP methods like GET, POST, PUT, DELETE, usually sending data in JSON format." },
    { q: "Explain the concept of Multithreading.", a: "Multithreading is a feature that allows concurrent execution of two or more threads to maximize CPU utilization and efficiency." },
    { q: "Explain Encapsulation.", a: "Encapsulation is binding the data and code that manipulates it together, and restricting direct access to some of an object's components to maintain integrity." },
    { q: "What is Exception Handling?", a: "Exception handling is a method to handle runtime errors, ensuring the normal flow of the application using constructs like try, catch, throw, and finally." },
    { q: "What is the difference between a process and a thread?", a: "A process is an independent program with its own memory space. A thread is a subset of a process that shares the same memory space, allowing for faster communication but requiring synchronization." },
    { q: "What is a deadlock?", a: "A deadlock occurs when two or more processes are blocked, each waiting for a resource held by the other, resulting in a standstill." },
    { q: "What is a semaphore?", a: "A semaphore is a synchronization tool used to control access to a common resource by multiple processes in a concurrent system." },
    { q: "Explain the concept of Virtual Memory.", a: "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine." },
    { q: "What is a primary key in a database?", a: "A primary key is a unique identifier for a record in a table, ensuring that each row can be uniquely identified." },
    { q: "What is a foreign key?", a: "A foreign key is a field in one table that uniquely identifies a row of another table, establishing a relationship between the two." },
    { q: "What is a join in SQL?", a: "A join is used to combine rows from two or more tables based on a related column between them." },
    { q: "What is the difference between inner join and outer join?", a: "Inner join returns records with matching values in both tables. Outer join returns all records from one table and matching records from the other." },
    { q: "What is an index in a database?", a: "An index is a data structure that improves the speed of data retrieval operations on a table at the cost of additional storage and slower writes." },
  ],
  adobe: [
    { q: "What is a memory leak, and how can it be prevented in C++?", a: "A memory leak occurs when dynamically allocated memory is not deallocated, leading to wasted resources. In C++, it can be prevented by ensuring that every new has a corresponding delete, using smart pointers like std::unique_ptr or std::shared_ptr, and employing tools like Valgrind to detect leaks." },
    { q: "Explain the difference between a deep copy and a shallow copy.", a: "A shallow copy duplicates as little as possible, copying only the immediate values, which may include pointers to shared resources. A deep copy duplicates everything, including the objects pointed to, ensuring that the copy is entirely independent of the original." },
    { q: "How would you design a URL shortening service like bit.ly?", a: "Design involves generating unique short keys for URLs, storing mappings in a database, handling collisions, and ensuring scalability. Implementing features like analytics, custom aliases, and expiration times adds complexity. Caching and load balancing are essential for performance." },
    { q: "What are the differences between processes and threads?", a: "Processes are independent execution units with separate memory spaces, while threads are lighter-weight, sharing the same memory within a process. Threads allow for more efficient communication but require careful synchronization to avoid issues like race conditions." },
    { q: "Describe how a hash table works.", a: "A hash table uses a hash function to map keys to indices in an array, allowing for fast data retrieval. Collisions are handled using methods like chaining or open addressing. Proper hash function design is crucial for performance." },
    { q: "What is the difference between TCP and UDP?", a: "TCP is a connection-oriented protocol ensuring reliable data transmission with error checking and flow control. UDP is connectionless, faster, and suitable for applications where speed is critical, and occasional data loss is acceptable, like streaming." },
    { q: "Explain the concept of polymorphism in object-oriented programming.", a: "Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables methods to behave differently based on the object's actual class, facilitating flexibility and extensibility in code design." },
    { q: "How does garbage collection work in Java?", a: "Java's garbage collector automatically identifies and frees memory occupied by objects no longer in use. It uses algorithms like mark-and-sweep and generational collection to manage memory efficiently, reducing the likelihood of memory leaks." },
    { q: "What is the difference between overloading and overriding in Java?", a: "Overloading allows multiple methods with the same name but different parameters within the same class. Overriding involves redefining a method from a superclass in a subclass to provide specific behavior, enabling runtime polymorphism." },
    { q: "How would you find the middle element of a linked list?", a: "Use two pointers: a slow pointer that moves one node at a time and a fast pointer that moves two nodes at a time. When the fast pointer reaches the end, the pointer will be at the middle node." },
    { q: "Explain the producer-consumer problem and how to solve it.", a: "The producer-consumer problem involves coordinating producers and consumers sharing a common buffer. Solutions include using synchronization mechanisms like semaphores, mutexes, or condition variables to prevent race conditions and ensure proper sequencing." },
    { q: "What is the difference between a stack and a queue?", a: "A stack is a Last-In-First-Out (LIFO) data structure where the last element added is the first to be removed. A queue is a First-In-First-Out (FIFO) structure where the first element added is the first to be removed." },
    { q: "How would you detect a cycle in a directed graph?", a: "Use depth-first search (DFS) to traverse the graph, keeping track of visited nodes and the recursion stack. If a node is encountered that's already in the recursion stack, a cycle exists." },
    { q: "What is normalization in databases, and why is it important?", a: "Normalization is the process of organizing data to reduce redundancy and improve integrity. It involves dividing tables and defining relationships to ensure that each piece of data is stored only once, facilitating efficient updates and queries." },
    { q: "Explain the concept of deadlock and how to prevent it.", a: "Deadlock occurs when a set of processes are blocked, each waiting for resources held by others. Prevention strategies include resource ordering, avoiding circular wait, and using algorithms like the Banker's algorithm to allocate resources safely." },
    { q: "What are RESTful APIs, and how do they work?", a: "RESTful APIs adhere to REST principles, using standard HTTP methods (GET, POST, PUT, DELETE) for communication. They are stateless, meaning each request contains all necessary information, facilitating scalability and simplicity in web services." },
    { q: "How does a virtual function table (vtable) work in C++?", a: "A vtable is a mechanism used to support dynamic dispatch of virtual functions. Each class with virtual functions has a vtable containing pointers to the virtual functions. Objects have a pointer to their class's vtable, enabling runtime method resolution." },
    { q: "What is the difference between synchronous and asynchronous calls?", a: "Synchronous calls wait for the operation to complete before proceeding, leading to blocking behavior. Asynchronous calls allow the program to continue executing other tasks while waiting for the operation to complete, improving responsiveness." },
    { q: "How would you implement a singleton pattern in Java?", a: "A singleton ensures only one instance of a class exists. In Java, this can be implemented by making the constructor private, providing a static method that returns the instance, and ensuring thread safety through synchronization or using enums." },
    { q: "Explain the difference between compile-time and runtime errors.", a: "Compile-time errors are detected by the compiler before the program runs, such as syntax errors. Runtime errors occur during program execution, like division by zero or null pointer exceptions, and require proper handling to prevent crashes." },
  ],
  amazon: [
    { q: "Check if a binary tree is a BST.", a: "Perform an in-order traversal of the tree and ensure that the sequence is strictly increasing. Alternatively, recursively check that each node's value falls within valid min and max bounds, updating these bounds as you traverse the tree." },
    { q: "Reverse a linked list.", a: "Initialize three pointers: previous (null), current (head), and next (null). Iterate through the list, reversing the direction of the next pointer for each node. Continue until all nodes have been reversed, then return the new head." },
    { q: "Detect a cycle in a linked list.", a: "Utilize Floyd’s Tortoise and Hare algorithm by initializing two pointers at the head. Move one pointer one step and the other two steps at a time. If they meet, a cycle exists; if the faster pointer reaches the end, the list is acyclic." },
    { q: "Clone a linked list with next and random pointers.", a: "First, insert cloned nodes between original nodes. Then, set the random pointers of the cloned nodes by referencing the original node's random's next. Finally, separate the cloned list from the original to restore the original structure." },
    { q: "Find the missing number in an array from 1 to n.", a: "Calculate the expected sum of numbers from 1 to n using the formula n(n+1)/2. Subtract the actual sum of the array from this expected sum to find the missing number." },
    { q: "Find the first non-repeating character in a string.", a: "Use a hash map to store the frequency of each character. Then, iterate through the string again and return the first character with a frequency of one." },
    { q: "Implement a stack using queues.", a: "Use two queues. For push, add to the empty queue and then move all elements from the other queue to it. This makes the push operation O(n) and pop O(1)." },
    { q: "Find the lowest common ancestor in a BST.", a: "Starting from the root, if both nodes are smaller than the current node, move left. If both are larger, move right. Otherwise, the current node is the LCA." },
    { q: "Determine if two strings are anagrams.", a: "Sort both strings and compare them, or use a frequency array to count character occurrences in both strings and ensure they match." },
    { q: "Find the k-th largest element in an array.", a: "Use a min-heap of size k to keep track of the largest elements encountered. Alternatively, use the Quickselect algorithm for O(n) average time complexity." },
  ],
  apple: [
    { q: "Implement a function to reverse a linked list.", a: "To reverse a linked list, initialize three pointers: prev as null, current as the head, and next as null. Iterate through the list, updating the next pointer of each node to point to prev. After the loop, prev will be the new head of the reversed list." },
    { q: "Determine if a binary tree is a valid BST.", a: "Perform an in-order traversal of the tree, ensuring that the values are in strictly increasing order. Alternatively, recursively check that each node's value falls within valid min and max bounds." },
    { q: "Find the longest substring without repeating characters.", a: "Use a sliding window approach with two pointers and a set to track characters in the current window. Update the maximum length as the window expands." },
    { q: "Explain the difference between atomic and non-atomic properties in Objective-C/Swift.", a: "Atomic properties ensure thread safety by using locks during access, while non-atomic properties do not, making them faster but potentially unsafe in multi-threaded environments." },
    { q: "What is a memory leak, and how do you detect it?", a: "A memory leak occurs when memory is allocated but not freed. Detection can be done using tools like Xcode Instruments (Leaks and Allocations) or by monitoring memory usage over time." },
    { q: "Describe the MVC design pattern.", a: "MVC stands for Model-View-Controller. The Model handles data, the View displays the UI, and the Controller mediates between them, ensuring separation of concerns." },
    { q: "How do you handle concurrency in iOS?", a: "Concurrency can be handled using Grand Central Dispatch (GCD), OperationQueues, or the newer async/await syntax in Swift, allowing for background tasks and UI updates." },
    { q: "What is the difference between a struct and a class in Swift?", a: "Structs are value types (copied when passed), while classes are reference types (shared instance). Structs do not support inheritance, whereas classes do." },
    { q: "Explain the concept of optional chaining in Swift.", a: "Optional chaining allows you to call properties, methods, and subscripts on an optional that might be nil. If the optional is nil, the call fails gracefully and returns nil." },
    { q: "What is the purpose of the 'defer' keyword in Swift?", a: "The 'defer' keyword is used to execute a block of code just before the current scope is exited, regardless of how it's exited (e.g., return, error)." },
  ],
  capgemini: [
    { q: "What is the difference between an Abstract class and an Interface in Java?", a: "An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods (until Java 8). Abstract classes support single inheritance, whereas interfaces allow multiple inheritance." },
    { q: "What is a Singleton class?", a: "A Singleton class ensures that only one instance of the class is created. It provides a global point of access to that instance, typically using a private constructor and a static method." },
    { q: "What are the differences between '==' and 'equals()' in Java?", a: "'==' compares memory references (addresses), while 'equals()' compares the actual content or values of the objects, provided it's overridden." },
    { q: "Explain the concept of Method Overloading vs Overriding.", a: "Overloading occurs within the same class with different parameters. Overriding occurs in a subclass to provide a specific implementation of a method already defined in the superclass." },
    { q: "What is the 'final' keyword in Java?", a: "The 'final' keyword can be applied to variables (constant), methods (cannot be overridden), and classes (cannot be inherited)." },
    { q: "What is the purpose of the 'static' keyword?", a: "The 'static' keyword indicates that a member belongs to the class itself rather than to instances of the class. It can be applied to variables, methods, and blocks." },
    { q: "Explain Exception Handling in Java.", a: "Exception handling uses try, catch, finally, throw, and throws to manage runtime errors and maintain the normal flow of the application." },
    { q: "What is the Java Collections Framework?", a: "The Collections Framework provides a set of classes and interfaces (like List, Set, Map) for storing and manipulating groups of objects efficiently." },
    { q: "What is a constructor in Java?", a: "A constructor is a special method used to initialize objects. It has the same name as the class and no return type." },
    { q: "Difference between ArrayList and LinkedList.", a: "ArrayList uses a dynamic array (faster access), while LinkedList uses a doubly-linked list (faster insertion/deletion)." },
  ],
  google: [
    { q: "Describe how Dijkstra’s algorithm works.", a: "Dijkstra’s algorithm finds the shortest path from a source node to all other nodes in a weighted graph. It uses a priority queue to always explore the nearest unvisited node first, updating distances as it goes." },
    { q: "Explain how hash tables function.", a: "A hash table uses a hash function to map keys to indices in an array, allowing for O(1) average time complexity for insertion, deletion, and lookup." },
    { q: "How would you find the k-th smallest element in an unsorted array?", a: "Use a max-heap of size k or the Quickselect algorithm, which has an average time complexity of O(n)." },
    { q: "What is the difference between a process and a thread?", a: "A process is an independent program with its own memory space. A thread is a subset of a process that shares the same memory space, allowing for faster communication but requiring synchronization." },
    { q: "Explain the concept of MapReduce.", a: "MapReduce is a programming model for processing large data sets in parallel across a cluster. It involves a 'Map' step (filtering/sorting) and a 'Reduce' step (summary operation)." },
    { q: "How does the PageRank algorithm work?", a: "PageRank measures the importance of website pages by analyzing the number and quality of links to them, essentially treating links as votes." },
    { q: "What is a Trie data structure?", a: "A Trie (prefix tree) is a tree-like data structure used for efficient retrieval of keys in a large dataset of strings, often used for autocomplete features." },
    { q: "Explain the CAP theorem in distributed systems.", a: "The CAP theorem states that a distributed system can only provide two out of three guarantees: Consistency, Availability, and Partition Tolerance." },
    { q: "How do you handle large-scale data storage?", a: "Large-scale storage is handled using distributed file systems (like GFS/HDFS), NoSQL databases (like BigTable/Cassandra), and data sharding techniques." },
    { q: "What is the difference between TCP and QUIC?", a: "TCP is a reliable, connection-oriented protocol. QUIC is a newer protocol built on UDP that reduces latency and improves performance for web applications." },
  ],
  bank: BANK_QUESTIONS
};

export const TECH_QUESTIONS = {
  html: [
    { q: "What is HTML?", a: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically." },
    { q: "What is the difference between HTML and HTML5?", a: "HTML5 is the latest version of HTML, introducing new elements (like <video>, <audio>, <canvas>), better support for local storage, and improved semantic tags." },
    { q: "What are semantic elements in HTML?", a: "Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples include <header>, <footer>, <article>, and <section>." },
    { q: "What is the purpose of the <!DOCTYPE html> declaration?", a: "The <!DOCTYPE html> declaration tells the browser that the document is an HTML5 document, ensuring it's rendered correctly in standard mode." },
    { q: "Explain the difference between <div> and <span>.", a: "<div> is a block-level element used for grouping large sections of content. <span> is an inline element used for styling or grouping small portions of text." },
    { q: "What are HTML attributes?", a: "Attributes provide additional information about HTML elements, such as 'src' for images, 'href' for links, and 'id' or 'class' for styling and scripting." },
    { q: "What is an iframe in HTML?", a: "An iframe (inline frame) is used to embed another document within the current HTML document, such as a YouTube video or a map." },
    { q: "How do you create a hyperlink in HTML?", a: "Use the <a> (anchor) tag with the 'href' attribute specifying the destination URL." },
    { q: "What is the difference between an ordered list and an unordered list?", a: "An ordered list (<ol>) displays items with numbers or letters, while an unordered list (<ul>) displays items with bullets." },
    { q: "What is the purpose of the 'alt' attribute for images?", a: "The 'alt' attribute provides alternative text for an image if it cannot be displayed, which is also crucial for accessibility (screen readers)." },
  ],
  css: [
    { q: "What is CSS?", a: "CSS (Cascading Style Sheets) is used to style and layout web pages, including altering the font, color, size, and spacing of content." },
    { q: "What is the Box Model in CSS?", a: "The CSS Box Model is a container that contains multiple properties, including borders, margin, padding, and the content itself." },
    { q: "Explain the difference between 'id' and 'class' selectors.", a: "An 'id' selector is unique to a single element, while a 'class' selector can be applied to multiple elements on a page." },
    { q: "What are CSS pseudo-classes?", a: "Pseudo-classes are used to define a special state of an element, such as ':hover' when a mouse is over it or ':active' when it's clicked." },
    { q: "How do you center a div horizontally and vertically?", a: "One common way is using Flexbox: 'display: flex; justify-content: center; align-items: center;' on the parent container." },
    { q: "What is the difference between 'relative', 'absolute', 'fixed', and 'sticky' positioning?", a: "'relative' is relative to its normal position. 'absolute' is relative to its nearest positioned ancestor. 'fixed' is relative to the viewport. 'sticky' toggles between relative and fixed based on scroll position." },
    { q: "What is a CSS preprocessor?", a: "A preprocessor (like Sass or Less) is a tool that extends CSS with variables, nested rules, and functions, which are then compiled into standard CSS." },
    { q: "What is the 'z-index' property?", a: "The 'z-index' property specifies the stack order of an element. An element with a higher z-index is always in front of an element with a lower z-index." },
    { q: "Explain the concept of media queries.", a: "Media queries allow you to apply different styles based on the device's characteristics, such as screen width, which is essential for responsive design." },
    { q: "What is the difference between 'px', 'em', and 'rem' units?", a: "'px' is a fixed unit. 'em' is relative to the font size of its parent. 'rem' is relative to the font size of the root element (<html>)." },
  ],
  javascript: [
    { q: "What is JavaScript?", a: "JavaScript is a high-level, interpreted programming language used to make web pages interactive and build complex web applications." },
    { q: "What are the different data types in JavaScript?", a: "Primitive types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Non-primitive types include Object (including Arrays and Functions)." },
    { q: "Explain the difference between 'var', 'let', and 'const'.", a: "'var' is function-scoped and can be hoisted. 'let' and 'const' are block-scoped. 'const' cannot be reassigned after initialization." },
    { q: "What is a closure in JavaScript?", a: "A closure is a function that has access to its outer function's scope even after the outer function has returned." },
    { q: "What is hoisting?", a: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution." },
    { q: "Explain the 'this' keyword.", a: "The 'this' keyword refers to the object it belongs to. Its value depends on how the function is called (global, object method, constructor, etc.)." },
    { q: "What are arrow functions?", a: "Arrow functions provide a shorter syntax for writing functions and do not have their own 'this' context, inheriting it from the parent scope." },
    { q: "What is the difference between '==' and '==='?", a: "'==' performs type coercion before comparison, while '===' (strict equality) compares both value and type without coercion." },
    { q: "Explain Promises in JavaScript.", a: "Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value." },
    { q: "What is the Event Loop?", a: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible." },
  ]
};

export const ROADMAP_STEPS = {
  "ai-ml": [
    { title: "Phase 1: Introduction & Environment Setup", items: ["Install Python, Jupyter, Anaconda & VS Code", "Intro to AI, ML & DL real-world applications", "Git & GitHub version control basics"] },
    { title: "Phase 2: Python Programming for AIML", items: ["Python fundamentals (variables, loops, functions, OOP)", "Mini Project: Data Explorer using Python"] },
    { title: "Phase 3: Data Analysis & Visualization", items: ["NumPy & Pandas for data handling", "Matplotlib & Seaborn for visualization", "Project: Titanic EDA Analysis"] },
    { title: "Phase 4: Mathematics for Machine Learning", items: ["Linear Algebra, Calculus & Statistics", "Probability & Distributions", "Optimization Techniques"] },
    { title: "Phase 5: Machine Learning Core Concepts", items: ["Supervised Learning (Regression, Classification)", "Unsupervised Learning (Clustering, PCA)", "Model Evaluation Metrics"] },
    { title: "Phase 6: Deep Learning Foundations", items: ["Neural Networks & Backpropagation", "Activation Functions & Optimizers", "Keras & TensorFlow Basics"] },
    { title: "Phase 7: Computer Vision (CV)", items: ["CNNs & Image Processing", "Object Detection (YOLO, SSD)", "Project: Face Recognition System"] },
    { title: "Phase 8: Natural Language Processing (NLP)", items: ["Text Preprocessing & Word Embeddings", "RNNs, LSTMs & Transformers", "Project: Sentiment Analysis Bot"] },
    { title: "Phase 9: Generative AI & LLMs", items: ["Intro to GANs & Diffusion Models", "Large Language Models (GPT, Llama)", "Prompt Engineering & Fine-tuning"] },
    { title: "Phase 10: Model Deployment (MLOps)", items: ["Flask/FastAPI for Model APIs", "Docker & Kubernetes Basics", "Cloud Deployment (AWS/GCP/Azure)"] },
    { title: "Phase 11: Capstone Project & Portfolio", items: ["End-to-End AI Project", "Portfolio Building & Resume Optimization", "Interview Preparation"] },
  ],
  "blockchain": [
    { title: "Phase 1: Blockchain Fundamentals", items: ["What is Blockchain? (Decentralization, Immutability)", "How it works: Blocks, Hashing, Consensus", "Types of Blockchains: Public, Private, Hybrid"] },
    { title: "Phase 2: Cryptography Basics", items: ["Symmetric vs Asymmetric Encryption", "Digital Signatures & Wallets", "Merkle Trees & Proof of Work/Stake"] },
    { title: "Phase 3: Ethereum & Smart Contracts", items: ["Introduction to Ethereum & EVM", "Writing Smart Contracts with Solidity", "Remix IDE & Deployment Basics"] },
    { title: "Phase 4: Advanced Solidity", items: ["State Variables, Functions, Modifiers", "Mappings, Structs, Arrays", "Events & Error Handling"] },
    { title: "Phase 5: Web3 Development Tools", items: ["Truffle & Hardhat Frameworks", "Web3.js & Ethers.js Libraries", "Connecting Frontend to Blockchain"] },
    { title: "Phase 6: Decentralized Apps (DApps)", items: ["Building a Full-stack DApp", "IPFS for Decentralized Storage", "Metamask Integration"] },
    { title: "Phase 7: DeFi & Tokens", items: ["ERC-20 & ERC-721 (NFTs) Standards", "Introduction to DeFi Protocols", "Yield Farming & Liquidity Pools"] },
    { title: "Phase 8: Layer 2 & Scaling", items: ["Sidechains & Rollups", "Polygon, Arbitrum, Optimism", "Cross-chain Bridges"] },
    { title: "Phase 9: Security & Auditing", items: ["Common Smart Contract Vulnerabilities", "Security Best Practices", "Auditing Tools (Slither, Mythril)"] },
    { title: "Phase 10: Career & Projects", items: ["Building a Portfolio of DApps", "Contributing to Open Source Web3", "Blockchain Interview Prep"] },
  ],
  "datasci": [
    { title: "Phase 1: Foundations & Python", items: ["Python Basics & Advanced Concepts", "Data Structures in Python", "Environment Setup (Jupyter, VS Code)"] },
    { title: "Phase 2: Statistics & Probability", items: ["Descriptive & Inferential Statistics", "Hypothesis Testing", "Probability Distributions"] },
    { title: "Phase 3: Data Manipulation", items: ["Pandas for Data Wrangling", "NumPy for Numerical Computing", "Data Cleaning Techniques"] },
    { title: "Phase 4: Data Visualization", items: ["Matplotlib & Seaborn", "Plotly for Interactive Charts", "Storytelling with Data"] },
    { title: "Phase 5: SQL for Data Science", items: ["Relational Database Basics", "Advanced SQL Queries", "Connecting Python to SQL"] },
    { title: "Phase 6: Machine Learning Basics", items: ["Regression & Classification", "Clustering & Dimensionality Reduction", "Scikit-Learn Library"] },
    { title: "Phase 7: Advanced Machine Learning", items: ["Ensemble Methods (Random Forest, XGBoost)", "Model Tuning & Validation", "Feature Engineering"] },
    { title: "Phase 8: Deep Learning Intro", items: ["Neural Networks Basics", "TensorFlow or PyTorch", "Building Simple Models"] },
    { title: "Phase 9: Big Data & Cloud", items: ["Introduction to Spark", "Cloud Platforms (AWS/GCP)", "Data Pipelines Basics"] },
    { title: "Phase 10: Projects & Portfolio", items: ["End-to-End Data Science Project", "Building a GitHub Portfolio", "Resume & Interview Prep"] },
  ],
  "dsa": [
    { title: "Phase 1: Basics & Complexity", items: ["Time & Space Complexity Analysis", "Recursion Fundamentals", "Basic Sorting & Searching"] },
    { title: "Phase 2: Linear Data Structures", items: ["Arrays & Strings", "Linked Lists (Single, Double, Circular)", "Stacks & Queues"] },
    { title: "Phase 3: Non-Linear Data Structures", items: ["Trees (Binary, BST, AVL)", "Heaps & Priority Queues", "Hashing & Hash Tables"] },
    { title: "Phase 4: Advanced Algorithms", items: ["Graph Algorithms (BFS, DFS, Dijkstra)", "Dynamic Programming (DP)", "Greedy Algorithms"] },
    { title: "Phase 5: Problem Solving Patterns", items: ["Sliding Window & Two Pointers", "Backtracking", "Bit Manipulation"] },
    { title: "Phase 6: Interview Prep", items: ["Solving LeetCode/HackerRank Problems", "Mock Coding Interviews", "Company Specific DSA Patterns"] },
  ],
  "flutter": [
    { title: "Phase 1: Dart Fundamentals", items: ["Variables, Data Types, Operators", "Functions & OOP in Dart", "Asynchronous Programming (Futures, Streams)"] },
    { title: "Phase 2: Flutter Basics", items: ["Introduction to Widgets", "Stateless vs Stateful Widgets", "Material & Cupertino Design"] },
    { title: "Phase 3: Layouts & UI", items: ["Row, Column, Stack, Container", "ListView & GridView", "Responsive Design in Flutter"] },
    { title: "Phase 4: Navigation & Routing", items: ["Navigator 1.0 & 2.0", "Named Routes", "Passing Data between Screens"] },
    { title: "Phase 5: State Management", items: ["Provider, Riverpod, or Bloc", "GetX for simple apps", "Managing Global State"] },
    { title: "Phase 6: API Integration", items: ["HTTP Package & Dio", "JSON Parsing & Serialization", "Handling API Errors"] },
    { title: "Phase 7: Local Storage", items: ["Shared Preferences", "SQLite (sqflite)", "Hive for NoSQL storage"] },
    { title: "Phase 8: Firebase Integration", items: ["Authentication & Firestore", "Cloud Messaging (Push Notifications)", "Firebase Storage"] },
    { title: "Phase 9: Animations & Custom UI", items: ["Implicit & Explicit Animations", "Custom Painter", "Lottie Animations"] },
    { title: "Phase 10: Testing & Debugging", items: ["Unit, Widget, and Integration Testing", "Debugging Tools in VS Code/Android Studio", "Performance Profiling"] },
    { title: "Phase 11: Deployment", items: ["App Store & Play Store Guidelines", "CI/CD for Flutter", "Building for Web & Desktop"] },
  ],
  "fullstack": [
    { title: "Phase 1: Introduction & Ideation", items: ["Introduction to full-stack development, MVP concepts, and brainstorming app ideas.", "Explore mini project ideas and basic implementations to get hands-on practice.", "Build MVPs without code - focus on UX, UI, and wireframes (Figma, Whimsical)."] },
    { title: "Phase 2: Frontend Foundations", items: ["React Mini Projects with HTML, CSS, JS - understand React basics.", "Build a Signature App - practice user interaction and data handling.", "Build a YouTube Clone – layout, media integration, routing."] },
    { title: "Phase 3: Backend & Database", items: ["Node.js & Express Basics", "REST API Development", "MongoDB & Mongoose Integration"] },
    { title: "Phase 4: Fullstack Integration", items: ["Connecting Frontend to Backend", "Authentication (JWT/Auth0)", "Deployment (Vercel/Heroku/Render)"] },
  ],
  "javascript": [
    { title: "Phase 1: JS Basics", items: ["Variables (let, const, var)", "Data Types & Operators", "Control Flow (If, Switch, Loops)"] },
    { title: "Phase 2: Functions & Scope", items: ["Function Declarations vs Expressions", "Arrow Functions", "Global vs Local Scope"] },
    { title: "Phase 3: Objects & Arrays", items: ["Object Literals & Methods", "Array Methods (map, filter, reduce)", "Destructuring & Spread Operator"] },
    { title: "Phase 4: DOM Manipulation", items: ["Selecting & Modifying Elements", "Event Listeners", "Creating Elements Dynamically"] },
    { title: "Phase 5: Asynchronous JS", items: ["Callbacks & Promises", "Async/Await", "Fetch API & AJAX"] },
    { title: "Phase 6: ES6+ Features", items: ["Classes & Modules", "Template Literals", "Optional Chaining"] },
    { title: "Phase 7: Advanced Concepts", items: ["Closures & Hoisting", "Prototypal Inheritance", "This Keyword & Context"] },
  ],
  "java": [
    { title: "Phase 1: Java Fundamentals", items: ["Syntax, Variables, Data Types", "Control Statements (Loops, If-Else)", "Arrays & Strings"] },
    { title: "Phase 2: Object-Oriented Programming", items: ["Classes, Objects, Constructors", "Inheritance, Polymorphism, Encapsulation", "Abstraction & Interfaces"] },
    { title: "Phase 3: Advanced Java", items: ["Exception Handling", "Collections Framework (List, Set, Map)", "Multithreading & Concurrency"] },
    { title: "Phase 4: Java Ecosystem", items: ["JDBC for Database Connection", "Introduction to Spring Boot", "Maven/Gradle Build Tools"] },
  ],
  "mern": [
    { title: "Phase 1: MongoDB", items: ["NoSQL Basics", "CRUD Operations", "Data Modeling with Mongoose"] },
    { title: "Phase 2: Express.js", items: ["Server Setup", "Routing & Middleware", "Error Handling"] },
    { title: "Phase 3: React.js", items: ["Components & Props", "State Management (Hooks)", "React Router"] },
    { title: "Phase 4: Node.js", items: ["Event Loop & Modules", "File System & Streams", "NPM Ecosystem"] },
    { title: "Phase 5: Authentication", items: ["JWT & Cookies", "Password Hashing (bcrypt)", "Protected Routes"] },
    { title: "Phase 6: State Management", items: ["Redux Toolkit or Context API", "Async Thunks", "Global State Patterns"] },
    { title: "Phase 7: Deployment", items: ["Heroku/Render for Backend", "Netlify/Vercel for Frontend", "CI/CD Basics"] },
  ],
  "python": [
    { title: "Phase 1: Python Basics", items: ["Variables, Types, Operators", "Input/Output", "Basic Math Operations"] },
    { title: "Phase 2: Control Flow", items: ["If-Else Statements", "For & While Loops", "Break & Continue"] },
    { title: "Phase 3: Data Structures", items: ["Lists, Tuples, Sets", "Dictionaries", "List Comprehensions"] },
    { title: "Phase 4: Functions & Modules", items: ["Defining Functions", "Arguments & Return Values", "Importing Libraries"] },
    { title: "Phase 5: File Handling", items: ["Reading & Writing Files", "Working with CSV/JSON", "Error Handling (Try-Except)"] },
    { title: "Phase 6: OOP in Python", items: ["Classes & Objects", "Inheritance & Methods", "Decorators & Generators"] },
    { title: "Phase 7: Python Libraries", items: ["NumPy & Pandas Basics", "Requests for APIs", "Introduction to Flask/Django"] },
  ],
  "nextjs": [
    { title: "Phase 1: Next.js Basics", items: ["File-based Routing", "Pages vs App Router", "Linking & Navigation"] },
    { title: "Phase 2: Data Fetching", items: ["Server-side Rendering (SSR)", "Static Site Generation (SSG)", "Incremental Static Regeneration (ISR)"] },
    { title: "Phase 3: API Routes", items: ["Creating Backend Endpoints", "Handling Requests & Responses", "Middleware in Next.js"] },
    { title: "Phase 4: Styling & UI", items: ["Tailwind CSS Integration", "CSS Modules", "Image Optimization"] },
    { title: "Phase 5: Advanced Features", items: ["Authentication (NextAuth.js)", "SEO Optimization", "Dynamic Imports"] },
    { title: "Phase 6: Deployment", items: ["Deploying to Vercel", "Environment Variables", "Analytics & Monitoring"] },
  ],
  "react-native": [
    { title: "Phase 1: Introduction", items: ["Setup Environment (Expo vs CLI)", "Project Structure", "React vs React Native"] },
    { title: "Phase 2: Core Components", items: ["View, Text, Image, ScrollView", "TextInput & Buttons", "FlatList & SectionList"] },
    { title: "Phase 3: Styling", items: ["StyleSheet API", "Flexbox Layout", "Responsive Design"] },
    { title: "Phase 4: Navigation", items: ["React Navigation (Stack, Tab, Drawer)", "Deep Linking", "Navigation Params"] },
    { title: "Phase 5: State Management", items: ["Hooks (useState, useEffect)", "Context API", "Redux Toolkit Integration"] },
    { title: "Phase 6: Working with APIs", items: ["Fetch & Axios", "Handling Network Requests", "Displaying Data"] },
    { title: "Phase 7: Device Features", items: ["Camera & Gallery Access", "Location Services", "Push Notifications"] },
    { title: "Phase 8: Forms & Validation", items: ["Formik & Yup", "Handling User Input", "Error Messages"] },
    { title: "Phase 9: Performance & Debugging", items: ["Debugging with Flipper", "Optimizing Lists", "Native Modules Intro"] },
    { title: "Phase 10: Publishing", items: ["Building for iOS & Android", "App Store/Play Store Submission", "OTA Updates (Expo)"] },
  ],
  "prompt-engineering": [
    { title: "Phase 1: AI Fundamentals", items: ["How LLMs Work", "Tokens & Context Window", "Temperature & Top-P Settings"] },
    { title: "Phase 2: Prompting Techniques", items: ["Zero-shot & Few-shot Prompting", "Chain-of-Thought (CoT)", "Role-based Prompting"] },
    { title: "Phase 3: Advanced Strategies", items: ["Iterative Prompt Development", "Handling Hallucinations", "Prompt Templates"] },
    { title: "Phase 4: Tools & Integration", items: ["Using OpenAI/Anthropic APIs", "LangChain Basics", "Building AI-powered Apps"] },
  ],
};

export const UNIVERSAL_QUESTIONS = [
  // --- OOPS & Programming Basics ---
  { 
    q: "What is OOPS?", 
    a: "Object-Oriented Programming System (OOPS) is a programming paradigm based on the concept of 'objects', which can contain data (attributes) and code (methods). It aims to implement real-world entities like inheritance, hiding, polymorphism, etc., in programming. The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function. The four pillars of OOPS are:\n1. Encapsulation: Wrapping data and methods together.\n2. Abstraction: Hiding internal details and showing only functionality.\n3. Inheritance: Acquiring properties of one class into another.\n4. Polymorphism: Ability to take multiple forms." 
  },
  { 
    q: "What is a Class?", 
    a: "A class is a user-defined data type that acts as a blueprint or template for creating objects. It represents the set of properties or methods that are common to all objects of one type. For example, if 'Car' is a class, it would define properties like 'color', 'model', and 'speed', and behaviors like 'accelerate()' and 'brake()'. A class does not occupy memory until an object is instantiated." 
  },
  { 
    q: "What is an Object?", 
    a: "An object is a real-world entity that is an instance of a class. It has a state (fields/variables), behavior (methods), and identity (unique address). Objects are created from classes and occupy memory. For example, if 'Car' is a class, then a specific red Toyota Corolla is an object of that class. Objects interact with one another by invoking methods." 
  },
  { 
    q: "What is Encapsulation?", 
    a: "Encapsulation is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. This is also known as data hiding. It is achieved by declaring the variables of a class as private and providing public setter and getter methods to modify and view the variables values." 
  },
  { 
    q: "What is Abstraction?", 
    a: "Abstraction is the process of hiding the implementation details and showing only the functionality to the user. In other words, it shows only essential things to the user and hides the internal details, for example, sending an SMS where you type the text and send the message. You don't know the internal processing about the message delivery. Abstraction lets you focus on what the object does instead of how it does it. In Java, abstraction is achieved using Abstract Classes and Interfaces." 
  },
  { 
    q: "What is Inheritance?", 
    a: "Inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object. It represents the IS-A relationship (parent-child relationship). It is used for Code Reusability and Method Overriding (so runtime polymorphism can be achieved). The class which inherits the properties of another is known as the subclass (derived class, child class) and the class whose properties are inherited is known as the superclass (base class, parent class)." 
  },
  { 
    q: "What is Polymorphism?", 
    a: "Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object. It allows you to define one interface and have multiple implementations. There are two types of polymorphism:\n1. Compile-time polymorphism (Static binding): Achieved through Method Overloading.\n2. Runtime polymorphism (Dynamic binding): Achieved through Method Overriding." 
  },
  { 
    q: "What is a Constructor?", 
    a: "A constructor is a block of code similar to a method that is called when an instance of an object is created. Differences between a constructor and a method:\n1. Constructor name must be the same as its class name.\n2. A Constructor must have no explicit return type.\n3. A Java constructor cannot be abstract, static, final, and synchronized.\nConstructors are used to initialize the state of an object." 
  },
  { 
    q: "What is a Destructor?", 
    a: "A destructor is a special method called automatically when an object is destroyed or goes out of scope. Its main purpose is to free up resources (memory, file handles, database connections) that the object may have acquired during its lifetime. In languages like C++, destructors are explicit (prefixed with ~). In Java, garbage collection handles memory, but a 'finalize()' method (deprecated) was used for similar cleanup." 
  },
  { 
    q: "Difference between Overloading and Overriding?", 
    a: "Method Overloading happens when two or more methods in the same class have the same name but different parameters (different type, number, or sequence of arguments). It is a form of compile-time polymorphism.\nMethod Overriding happens when a subclass provides a specific implementation of a method that is already provided by its parent class. The method signature (name, parameters, return type) must be exactly the same. It is a form of runtime polymorphism." 
  },
  { 
    q: "What is an Interface?", 
    a: "An interface is a reference type in Java (and similar languages) that is similar to a class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface. Interfaces are used to achieve total abstraction and multiple inheritance. All methods in an interface are implicitly public and abstract, and all variables are implicitly public, static, and final." 
  },
  { 
    q: "What is an Abstract Class?", 
    a: "An abstract class is a class that is declared with the 'abstract' keyword. It may contain abstract methods (methods without a body) as well as concrete methods (methods with a body). An abstract class cannot be instantiated (you cannot create an object of it). It is meant to be subclassed, and its abstract methods must be implemented by the subclasses (unless the subclass is also abstract)." 
  },
  { 
    q: "What is 'this' keyword?", 
    a: "The 'this' keyword is a reference variable that refers to the current object. It can be used to:\n1. Refer to current class instance variables (to resolve ambiguity between instance variables and parameters).\n2. Invoke current class constructor.\n3. Return the current class instance.\n4. Pass the current object as a parameter to a method or constructor." 
  },
  { 
    q: "What is 'super' keyword?", 
    a: "The 'super' keyword is a reference variable that is used to refer to the immediate parent class object. It is used to:\n1. Refer to the immediate parent class instance variable.\n2. Invoke the immediate parent class method.\n3. Invoke the immediate parent class constructor (must be the first statement in the child constructor)." 
  },
  { 
    q: "What is Static Binding vs Dynamic Binding?", 
    a: "Static Binding (Early Binding) occurs when the method to be called is determined at compile-time. This happens with static, private, and final methods, as well as overloaded methods. Dynamic Binding (Late Binding) occurs when the method to be called is determined at runtime based on the actual object type. This happens with method overriding in polymorphism." 
  },
  { 
    q: "What is a Friend Function?", 
    a: "In C++, a friend function is a function that is not a member of a class but has access to its private and protected members. It is declared using the 'friend' keyword inside the class. Friend functions are useful for operator overloading and allowing specific external functions to access internal class data without making that data public." 
  },
  { 
    q: "What is Exception Handling?", 
    a: "Exception handling is a mechanism to handle runtime errors (exceptions) so that the normal flow of the application can be maintained. It uses the following keywords:\n- try: Block of code where an exception might occur.\n- catch: Block of code to handle the exception.\n- finally: Block of code that always executes (used for cleanup).\n- throw: Used to explicitly throw an exception.\n- throws: Used to declare exceptions." 
  },
  { 
    q: "What is the difference between Error and Exception?", 
    a: "An Error indicates a serious problem that a reasonable application should not try to catch (e.g., OutOfMemoryError, StackOverflowError). Errors are usually irrecoverable. An Exception indicates conditions that a reasonable application might want to catch (e.g., NullPointerException, IOException). Exceptions can be handled using try-catch blocks." 
  },
  { 
    q: "What is Garbage Collection?", 
    a: "Garbage Collection (GC) is the process of automatically identifying and reclaiming memory that is no longer in use by the program. In languages like Java and Python, the GC runs in the background and deallocates memory for objects that are no longer reachable (referenced) by any part of the program, preventing memory leaks and manual memory management errors." 
  },
  { 
    q: "What is a Memory Leak?", 
    a: "A memory leak occurs when a program allocates memory but fails to release it back to the system after it is no longer needed. Over time, these unreleased memory blocks accumulate, reducing the available memory for the application and the system, eventually leading to performance degradation or a crash (OutOfMemoryError)." 
  },

  // --- Data Structures ---
  { 
    q: "What is a Data Structure?", 
    a: "A data structure is a specialized format for organizing, processing, retrieving, and storing data. It enables efficient access and modification. Data structures are divided into two types:\n1. Linear Data Structures: Elements are arranged sequentially (e.g., Array, Linked List, Stack, Queue).\n2. Non-Linear Data Structures: Elements are arranged hierarchically or interconnected (e.g., Tree, Graph)." 
  },
  { 
    q: "What is an Array?", 
    a: "An array is a collection of items stored at contiguous memory locations. It allows random access to elements using an index (O(1) time complexity). However, arrays have a fixed size, and insertion or deletion of elements requires shifting other elements, making these operations costly (O(n))." 
  },
  { 
    q: "What is a Linked List?", 
    a: "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (node) contains a data field and a reference (link) to the next node in the sequence. Linked lists allow dynamic memory allocation and efficient insertion/deletion (O(1) if pointer is known), but access time is linear (O(n)) as you must traverse from the head." 
  },
  { 
    q: "Difference between Array and Linked List?", 
    a: "1. Memory: Arrays use contiguous memory; Linked Lists use non-contiguous memory.\n2. Size: Arrays have a fixed size; Linked Lists are dynamic.\n3. Access: Arrays support O(1) random access; Linked Lists require O(n) sequential access.\n4. Insertion/Deletion: Costly in Arrays (shifting needed); Efficient in Linked Lists (pointer updates)." 
  },
  { 
    q: "What is a Stack?", 
    a: "A stack is a linear data structure that follows the LIFO (Last In First Out) principle. The element inserted last is the first one to be removed. Common operations are Push (add), Pop (remove), and Peek (view top). Stacks are used in function call management (recursion), undo mechanisms in editors, and expression evaluation." 
  },
  { 
    q: "What is a Queue?", 
    a: "A queue is a linear data structure that follows the FIFO (First In First Out) principle. The element inserted first is the first one to be removed. Common operations are Enqueue (add to rear) and Dequeue (remove from front). Queues are used in task scheduling, printer spooling, and handling requests in web servers." 
  },
  { 
    q: "What is a Hash Table?", 
    a: "A hash table is a data structure that implements an associative array, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. It offers average O(1) time complexity for search, insert, and delete operations. Collisions (when two keys hash to the same index) are handled using chaining or open addressing." 
  },
  { 
    q: "What is a Binary Tree?", 
    a: "A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. It is the foundation for more complex structures like Binary Search Trees (BST), Heaps, and AVL trees." 
  },
  { 
    q: "What is a Binary Search Tree (BST)?", 
    a: "A Binary Search Tree (BST) is a binary tree with the property that for any given node, all values in its left subtree are smaller, and all values in its right subtree are larger. This property enables efficient searching, insertion, and deletion operations with an average time complexity of O(log n)." 
  },
  { 
    q: "What is a Graph?", 
    a: "A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections between nodes). Graphs can be directed or undirected, weighted or unweighted. They are used to model real-world networks like social media connections, road maps, and internet routing." 
  },
  { 
    q: "Difference between Stack and Queue?", 
    a: "The primary difference is the order of operations. A Stack follows LIFO (Last In First Out), meaning the most recently added item is removed first. A Queue follows FIFO (First In First Out), meaning the oldest added item is removed first. Stacks have one open end (top), while Queues have two open ends (front and rear)." 
  },
  { 
    q: "What is a Priority Queue?", 
    a: "A priority queue is an abstract data type where each element has a priority associated with it. Unlike a standard queue, elements are served based on their priority, not just their arrival time. Elements with higher priority are dequeued before elements with lower priority. It is often implemented using a Heap data structure." 
  },
  { 
    q: "What is a Trie?", 
    a: "A Trie (or prefix tree) is a tree-like data structure used to store a dynamic set of strings where the keys are usually strings. It is highly efficient for prefix-based searches (like autocomplete) and spell checking. Each node represents a character of a string, and the path from the root to a node represents a prefix." 
  },
  { 
    q: "What is a Heap?", 
    a: "A heap is a specialized tree-based data structure that satisfies the heap property. In a Max-Heap, the key at the root must be maximum among all children (and recursively true for all nodes). In a Min-Heap, the key at the root must be minimum. Heaps are commonly used to implement priority queues and for the Heap Sort algorithm." 
  },

  // --- Algorithms ---
  { 
    q: "What is an Algorithm?", 
    a: "An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. It takes a set of inputs and produces a desired output. Key characteristics include correctness, efficiency, and finiteness." 
  },
  { 
    q: "What is Time Complexity?", 
    a: "Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the length of the input. It is usually expressed using Big O notation (e.g., O(n), O(log n)). It helps in analyzing the efficiency and scalability of an algorithm." 
  },
  { 
    q: "What is Space Complexity?", 
    a: "Space complexity is a measure of the amount of working storage (memory) an algorithm needs to run to completion, as a function of the input size. It includes both the space needed for inputs and the auxiliary space used by the algorithm." 
  },
  { 
    q: "What is Big O Notation?", 
    a: "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size grows. It describes the worst-case scenario (upper bound)." 
  },
  { 
    q: "What is Sorting?", 
    a: "Sorting is the process of arranging data in a specific order, typically ascending or descending. Efficient sorting is critical for optimizing other algorithms (like search) that require sorted input. Common algorithms include Quick Sort, Merge Sort, Heap Sort, and Bubble Sort." 
  },
  { 
    q: "Explain Bubble Sort.", 
    a: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It has a time complexity of O(n^2), making it inefficient for large datasets." 
  },
  { 
    q: "Explain Quick Sort.", 
    a: "Quick Sort is a highly efficient, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. Average time complexity is O(n log n)." 
  },
  { 
    q: "Explain Merge Sort.", 
    a: "Merge Sort is a stable, divide-and-conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. It guarantees a time complexity of O(n log n) in all cases but requires O(n) auxiliary space." 
  },
  { 
    q: "What is Binary Search?", 
    a: "Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. It has a time complexity of O(log n)." 
  },
  { 
    q: "What is Recursion?", 
    a: "Recursion is a programming technique where a function calls itself to solve a problem. The solution depends on solutions to smaller instances of the same problem. A recursive function must have a base case to terminate the recursion and prevent an infinite loop (stack overflow)." 
  },
  { 
    q: "What is Dynamic Programming?", 
    a: "Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler overlapping subproblems. It stores the results of these subproblems (memoization or tabulation) to avoid re-computing them. Examples include Fibonacci sequence, Knapsack problem, and Shortest Path algorithms." 
  },
  { 
    q: "What is a Greedy Algorithm?", 
    a: "A greedy algorithm is an approach for solving problems by making the locally optimal choice at each stage with the hope of finding a global optimum. It does not always yield the optimal solution, but it is often faster and simpler. Examples include Dijkstra's algorithm and Prim's algorithm." 
  },

  // --- DBMS (Database Management System) ---
  { 
    q: "What is DBMS?", 
    a: "A Database Management System (DBMS) is software that interacts with end-users, applications, and the database itself to capture and analyze the data. It allows users to create, read, update, and delete data in a database. It ensures data integrity, security, and concurrency. Examples include MySQL, PostgreSQL, and Oracle." 
  },
  { 
    q: "What is RDBMS?", 
    a: "RDBMS (Relational Database Management System) is a type of DBMS based on the relational model introduced by E.F. Codd. In RDBMS, data is stored in tables with rows (records) and columns (attributes), and relationships between tables are established using keys. It enforces data integrity rules." 
  },
  { 
    q: "What is SQL?", 
    a: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It is used to perform tasks such as updating data on a database or retrieving data from a database. Commands include SELECT, INSERT, UPDATE, DELETE, CREATE, and DROP." 
  },
  { 
    q: "What are ACID properties?", 
    a: "ACID properties ensure reliable processing of database transactions:\n1. Atomicity: All or nothing (transaction is fully completed or not at all).\n2. Consistency: Database remains in a valid state before and after transaction.\n3. Isolation: Transactions occur independently without interference.\n4. Durability: Committed transactions remain saved even in case of system failure." 
  },
  { 
    q: "What is Normalization?", 
    a: "Normalization is the process of organizing data in a database to reduce redundancy (duplicate data) and improve data integrity. It involves dividing large tables into smaller tables and linking them using relationships. Common normal forms are 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), and BCNF." 
  },
  { 
    q: "What is a Primary Key?", 
    a: "A Primary Key is a column or a set of columns in a table that uniquely identifies each row in that table. It must contain unique values and cannot contain NULL values. A table can have only one primary key." 
  },
  { 
    q: "What is a Foreign Key?", 
    a: "A Foreign Key is a field (or collection of fields) in one table that refers to the Primary Key in another table. It is used to establish a link between two tables and enforce referential integrity, ensuring that the value in the foreign key column matches a value in the referenced primary key column." 
  },
  { 
    q: "What is a Join?", 
    a: "A JOIN clause is used to combine rows from two or more tables, based on a related column between them. Common types:\n- INNER JOIN: Returns records that have matching values in both tables.\n- LEFT JOIN: Returns all records from the left table, and the matched records from the right table.\n- RIGHT JOIN: Returns all records from the right table, and the matched records from the left table.\n- FULL JOIN: Returns all records when there is a match in either left or right table." 
  },
  { 
    q: "Difference between DELETE and TRUNCATE?", 
    a: "DELETE is a DML command that removes rows one by one and records each deletion in the transaction log (can be rolled back). It can use a WHERE clause. TRUNCATE is a DDL command that removes all rows from a table by deallocating the data pages (cannot be rolled back in some SQL dialects, faster). It resets identity columns." 
  },
  { 
    q: "What is an Index?", 
    a: "An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional writes and storage space. It works like an index in a book, allowing the database to find data without scanning the entire table (full table scan)." 
  },
  { 
    q: "What is NoSQL?", 
    a: "NoSQL (Not Only SQL) databases are non-relational databases designed for specific data models and have flexible schemas for building modern applications. They are scalable and high-performance. Types include Document (MongoDB), Key-Value (Redis), Column-family (Cassandra), and Graph (Neo4j)." 
  },
  { 
    q: "What is a View?", 
    a: "A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database. Views are used to simplify complex queries and restrict access to specific data." 
  },
  { 
    q: "What is a Stored Procedure?", 
    a: "A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again. It allows you to pass parameters and can contain control flow logic. Stored procedures can improve performance (pre-compiled) and security." 
  },
  { 
    q: "What is a Trigger?", 
    a: "A trigger is a set of SQL statements stored in the database that automatically executes or 'fires' whenever a specific event occurs on a table, such as INSERT, UPDATE, or DELETE. Triggers are used for auditing, enforcing business rules, and maintaining referential integrity." 
  },

  // --- Operating Systems (OS) ---
  { 
    q: "What is an Operating System?", 
    a: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between the user and the computer hardware. Key functions include process management, memory management, file systems, and device control. Examples: Windows, Linux, macOS, Android." 
  },
  { 
    q: "What is a Process?", 
    a: "A process is an instance of a computer program that is being executed. It contains the program code and its current activity. A process has its own memory space (heap, stack, data, text segments) and system resources. It is a heavyweight unit of execution." 
  },
  { 
    q: "What is a Thread?", 
    a: "A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler. It is a component of a process. Threads within the same process share the same memory space and resources but have their own stack and registers. It is a lightweight unit of execution." 
  },
  { 
    q: "Difference between Process and Thread?", 
    a: "1. Memory: Processes have separate memory address spaces; Threads share the same memory space.\n2. Weight: Processes are heavyweight; Threads are lightweight.\n3. Communication: Inter-process communication is slower; Inter-thread communication is faster.\n4. Overhead: Context switching between processes is more expensive than between threads." 
  },
  { 
    q: "What is Deadlock?", 
    a: "Deadlock is a situation in computing where two or more processes are blocked forever, waiting for each other to release resources. It occurs when four conditions are met simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait." 
  },
  { 
    q: "What is Virtual Memory?", 
    a: "Virtual memory is a memory management technique that creates an illusion for users of a very large (main) memory. It allows the execution of processes that are not completely in memory. It maps memory addresses used by a program, called virtual addresses, into physical addresses in computer memory, swapping data between RAM and disk storage (paging)." 
  },
  { 
    q: "What is Paging?", 
    a: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. The physical memory is divided into fixed-sized blocks called frames, and logical memory is divided into blocks of the same size called pages. The OS retrieves data from secondary storage in same-size blocks called pages." 
  },
  { 
    q: "What is Context Switching?", 
    a: "Context switching is the process of storing the state of a process or thread so that it can be restored and resume execution later. This allows multiple processes to share a single CPU and is an essential feature of a multitasking operating system. The state is saved in the Process Control Block (PCB)." 
  },
  { 
    q: "What is a Semaphore?", 
    a: "A semaphore is a synchronization primitive used to control access to a common resource by multiple processes in a concurrent system. It is essentially a variable that is non-negative and shared between threads. Two atomic operations are defined: wait (P) and signal (V). It helps in preventing race conditions." 
  },
  { 
    q: "What is Multithreading?", 
    a: "Multithreading is the ability of a CPU (or a single core in a multi-core processor) to provide multiple threads of execution concurrently, supported by the operating system. It allows a program to perform multiple tasks at once (e.g., a browser downloading a file in one thread while rendering the page in another)." 
  },
  { 
    q: "What is Kernel?", 
    a: "The kernel is the core component of an operating system. It has complete control over everything in the system. It is the first program loaded on startup (after the bootloader). It handles the rest of startup as well as input/output requests from software, translating them into data-processing instructions for the central processing unit." 
  },

  // --- Computer Networks (CN) ---
  { 
    q: "What is the OSI Model?", 
    a: "The OSI (Open Systems Interconnection) model is a conceptual framework that describes the functions of a networking or telecommunication system. It divides network communication into seven layers:\n1. Physical (Cables)\n2. Data Link (MAC, Switches)\n3. Network (IP, Routers)\n4. Transport (TCP/UDP)\n5. Session (Session management)\n6. Presentation (Encryption/Encoding)\n7. Application (HTTP, FTP)" 
  },
  { 
    q: "What is TCP/IP?", 
    a: "TCP/IP (Transmission Control Protocol/Internet Protocol) is the suite of communication protocols used to connect host computers on the Internet. It is a 4-layer model (Application, Transport, Internet, Network Access) that is more practical than the OSI model. IP handles addressing and routing, while TCP handles reliable data delivery." 
  },
  { 
    q: "Difference between TCP and UDP?", 
    a: "TCP (Transmission Control Protocol) is connection-oriented, reliable, and guarantees delivery and order of packets (uses 3-way handshake). It is used for web browsing, email, etc. UDP (User Datagram Protocol) is connectionless, unreliable, and does not guarantee delivery or order (fire and forget). It is faster and used for streaming, gaming, and VoIP." 
  },
  { 
    q: "What is an IP Address?", 
    a: "An IP (Internet Protocol) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions: host or network interface identification and location addressing. IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 uses 128-bit addresses." 
  },
  { 
    q: "What is DNS?", 
    a: "DNS (Domain Name System) is the phonebook of the Internet. Humans access information online through domain names, like google.com or nytimes.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources." 
  },
  { 
    q: "What is HTTP/HTTPS?", 
    a: "HTTP (Hypertext Transfer Protocol) is the protocol used for transferring data over the web. It sends data in plain text. HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP. It uses SSL/TLS to encrypt communications between a client and a server, ensuring that data cannot be intercepted or tampered with." 
  },
  { 
    q: "What is a Router?", 
    a: "A router is a networking device that forwards data packets between computer networks. Routers perform the traffic directing functions on the Internet. They connect multiple networks together (e.g., your home network to the Internet) and determine the best path for data to travel." 
  },
  { 
    q: "What is a Switch?", 
    a: "A switch is a networking device that connects devices within a single network (LAN) and uses packet switching to forward data to the destination device. Unlike a hub (which broadcasts to all), a switch sends data only to the specific device that needs it, using MAC addresses." 
  },
  { 
    q: "What is a Firewall?", 
    a: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. It acts as a barrier between a trusted internal network and an untrusted external network (like the Internet)." 
  },
  { 
    q: "What is Localhost?", 
    a: "Localhost is a hostname that refers to the current computer used to access it. It is used to access the network services that are running on the host via the loopback network interface. The IP address for localhost is typically 127.0.0.1." 
  },

  // --- Web Development ---
  { 
    q: "What is HTML?", 
    a: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and semantic content of a web page using elements represented by tags (e.g., <head>, <body>, <div>, <p>)." 
  },
  { 
    q: "What is CSS?", 
    a: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. It controls the layout, colors, fonts, and overall visual appearance of web pages, allowing for separation of content and design." 
  },
  { 
    q: "What is JavaScript?", 
    a: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications. It supports event-driven, functional, and imperative programming styles." 
  },
  { 
    q: "What is DOM?", 
    a: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page." 
  },
  { 
    q: "Difference between == and === in JS?", 
    a: "The '==' operator is the abstract equality operator. It performs type coercion if the types of the two operands are different before comparing them. The '===' operator is the strict equality operator. It compares both the value and the type of the operands, returning true only if both are identical without any conversion." 
  },
  { 
    q: "What is a Promise in JS?", 
    a: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more synchronous fashion. A Promise is in one of these states: pending, fulfilled (resolved), or rejected. It helps avoid 'callback hell'." 
  },
  { 
    q: "What is React?", 
    a: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta. React allows developers to create large web applications that can change data, without reloading the page. It uses a Virtual DOM for optimal performance." 
  },
  { 
    q: "What is a Component?", 
    a: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function (or return statement in functional components). Components come in two types: Class components and Function components." 
  },
  { 
    q: "What is State in React?", 
    a: "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. State is local to the component and can be passed down to children via props." 
  },
  { 
    q: "What are Hooks?", 
    a: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They were introduced in React 16.8. Common hooks include 'useState' (for managing state), 'useEffect' (for side effects), and 'useContext' (for context API)." 
  },
  { 
    q: "What is an API?", 
    a: "API (Application Programming Interface) is a set of definitions and protocols for building and integrating application software. It allows two applications to talk to each other. For example, when you use an app on your phone to check the weather, the app connects to a weather system via an API." 
  },
  { 
    q: "What is REST?", 
    a: "REST (Representational State Transfer) is a software architectural style that defines a set of constraints to be used for creating Web services. RESTful Web services provide interoperability between computer systems on the Internet. It uses standard HTTP methods like GET, POST, PUT, DELETE." 
  },
  { 
    q: "What is JSON?", 
    a: "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language and is commonly used for transmitting data in web applications." 
  },

  // --- Software Engineering & Tools ---
  { 
    q: "What is SDLC?", 
    a: "SDLC (Software Development Life Cycle) is a process used by the software industry to design, develop and test high-quality software. It aims to produce high-quality software that meets or exceeds customer expectations, reaches completion within times and cost estimates. Phases include: Planning, Analysis, Design, Implementation, Testing, and Maintenance." 
  },
  { 
    q: "What is Agile?", 
    a: "Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. Instead of betting everything on a 'big bang' launch, an agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously." 
  },
  { 
    q: "What is Scrum?", 
    a: "Scrum is an agile framework for developing, delivering, and sustaining complex products. It is a heuristic model, based on empiricism and lean thinking. Scrum employs an iterative, incremental approach to optimize predictability and control risk. Key roles: Scrum Master, Product Owner, Development Team." 
  },
  { 
    q: "What is Git?", 
    a: "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on a project simultaneously. It tracks changes in source code, enabling you to revert to previous versions and create branches for new features." 
  },
  { 
    q: "What is GitHub?", 
    a: "GitHub is a web-based platform used for version control and collaboration. It lets you and others work together on projects from anywhere. It provides a graphical interface for Git repositories and adds features like bug tracking, feature requests, task management, and wikis." 
  },
  { 
    q: "What is CI/CD?", 
    a: "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. CI is the practice of automating the integration of code changes from multiple contributors into a single software project. CD is the practice of keeping your code in a deployable state or automatically deploying it to production. It bridges the gap between dev and ops." 
  },
  { 
    q: "What is Testing?", 
    a: "Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs, and improving performance. Types include Unit Testing, Integration Testing, System Testing, and Acceptance Testing." 
  },
  { 
    q: "What is Black Box vs White Box Testing?", 
    a: "Black Box testing is a method where the internal structure/design/implementation of the item being tested is not known to the tester (focus on inputs/outputs). White Box testing is a method where the internal structure/design/implementation of the item being tested is known to the tester (focus on code paths)." 
  },

  // --- HR & Behavioral ---
  { 
    q: "Tell me about yourself.", 
    a: "This is usually the first question. Use the 'Present, Past, Future' formula. Start with your current role and achievements (Present). Then, briefly touch upon your background and how you got here (Past). Finally, explain why you are interested in this role and how it aligns with your career goals (Future). Keep it professional and relevant to the job description." 
  },
  { 
    q: "What are your strengths?", 
    a: "Choose 2-3 strengths that are relevant to the job description. For each strength, provide a concrete example or story that demonstrates it. Common strengths include problem-solving, adaptability, fast learner, and teamwork. Avoid generic answers without backing them up." 
  },
  { 
    q: "What are your weaknesses?", 
    a: "Choose a real weakness, but not one that is critical to the job success. Crucially, explain the steps you are taking to overcome it. For example, 'I sometimes struggle with public speaking, so I've joined a Toastmasters club to improve.' This shows self-awareness and a growth mindset." 
  },
  { 
    q: "Why do you want to work here?", 
    a: "Show that you've done your research. Mention specific aspects of the company that appeal to you, such as their mission, specific products, company culture, or recent achievements. Explain how your values and goals align with theirs. Avoid saying 'because I need a job' or 'for the salary'." 
  },
  { 
    q: "Where do you see yourself in 5 years?", 
    a: "Demonstrate ambition and a desire to grow with the company. You might say you hope to have mastered your current role and taken on more responsibilities, such as leading projects or mentoring junior team members. Ensure your goals are realistic and aligned with the potential career path at the company." 
  },
  { 
    q: "Why should we hire you?", 
    a: "This is your sales pitch. Summarize your top skills and experiences that make you the best fit for the role. Focus on what you can do for them, not what they can do for you. Highlight a unique combination of skills or a specific achievement that sets you apart." 
  },
  { 
    q: "Describe a challenge you faced and how you handled it.", 
    a: "Use the STAR method (Situation, Task, Action, Result). Describe the specific situation and the task you needed to accomplish. Detail the actions you took to address the challenge. Finally, share the positive result or outcome of your actions. This shows your problem-solving skills and resilience." 
  },
  { 
    q: "How do you handle stress/pressure?", 
    a: "Employers want to know you won't crumble under deadlines. Explain your coping mechanisms, such as prioritization, breaking tasks into smaller steps, taking short breaks, or staying organized. Give a specific example of a time you successfully worked under pressure to meet a deadline." 
  },
  { 
    q: "Are you willing to relocate?", 
    a: "Be honest. If you are willing, say so enthusiastically. If you are not, explain your constraints politely but emphasize your interest in the role (if remote is an option). If you are open to it with the right relocation package, you can mention that as well." 
  },
  { 
    q: "Do you have any questions for us?", 
    a: "Always have questions prepared. It shows you are interested and engaged. Ask about the team culture, day-to-day responsibilities, opportunities for professional development, or the company's future plans. Avoid asking about salary or benefits in the first interview." 
  }
];

export const ATS_TIPS_DATA = [
  { 
    id: "format", 
    title: "ATS Friendly Resume Format", 
    content: "Use standard fonts like Arial or Calibri. Keep it to one page. Use bullet points and avoid tables, images, or complex graphics that bots can't read." 
  },
  { 
    id: "keywords", 
    title: "Keywords Optimization", 
    content: "Extract keywords from the Job Description (JD). Match exact variations (e.g., 'JavaScript' instead of 'JS'). Maintain natural density (2-3 times per keyword)." 
  },
  { 
    id: "mistakes", 
    title: "Resume Mistakes to Avoid", 
    content: "Avoid unprofessional email IDs, missing contact info, spelling errors, and using 'I' or 'We' in project descriptions. Don't use star ratings for skills." 
  },
  { 
    id: "linkedin", 
    title: "LinkedIn Profile Tips", 
    content: "Use a professional photo. Write a keyword-rich headline. Optimize your 'About' section with a learning tone. Stay active by posting weekly updates." 
  },
];
