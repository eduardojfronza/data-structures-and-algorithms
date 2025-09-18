class ListNode {
  value: number | null;
  next: ListNode | null;

  constructor(value: number, next?: ListNode) {
    this.value = value ?? null;
    this.next = next ?? null;
  }
}

function reverseLinkedList(head: ListNode | null) {
  let nextNode: null | ListNode = null;
  let newList: null | ListNode = null;

  while (head) {
    nextNode = head.next;
    head.next = newList;
    newList = head;
    head = nextNode;
  }

  return newList;
}
