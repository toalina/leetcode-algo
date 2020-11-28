function removeNthFromEnd (head, n) {
  let previous = null;
  let current = head;
  let ahead = head;
  
  for (let i = 0; i < n; i++) {
      if (ahead == null) return head;
      ahead = ahead.next
  }
  
  while (ahead != null) {
      previous = current;
      current = current.next;
      ahead = ahead.next;
  }
  
  if (!previous) return current.next;
  
  previous.next = current.next;
  return head;
}

var head = [1,2,3,4,5]
var n = 2
console.log(removeNthFromEnd(head, n))
