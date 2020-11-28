//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
 
function isPalindrome (head) {
    
    if (head === null) return true;
    
    let current = head;
    const array = [current.val];
    
    while (current.next != null) {
        current = current.next
        array.push(current.val)
    }
    
    let low = 0;
    let high = array.length - 1
    
    while (low < high) {
        if (array[low] === array[high]) {
            low++;
            high--;
        } else {
            return false
        }
        
        return true;
    }
};