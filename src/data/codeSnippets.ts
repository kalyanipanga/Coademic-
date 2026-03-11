
export interface CodeSnippet {
  id: string;
  title: string;
  category: string;
  code: {
    python: string;
    java: string;
    cpp: string;
  };
}

export const COMMON_SNIPPETS: CodeSnippet[] = [
  {
    id: "binary-search",
    title: "Binary Search",
    category: "Searching",
    code: {
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1

# Example usage:
arr = [1, 3, 5, 7, 9, 11]
target = 7
result = binary_search(arr, target)
print(f"Element found at index: {result}")`,
      java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target)
                return mid;
            
            if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int result = binarySearch(arr, target);
        System.out.println("Element found at index: " + result);
    }
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int target = 7;
    int result = binarySearch(arr, target);
    cout << "Element found at index: " << result << endl;
    return 0;
}`
    }
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    category: "Sorting",
    code: {
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
        
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print(f"Sorted array: {sorted_arr}")`,
      java: `import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] arr) {
        if (arr.length < 2) {
            return;
        }
        
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);
        
        mergeSort(left);
        mergeSort(right);
        
        merge(arr, left, right);
    }
    
    public static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    vector<int> L(n1), R(n2);
    
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
        
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right)
        return;
        
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

int main() {
    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
    mergeSort(arr, 0, arr.size() - 1);
    
    cout << "Sorted array: ";
    for (int x : arr) {
        cout << x << " ";
    }
    cout << endl;
    return 0;
}`
    }
  },
  {
    id: "dfs-graph",
    title: "DFS (Graph)",
    category: "Graph",
    code: {
      python: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=" ")
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("DFS Traversal:")
dfs(graph, 'A')`,
      java: `import java.util.*;

public class DFSGraph {
    private Map<Character, List<Character>> adj;

    public DFSGraph() {
        adj = new HashMap<>();
    }

    public void addEdge(char v, char w) {
        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
        adj.computeIfAbsent(w, k -> new ArrayList<>()).add(v);
    }

    public void dfs(char v, Set<Character> visited) {
        visited.add(v);
        System.out.print(v + " ");

        if (adj.containsKey(v)) {
            for (char neighbor : adj.get(v)) {
                if (!visited.contains(neighbor)) {
                    dfs(neighbor, visited);
                }
            }
        }
    }

    public static void main(String[] args) {
        DFSGraph g = new DFSGraph();
        g.addEdge('A', 'B');
        g.addEdge('A', 'C');
        g.addEdge('B', 'D');
        g.addEdge('B', 'E');
        g.addEdge('C', 'F');
        g.addEdge('E', 'F');

        System.out.println("DFS Traversal:");
        g.dfs('A', new HashSet<>());
    }
}`,
      cpp: `#include <iostream>
#include <map>
#include <vector>
#include <set>

using namespace std;

class Graph {
    map<char, vector<char>> adj;

public:
    void addEdge(char v, char w) {
        adj[v].push_back(w);
        adj[w].push_back(v);
    }

    void dfs(char v, set<char>& visited) {
        visited.insert(v);
        cout << v << " ";

        for (char neighbor : adj[v]) {
            if (visited.find(neighbor) == visited.end()) {
                dfs(neighbor, visited);
            }
        }
    }
};

int main() {
    Graph g;
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('B', 'E');
    g.addEdge('C', 'F');
    g.addEdge('E', 'F');

    cout << "DFS Traversal: ";
    set<char> visited;
    g.dfs('A', visited);
    cout << endl;

    return 0;
}`
    }
  },
  {
    id: "bfs-graph",
    title: "BFS (Graph)",
    category: "Graph",
    code: {
      python: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        vertex = queue.popleft()
        print(vertex, end=" ")

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("BFS Traversal:")
bfs(graph, 'A')`,
      java: `import java.util.*;

public class BFSGraph {
    private Map<Character, List<Character>> adj;

    public BFSGraph() {
        adj = new HashMap<>();
    }

    public void addEdge(char v, char w) {
        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
        adj.computeIfAbsent(w, k -> new ArrayList<>()).add(v);
    }

    public void bfs(char start) {
        Set<Character> visited = new HashSet<>();
        Queue<Character> queue = new LinkedList<>();

        visited.add(start);
        queue.add(start);

        while (!queue.isEmpty()) {
            char vertex = queue.poll();
            System.out.print(vertex + " ");

            if (adj.containsKey(vertex)) {
                for (char neighbor : adj.get(vertex)) {
                    if (!visited.contains(neighbor)) {
                        visited.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        BFSGraph g = new BFSGraph();
        g.addEdge('A', 'B');
        g.addEdge('A', 'C');
        g.addEdge('B', 'D');
        g.addEdge('B', 'E');
        g.addEdge('C', 'F');
        g.addEdge('E', 'F');

        System.out.println("BFS Traversal:");
        g.bfs('A');
    }
}`,
      cpp: `#include <iostream>
#include <map>
#include <vector>
#include <queue>
#include <set>

using namespace std;

class Graph {
    map<char, vector<char>> adj;

public:
    void addEdge(char v, char w) {
        adj[v].push_back(w);
        adj[w].push_back(v);
    }

    void bfs(char start) {
        set<char> visited;
        queue<char> q;

        visited.insert(start);
        q.push(start);

        while (!q.empty()) {
            char vertex = q.front();
            q.pop();
            cout << vertex << " ";

            for (char neighbor : adj[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
    }
};

int main() {
    Graph g;
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('B', 'E');
    g.addEdge('C', 'F');
    g.addEdge('E', 'F');

    cout << "BFS Traversal: ";
    g.bfs('A');
    cout << endl;

    return 0;
}`
    }
  },
  {
    id: "linked-list-reverse",
    title: "Reverse Linked List",
    category: "Linked List",
    code: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    curr = head
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
        
    return prev

def print_list(head):
    curr = head
    while curr:
        print(curr.val, end=" -> ")
        curr = curr.next
    print("None")

# Example usage:
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print("Original List:")
print_list(head)

reversed_head = reverse_list(head)
print("Reversed List:")
print_list(reversed_head)`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }

    public static void printList(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        System.out.println("Original List:");
        printList(head);
        
        ListNode reversedHead = reverseList(head);
        System.out.println("Reversed List:");
        printList(reversedHead);
    }
}`,
      cpp: `#include <iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = NULL;
    ListNode* curr = head;
    
    while (curr != NULL) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
}

void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr != NULL) {
        cout << curr->val << " -> ";
        curr = curr->next;
    }
    cout << "NULL" << endl;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    cout << "Original List: ";
    printList(head);
    
    ListNode* reversedHead = reverseList(head);
    
    cout << "Reversed List: ";
    printList(reversedHead);
    
    return 0;
}`
    }
  }
];
