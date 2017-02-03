function Queue() {
    this.dataStore = []; //数据源
    this.enqueue = enqueue; //入队
    this.dequeue = dequeue; //出队
    this.readFront = readFront; //读取队首
    this.readBack = readBack; //读取队尾
    this.isEmpty = isEmpty; //是否为空队列
    this.toString = toString;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
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
	for(var i = 0;i<this.dataStore.length;i++){
		str += this.dataStore[i]+'\n';
	}
    return str;
}

var queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
queue.enqueue("4");
queue.dequeue();
console.log(queue.toString());
