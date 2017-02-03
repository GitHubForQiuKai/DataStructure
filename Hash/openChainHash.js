/*
 *开链法：当发现经过散列算法后的结果相同时；在每个存储值的后面再重新开辟一条链，依次往后加；
 */
function HashTable() {
    this.table = new Array(137);
    this.betterHash = betterHash; //hash算法
    this.put = put; //放入键值对
    this.get = get; //获取元素
    this.showAll = showAll; //展示hashtable
    this.openChain = openChain; //开链；关键
}

function openChain() {
    for (var i = 0; i < this.table.length; i++) {
        //重新开链
        this.table[i] = [];
    }
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
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index] = value;
    } else {
        while (this.table[pos][index] != undefined) {

            ++index;
        }
        this.table[pos][index] = value;
    }

}

function get(key) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == key) {
        return this.table[pos][index];
    } else {
        while (this.table[pos][index] != key) {
            index++;
        }
        return this.table[pos][index];
    }
}

function showAll() {
    for (var key in this.table) {
    	if(this.table[key][0]!== undefined){

        console.log("键:" + key + "；值:" + this.table[key]);
    	}
    }
}

var hashTable = new HashTable();
hashTable.openChain();
hashTable.put("adidas");
hashTable.put("china");
hashTable.put("nicha");
hashTable.put("dasdas");
hashTable.put("wqrqr");
hashTable.put("vxxc");
hashTable.put("dasda");
hashTable.put("dasda");
console.log(hashTable.get("vxxc"));
hashTable.showAll();
console.log(hashTable);
