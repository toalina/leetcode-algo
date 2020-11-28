function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function reverseList(head) {
  let dummy = null;
  let temp = null;
  
  while (head != null) {
      temp = head.next
      head.next = dummy;
      dummy = head;
      head = temp;
  }
  
  return dummy;
}

var head = [1,2,3,4,5];
console.log(reverseList(head));