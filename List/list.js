function List() {
    /*
     * 列表拥有的属性
     */
    this.listSize = 0; //列表的元素个数
    this.dataStore = []; //列表的数据源
    this.pos = 0; //列表的当前位置
    /*
     * 列表拥有的方法
     **/
    this.clear = clear; //清除列表
    this.find = find; //查找元素位置
    this.toString = toString; //返回列表的字符串形式
    this.append = append; //在列表末尾加入元素
    this.insert = insert; //在某个元素后面插入新元素
    this.remove = remove; //移除列表元素

    /*
     * 遍历指针的方法
     **/
    this.currPos = currPos; //返回列表当前位置
    this.prev = prev; //列表位置向前移动一位
    this.next = next; //列表位置向后移动一位
    this.front = front; //从当前位置移动到最前
    this.end = end; //从当前位置移动到最后
    this.moveTo = moveTo; //移动到指定位置
    this.getElement = getElement; //返回当前元素
    this.contains = contains; //是否包含该元素 
    this.length = length;//列的长度
}

function length(){
	return this.listSize;
}

function currPos() {
    return this.pos;
}

function prev() {
    --this.pos;
}

function next() {
    ++this.pos;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function moveTo(position) {
    if (position >= 0 && position < this.listSize) {
        this.pos = position;
    }
    return false;
}

function getElement() {
    return this.dataStore[this.pos];
}

function contains(element) {
    var posAt = this.find(element);
    if (posAt > -1) {
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
}

function find(element) {
    for (var i = 0; i < this.listSize; ++i) {
        if (this.dataStore[i] == element) return i;
    }
    return -1;
}

function toString() {
    return this.dataStore;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function insert(element, insertElement) {
    var posAt = this.find(element);
    if (posAt > -1) {
        this.dataStore.splice(posAt + 1, 0, insertElement);
        ++this.listSize;
        return true;
    }
    return false;
}

function remove(element) {
    var posAt = this.find(element);
    if (posAt > -1) {
        this.dataStore.splice(posAt, 1);
        --this.listSize;
        return true;
    }
    return false;

}

var list = new List();
list.append("1");
list.append("2");
list.append("3");
list.append("4");
// console.log(list.insert('3', '8'));
// console.log(list.clear('8'));
// console.log(list);
// list.next();
// console.log(list.getElement());
for(list.front();list.currPos()<list.length();list.next()){
	console.log(list.getElement());
}
