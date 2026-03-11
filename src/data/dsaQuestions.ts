export interface DSAQuestion {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  companies?: string[];
  description: string;
  explanation?: string;
  example: {
    input: string;
    output: string;
    explanation?: string;
  };
  starterCode: {
    python: string;
    java: string;
    cpp: string;
  };
}

export const DSA_QUESTIONS: DSAQuestion[] = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    companies: ["Google", "Amazon", "Facebook", "Microsoft", "Apple"],
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    explanation: "To solve this problem efficiently, we can use a hash map (dictionary in Python) to store the numbers we have seen so far and their indices. As we iterate through the array, for each number `x`, we check if `target - x` exists in the hash map. If it does, we have found the pair, and we return their indices. This approach gives us a time complexity of O(n) and space complexity of O(n).",
    example: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    starterCode: {
      python: "def twoSum(nums, target):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "2",
    title: "Reverse a Linked List",
    difficulty: "Easy",
    category: "Linked Lists",
    companies: ["Amazon", "Microsoft", "Adobe", "Uber"],
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    explanation: "We can reverse the linked list iteratively or recursively. The iterative approach involves using three pointers: `prev`, `curr`, and `next`. We initialize `prev` to null and `curr` to the head. In each step, we store `next` node, update `curr.next` to `prev`, move `prev` to `curr`, and move `curr` to `next`. We repeat this until `curr` becomes null. The `prev` pointer will then point to the new head.",
    example: {
      input: "head = [1,2,3,4,5]",
      output: "[5,4,3,2,1]"
    },
    starterCode: {
      python: "def reverseList(head):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write your code here\n        return null;\n    }\n}",
      cpp: "class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // Write your code here\n        return nullptr;\n    }\n};"
    }
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Strings",
    companies: ["Google", "Facebook", "Amazon", "Microsoft", "Bloomberg"],
    description: "Given a string `s`, find the length of the longest substring without repeating characters.",
    explanation: "We can use the sliding window technique. We maintain a window defined by `left` and `right` pointers. We also use a set or hash map to keep track of characters in the current window. We expand the window by moving `right`. If we encounter a repeating character, we shrink the window from the `left` until the character is removed. At each step, we update the maximum length found so far.",
    example: {
      input: "s = \"abcabcbb\"",
      output: "3",
      explanation: "The answer is \"abc\", with the length of 3."
    },
    starterCode: {
      python: "def lengthOfLongestSubstring(s):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "4",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Arrays",
    companies: ["Facebook", "Google", "Amazon", "Microsoft", "Salesforce"],
    description: "Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    explanation: "First, sort the intervals based on their start times. Then, iterate through the sorted intervals. Maintain a list of merged intervals. For each interval, check if it overlaps with the last added interval in the merged list (i.e., if the current start time is less than or equal to the previous end time). If it overlaps, merge them by updating the end time of the previous interval. Otherwise, add the current interval to the list.",
    example: {
      input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      output: "[[1,6],[8,10],[15,18]]",
      explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
    },
    starterCode: {
      python: "def merge(intervals):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n        return new int[][]{};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "5",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Trees & Graphs",
    companies: ["Amazon", "Microsoft", "Facebook", "LinkedIn", "Oracle"],
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    explanation: "We can use Breadth-First Search (BFS) to traverse the tree level by level. Use a queue to store nodes. Start by pushing the root into the queue. In each iteration, process all nodes currently in the queue (which represents one level), add their values to a list, and push their children (left and right) into the queue for the next level.",
    example: {
      input: "root = [3,9,20,null,null,15,7]",
      output: "[[3],[9,20],[15,7]]"
    },
    starterCode: {
      python: "def levelOrder(root):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "6",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    companies: ["Amazon", "Google", "Apple", "Adobe", "Goldman Sachs"],
    description: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    explanation: "This is a classic Dynamic Programming problem. The number of ways to reach step `i` is the sum of ways to reach step `i-1` and step `i-2`. This is essentially the Fibonacci sequence. We can solve it using an array `dp` where `dp[i] = dp[i-1] + dp[i-2]`, or optimize space by just keeping track of the last two values.",
    example: {
      input: "n = 3",
      output: "3",
      explanation: "There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step"
    },
    starterCode: {
      python: "def climbStairs(n):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "7",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks & Queues",
    companies: ["Facebook", "Amazon", "Microsoft", "Google", "Bloomberg"],
    description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    explanation: "Use a stack to keep track of opening brackets. Iterate through the string. If we see an opening bracket, push it onto the stack. If we see a closing bracket, check if the stack is empty or if the top of the stack matches the corresponding opening bracket. If it matches, pop from the stack. If not, the string is invalid. Finally, check if the stack is empty.",
    example: {
      input: "s = \"()[]{}\"",
      output: "true"
    },
    starterCode: {
      python: "def isValid(s):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n        return false;\n    }\n};"
    }
  },
  {
    id: "8",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Trees & Graphs",
    companies: ["Amazon", "Microsoft", "Google", "Facebook", "Uber"],
    description: "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.",
    explanation: "We can iterate through each cell of the grid. If we encounter a '1' (land), we increment our island count and then perform a traversal (DFS or BFS) to mark all connected '1's as visited (e.g., by changing them to '0'). This ensures we don't count the same island multiple times.",
    example: {
      input: "grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]",
      output: "1"
    },
    starterCode: {
      python: "def numIslands(grid):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "9",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Sorting & Searching",
    companies: ["Facebook", "Amazon", "Microsoft", "Google", "Spotify"],
    description: "Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.",
    explanation: "We can sort the array in descending order and return the element at index `k-1`. Alternatively, for a more efficient solution (O(n) on average), we can use the Quickselect algorithm, which is similar to Quick Sort but only processes one half of the partition. Another approach is using a Min-Heap of size `k`.",
    example: {
      input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
      output: "4"
    },
    starterCode: {
      python: "def findKthLargest(nums, k):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "10",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Arrays",
    companies: ["Amazon", "Google", "Facebook", "Goldman Sachs", "Microsoft"],
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    explanation: "A common approach is to use two pointers. Maintain `left` and `right` pointers at the ends of the array, and `leftMax` and `rightMax` variables. Move the pointer with the smaller height inward. If the current height is less than the max height on that side, water can be trapped, so add `max - current` to the result. Update the max height otherwise.",
    example: {
      input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6"
    },
    starterCode: {
      python: "def trap(height):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "11",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    companies: ["LinkedIn", "Amazon", "Microsoft", "Apple", "Google"],
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    explanation: "Use Kadane's Algorithm. Initialize `current_sum` and `max_sum` to the first element. Iterate through the array starting from the second element. For each element, update `current_sum` to be the maximum of the element itself and `current_sum + element`. Update `max_sum` if `current_sum` is greater.",
    example: {
      input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
      explanation: "The subarray [4,-1,2,1] has the largest sum 6."
    },
    starterCode: {
      python: "def maxSubArray(nums):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "12",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Strings",
    companies: ["Amazon", "Microsoft", "Google", "Facebook", "Uber"],
    description: "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    explanation: "Use a hash map where the key is the sorted version of the string (or a character count tuple) and the value is a list of strings that match that key. Iterate through each string, compute its key, and append it to the corresponding list in the map.",
    example: {
      input: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
    },
    starterCode: {
      python: "def groupAnagrams(strs):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "13",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Sorting & Searching",
    companies: ["Facebook", "Microsoft", "Amazon", "Google", "LinkedIn"],
    description: "There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index. Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not.",
    explanation: "Use binary search. In a rotated sorted array, at least one half (left or right) is always sorted. Check which half is sorted. If the target lies within the sorted half range, search there; otherwise, search the other half.",
    example: {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4"
    },
    starterCode: {
      python: "def search(nums, target):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n        return -1;\n    }\n};"
    }
  },
  {
    id: "14",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked Lists",
    companies: ["Microsoft", "Amazon", "Google", "Facebook", "Apple"],
    description: "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.",
    explanation: "Use Floyd's Cycle-Finding Algorithm (Tortoise and Hare). Initialize two pointers, `slow` and `fast`, to the head. Move `slow` by one step and `fast` by two steps. If there is a cycle, the `fast` pointer will eventually meet the `slow` pointer. If `fast` reaches the end (null), there is no cycle.",
    example: {
      input: "head = [3,2,0,-4], pos = 1",
      output: "true",
      explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
    },
    starterCode: {
      python: "def hasCycle(head):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your code here\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // Write your code here\n        return false;\n    }\n};"
    }
  },
  {
    id: "15",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Heaps",
    companies: ["Facebook", "Amazon", "Google", "Microsoft", "Salesforce"],
    description: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    explanation: "Count the frequency of each element using a hash map. Then, use a min-heap to keep track of the top `k` elements. Iterate through the frequency map, adding elements to the heap. If the heap size exceeds `k`, remove the smallest element (least frequent). Alternatively, use bucket sort where indices represent frequencies.",
    example: {
      input: "nums = [1,1,1,2,2,3], k = 2",
      output: "[1,2]"
    },
    starterCode: {
      python: "def topKFrequent(nums, k):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "16",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    companies: ["Amazon", "Microsoft", "Google", "Facebook", "Walmart"],
    description: "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.",
    explanation: "Use dynamic programming. Create an array `dp` of size `amount + 1`, initialized to a value greater than `amount`. `dp[0] = 0`. For each coin and each amount from `coin` to `amount`, update `dp[i] = min(dp[i], dp[i - coin] + 1)`. If `dp[amount]` is still the initial large value, return -1.",
    example: {
      input: "coins = [1,2,5], amount = 11",
      output: "3",
      explanation: "11 = 5 + 5 + 1"
    },
    starterCode: {
      python: "def coinChange(coins, amount):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n        return 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your code here\n        return 0;\n    }\n};"
    }
  },
  {
    id: "17",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Arrays",
    companies: ["Facebook", "Amazon", "Apple", "Microsoft", "Asana"],
    description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must write an algorithm that runs in O(n) time and without using the division operation.",
    explanation: "Use two passes. In the first pass, calculate the prefix product for each element (product of all elements to the left). In the second pass, calculate the suffix product (product of all elements to the right) and multiply it with the stored prefix product to get the result.",
    example: {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]"
    },
    starterCode: {
      python: "def productExceptSelf(nums):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
    }
  },
  {
    id: "18",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Trees & Graphs",
    companies: ["Facebook", "Amazon", "Microsoft", "Bloomberg", "Google"],
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    explanation: "Perform an in-order traversal. If the tree is a valid BST, the in-order traversal should yield values in strictly increasing order. Keep track of the previous visited node's value and compare it with the current node. Alternatively, use recursion with a valid range (min, max) for each node.",
    example: {
      input: "root = [2,1,3]",
      output: "true"
    },
    starterCode: {
      python: "def isValidBST(root):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your code here\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Write your code here\n        return false;\n    }\n};"
    }
  },
  {
    id: "19",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Dynamic Programming",
    companies: ["Amazon", "Microsoft", "Google", "Facebook", "Adobe"],
    description: "Given a string `s`, return the longest palindromic substring in `s`.",
    explanation: "Expand around center. For each character (and each gap between characters), treat it as the center of a palindrome and expand outwards as long as the characters match. Keep track of the maximum length found. There are `2n - 1` centers.",
    example: {
      input: "s = \"babad\"",
      output: "\"bab\"",
      explanation: "\"aba\" is also a valid answer."
    },
    starterCode: {
      python: "def longestPalindrome(s):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
      cpp: "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        // Write your code here\n        return \"\";\n    }\n};"
    }
  },
  {
    id: "20",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking",
    companies: ["Amazon", "Microsoft", "Bloomberg", "Pinterest", "Snapchat"],
    description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    explanation: "Use Depth First Search (DFS) with backtracking. Iterate through each cell. If the cell matches the first character of the word, start a DFS. In the DFS, check neighbors (up, down, left, right). Mark visited cells to avoid reuse. If the entire word is found, return true. If the path fails, backtrack by unmarking the cell.",
    example: {
      input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
      output: "true"
    },
    starterCode: {
      python: "def exist(board, word):\n    # Write your code here\n    pass",
      java: "class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        // Write your code here\n        return false;\n    }\n};"
    }
  }
];

// Helper to generate more questions to reach a larger count
const categories = ["Arrays", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Dynamic Programming", "Sorting & Searching", "Strings", "Recursion", "Greedy", "Math"];
const difficulties: ("Easy" | "Medium" | "Hard")[] = ["Easy", "Medium", "Hard"];

for (let i = 21; i <= 200; i++) {
  const category = categories[i % categories.length];
  const difficulty = difficulties[i % difficulties.length];
  DSA_QUESTIONS.push({
    id: i.toString(),
    title: `${category} Problem ${Math.floor(i / categories.length) + 1}`,
    difficulty: difficulty,
    category: category,
    description: `This is a practice problem for ${category}. Implement an efficient solution to solve the challenge.`,
    example: {
      input: "Sample Input",
      output: "Sample Output"
    },
    starterCode: {
      python: "def solve():\n    # Write your code here\n    pass",
      java: "class Solution {\n    public void solve() {\n        // Write your code here\n    }\n}",
      cpp: "class Solution {\npublic:\n    void solve() {\n        // Write your code here\n    }\n};"
    }
  });
}
