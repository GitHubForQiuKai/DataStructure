//字典
function Dictionary() {
    this.dataStore = []; //数据源
    this.add = add; //添加
    this.remove = remove; //删除
    this.find = find; //查找
    this.showAll = showAll; //显示所有的元素
    this.count = count; //元素的个数
    this.clear = clear; //清空字典
}

function add(key, value) {
    this.dataStore[key] = value;
}

function remove(key) {
    delete this.dataStore[key];
}

function find(key) {
    return this.dataStore[key];
}

function showAll() {
    for (var key in this.dataStore) {
        console.log(key + ":" + this.dataStore[key]);
    }
}

function count() {
    return Object.keys(this.dataStore).length;
}

function clear() {
    this.dataStore = [];
}
var dictionary = new Dictionary();
dictionary.add('nike', 598);
dictionary.add('anta', 298);
dictionary.add('adidas', 998);
console.log(dictionary.count());
dictionary.remove('nike');
dictionary.clear();
dictionary.showAll();
