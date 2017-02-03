/*
 *二叉树
 */
//树上的每个节点
function Node(data, left, right) {
    this.data = data; //值
    this.left = left;
    this.right = right;
}

function BinarySearchTrees() {
    this.root = null; //根节点
    this.insert = insert;
    this.inOrder = inOrder; //中序遍历
    this.getMax = getMax; //获取最大值
    this.getMin = getMin; //获取最小值 
    this.find = find; //查找
    this.remove = remove; //删除
}

function insert(data) {
    var insertNode = new Node(data, null, null);
    //如果是空树，插入该节点
    if (this.root == null) {
        this.root = insertNode;
    } else {
        var currentNode = this.root;
        while (true) {
            if (data < currentNode.data) {
                if ((currentNode.left) != null) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = insertNode;
                    break;
                }
            } else {
                if ((currentNode.right) != null) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = insertNode;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }

}

function getMax(root) {
    var currentNode = root || this.root;
    while (currentNode.right != null) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
}

function getMin(root) {
    var currentNode = root || this.root;
    while (currentNode.left != null) {
        currentNode = currentNode.left;
    }
    return currentNode.data;
}

function find(data) {
    var currentNode = this.root;
    while (currentNode !== null) {
        if (currentNode.data === data) {
            return currentNode;
        } else if (data < currentNode.data) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    return -1;
}

function remove(data) {
//TODO
}
var bts = new BinarySearchTrees();
bts.insert(15);
bts.insert(25);
bts.insert(5);
bts.insert(125);
bts.inOrder(this.root);
console.log(bts.getMax());
console.log(bts.getMin());
console.log(bts.find(25));
