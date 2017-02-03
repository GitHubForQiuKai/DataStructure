function Stack() {
    this.dataStore = []; //栈的数据源
    this.top = 0; //栈顶的位置
    this.push = push; //入栈
    this.pop = pop; //出栈
    this.peek = peek; //返回栈顶的元素
    this.length = length; //栈的长度
    this.clear = clear; //清空栈
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}
var stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
console.log(stack.length());
console.log(stack.top);
console.log(stack.peek());
