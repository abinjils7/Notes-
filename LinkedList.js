 let head = {
  val: 10,
  next: {
    val: 20,
    next: {
      val: 30,
      next: {
        val: 20,
        next: {
          val: 40,
          next: {
            val: 10,
            next: null
          }
        }
      }
    }
  }
};

let current = head;
let seen = new Set();
let duplicates = new Set();

while (current !== null) {
  if (seen.has(current.val)) {
    duplicates.add(current.val);
  } else {
    seen.add(current.val);
  }
  current = current.next;
}

console.log("Duplicates:", [...duplicates]);

console.log(head)