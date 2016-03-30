function Node(data){
	this.data = data;
	this.next = null;
}

function SinglyLinkedList(){
	this.head = null;
	this.tail = null;
	this.numberOfvalues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
	// body...
	var node = new Node(data);
	if (!this.head) {
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;
		his.tail = node;
	}
	this.numberOfvalues++;
};

SinglyLinkedList.prototype.remove = function(data) {
	var prev = this.head;
	var curr = this.head;
	while(curr){
		if (curr.data === data) {
			if (curr === this.head) {
				this.head = this.head.next;
			}
			if (curr === this.tail) {
				this.tail = prev;
			}
			prev.next = curr.next;
			this.numberOfvalues--;
		} else {
			prev = curr;
		}
		curr = curr.next;
	}
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
	// body...
	var curr = this.head;
	while(curr){
		if (curr.data === toNodeData) {
			var node = new Node(data);
			if (curr === this.tail) {
				this.tail.next = node;
				this.tail = node;
			} else {
				node.next = curr.next;
				curr.next = node;
			}
			this.numberOfvalues++;
		}
		curr = curr.next;
	}
};

SinglyLinkedList.prototype.length = function() {
	// body...
	return this.numberOfvalues;
};

SinglyLinkedList.prototype.print = function() {
	// body...
	var string = " ";
	var curr = this.head;
	while(curr){
		string += curr.data + " ";
		curr = curr.next;
	}
	return string.trim();
};

module.exports = {
	SinglyLinkedList : SinglyLinkedList;
	Node : Node;
}
