/**
 *优先队列：与普通队列相比只是其出队规则不同,是依赖于数据源中的优先级变量。
 */
function PriorityQueue() {
    this.dataStore = []; //数据源
    this.enqueue = enqueue; //入队
    this.dequeue = dequeue; //出队
    this.readFront = readFront; //读取队首
    this.readBack = readBack; //读取队尾
    this.isEmpty = isEmpty; //是否为空队列
    this.toString = toString;
}

function dequeue() {
    var flag = 0; //优先级标识；默认为0第一个元素
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].priority > this.dataStore[flag].priority) {
            flag = i;
        }
    }
     return this.dataStore.splice(flag, 1); 
}

function enqueue(element) {
    this.dataStore.push(element);
}

function readFront() {
    return this.dataStore[0];
}

function readBack() {
    return this.dataStore[this.dataStore.length - 1];
}

function isEmpty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    return false;
}

function toString() {
    var str = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i].name + this.dataStore[i].priority + '\n';
    }
    return str;
}

//病人
function Patient(name, priority) {
    this.name = name; //姓名
    this.priority = priority; //病痛优先级
}


var p1 = new Patient('小王', 1);
var p2 = new Patient('小名', 3);
var p3 = new Patient('小李', 8);
var p4 = new Patient('小张', 8);
var p5 = new Patient('小黄', 3);
var p6 = new Patient('小袁', 4);

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(p1);
priorityQueue.enqueue(p2);
priorityQueue.enqueue(p3);
priorityQueue.enqueue(p4);
priorityQueue.enqueue(p5);
priorityQueue.enqueue(p6);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
console.log(priorityQueue.toString());
