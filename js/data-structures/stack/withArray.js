class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this._store = [];
        this._top = -1;
    }

    push(item) {
        if (this._top === (this.maxSize - 1)) {
            console.log('stack overflow');
        } else {
            this._store[++this._top] = item;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('no element to pop');
        } else {
            return this._store[this._top--];
        }
    }

    isEmpty() {
        return this._top < 0;
    }
}

module.exports = Stack;
