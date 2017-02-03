//节点
function Node(element) {
    this.element = element; //节点上的数据
    this.next = null; //保存着指向下一个节点
}
//链表
function SinglyLinkedList() {
    this.head = new Node('head'); //链表的头节点
    this.find = find; //查找节点
    this.insert = insert; //插入节点
    this.remove = remove; //删除节点
    this.display = display; //展现链表
}

function find(element) {
    var currNode = this.head;
    while (currNode.element != element) {
        currNode = currNode.next;
    }
    return currNode;
}

function findPrevious(element) {
    var currNode = this.head;
    while (currNode.next != null && currNode.next.element != element) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(insertElement, posElement) {
    var posNode = this.find(posElement);
    var insertNode = new Node(insertElement);
    insertNode.next = posNode.next;
    posNode.next = insertNode;
}

function remove(removeElement) {
    var removeNode = this.find(removeElement);
    var preNode =this.findPrevious(removeElement);
    preNode.next = removeNode.next;
    removeNode = null;
}

function display() {
	var currNode = this.head;
	while(currNode.next != null){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

var linked = new SinglyLinkedList();
linked.insert('first', 'head');
linked.insert('second', 'first');
linked.insert('thrid', 'second');
linked.insert('fourth', 'thrid');
linked.insert('34', 'second');
console.log(linked.display());