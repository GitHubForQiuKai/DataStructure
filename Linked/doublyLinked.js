//节点
function Node(element) {
    this.element = element; //节点上的数据
    this.prev = null; //保存着指向的上一个节点
    this.next = null; //保存着指向的下一个节点
}
//双向链表
function DoublyLinkedList() {
    this.head = new Node('head'); //头节点
    this.insert = insert; //增加
    this.remove = remove; //删除
    this.find = find; //查找节点
    this.findLast = findLast; //查找最后一个
    this.display = display; //链表的展示
    this.displayReversal = displayReversal; //链表的从后展示
}

function find(element) {
    var currNode = this.head;
    while (currNode.element != element) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(insertEle, posEle) {
    var insertNode = new Node(insertEle);
    var posNode = this.find(posEle);
    insertNode.prev = posNode;
    insertNode.next = posNode.next;
    posNode.next = insertNode;
}

function remove(removeEle) {
    var removeNode = this.find(removeEle);
    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode = null;
}

function findLast() {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

function display() {
    var currNode = this.head;
    while (currNode.next != null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function displayReversal() {
    var currNode = this.findLast();
    while (currNode.prev != null) {
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert('1', 'head');
doublyLinkedList.insert('2', '1');
doublyLinkedList.insert('3', '2');
doublyLinkedList.insert('4', '3');
doublyLinkedList.insert('5', '4');
doublyLinkedList.insert('22', '3');
console.log(doublyLinkedList.displayReversal());
console.log(doublyLinkedList);
