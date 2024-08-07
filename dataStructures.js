

// extends the JavaScript array object with a function that
// sets the number of rows and columns and  sets each value
// to a value passed to the function.

Array.matrix = function (numrows, numcols, initialValue) {
    let arr = [];
    for (let i = 0; i < numrows; ++i) {
        let columns = [];
        for (let j = 0; j < numcols; ++j) {
            columns[j] = initialValue;
        }
        arr[i] = columns;
    }
    return arr;
}


// a list implementation

function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.length = length;
    this.contains = contains;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
//test example (list)
// var names = new list();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
// console.log(names)


// A stack data structure implementation using array

function stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top - 1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

//function to check palindrome using stack data structure
function isPalindrome(word) {
    let s = new stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    let rword = '';
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word === rword) {
        return true
    } else { return false }
}


// function to check if parentheses are balanced in an equation.
// not checked for edge cases.
function checkParentheses(expression) {
    let s = new stack();
    let counterOpening = 0;
    let counterClosing = 0;
    let counterOperator = 0;
    for (let i = 0; i < expression.length; i++) {
        s.push(expression[i]);
        if (s.dataStore[i] === '(') {
            counterOpening += 1;
        };
        if (s.dataStore[i] === ')') {
            counterClosing += 1;
        };
        if ((s.dataStore[i] === '+' || s.dataStore[i] === '-' || s.dataStore[i] === '*' || s.dataStore[i] === '/' || s.dataStore[i] === '%') && (counterOpening > counterClosing)) {
            counterOperator += 1;
        };
        if (counterOpening > 0 && counterClosing > 0 && counterOpening == counterClosing) {
            counterOpening = 0;
            counterClosing = 0;
            counterOperator = 0;
        }
        if ((counterOpening > counterClosing) && (counterOperator == 2)) {
            return i
        }
        if ((counterOpening > counterClosing) && (counterOperator == 1) && (i == expression.length - 1)) {
            return i
        }
    }
    if (counterOpening == counterClosing) {
        console.log('The exp is balanced')
    }

}
// console.log(checkParentheses('2.3 + (23 / 12) + (3.14159 * .24'))

//implementation of queue data structure using array
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}


//implementation of Linked Lists data structure using Objects
function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;;
    }
}
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();