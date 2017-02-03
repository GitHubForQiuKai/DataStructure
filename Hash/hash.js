/*散列*/
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash; //简单hash算法
    this.betterHash = betterHash; //上面算法的升级版
    this.put = put; //放入键值对
    this.get = get; //获取元素
    this.showAll = showAll; //展示hashtable
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        //返回对应字符串的unicode编码0~2^64-1
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function betterHash(data) {
    var total = 0;
    var H = 31;
    for (var i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(value) {
    this.table[this.betterHash(value)] = value;

}

function get(key) {
    return this.table[this.betterHash(key)];
}

function showAll() {
    for (var key in this.table) {
        console.log("键:" + key + "；值:" + this.table[key]);
    }
}

var hashTable = new HashTable();
hashTable.put("adidas");
hashTable.put("china");
hashTable.put("nicha");
hashTable.put("dasdas");
hashTable.put("wqrqr");
hashTable.put("vxxc");
hashTable.put("dasda");
hashTable.showAll();
console.log(hashTable);
