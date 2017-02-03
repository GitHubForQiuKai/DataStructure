/*
 *图的实现与算法	
 */
function Graph(vertex) {
    this.vertex = vertex; //顶点数
    this.edge = 0; //边的数量
    this.flag = []; //搜索时的标记
    this.adjacency = []; //邻界表
    this.init = init; //初始化二维数据
    this.addEdge = addEdge; //添加边
    this.depthFirstSearch = depthFirstSearch; //深度优先搜索
    this.breadthFirstSearch = breadthFirstSearch; //广度优先搜索
    this.init();
}

function init() {
    for (var i = 0; i < this.vertex; i++) {
        this.adjacency[i] = [];
        this.flag[i] = false;
    }
}

function addEdge(A, B) {
    this.adjacency[A].push(B);
    this.adjacency[B].push(A);
    this.edge++;
}

function depthFirstSearch(startV) {
    this.flag[startV] = true;
    console.log("【深度优先搜索】:" + startV + "被访问");
    for (var contanisV in (this.adjacency[startV])) {
        var current = this.adjacency[startV][contanisV];
        if (!this.flag[current]) {
            this.depthFirstSearch(current);
        }
    }
}

function breadthFirstSearch(startV) {
    var queue = [];
    this.flag[startV] = true;
    queue.push(startV);
    while (queue.length > 0) {
        var current = queue.shift();
        console.log("【广度度优先搜索】:" + current + "被访问");
        for (var contanisV in (this.adjacency[current])) {
            var v = this.adjacency[current][contanisV];
            if (!this.flag[v]) {
                this.flag[v] = true;
                queue.push(v);
            }
        }
    }
}

var graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 4);
graph.addEdge(1, 3);
console.log(graph);
// console.log(graph.depthFirstSearch(0));
console.log(graph.breadthFirstSearch(0));
