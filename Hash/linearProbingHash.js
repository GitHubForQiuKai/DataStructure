/*
 *线性探测法:当发生碰撞时，在当前位置后顺序选取一个为空的位置放入。
 *适用条件：存储长度>数据长度*1.5;且散列值分布均匀
 */
function HashTable() {
    this.table = new Array(137);
    this.betterHash = betterHash; //hash算法
    this.put = put; //放入键值对
    this.get = get; //获取元素
    this.showAll = showAll; //展示hashtable
}

function betterHash(data) {
    var total = 0;
    var H = 31;
    for (var i = 0; i < data.length; i++) {
        total += total * H + data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(value) {
    var pos = this.betterHash(value);
    if (this.table[pos] == undefined) {
        this.table[pos] = value;
    } else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = value;
    }
}

function get(key) {
    var pos = this.betterHash(pos);
    if (this.table[pos] == key) {
        return this.table[pos];
    } else {
        while (this.table[pos] != key) {
            pos++;
        }
        return this.table[pos];
    }
}

function showAll() {
    for (var key in this.table) {
        console.log("键:" + key + "；值:" + this.table[key]);
    }
}
var hashTable = new HashTable();
hashTable.put("wqrqr");
hashTable.put("vxxc");
hashTable.put("dasda");
hashTable.put("dasda");
hashTable.showAll();
console.log(hashTable);
