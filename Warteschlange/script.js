let queue = [];
let currentNumber = 1;
let userNumber = null;

function getNumber() {
  userNumber = currentNumber + queue.length;
  queue.push(userNumber);
  document.getElementById("userNumber").innerText = userNumber;
  updateQueue();
}

function updateQueue() {
  let html = "";
  queue.forEach((num) => {
    html += `<span>${num}</span>`;
  });
  document.getElementById("queueDisplay").innerHTML = html;
}

setInterval(() => {
  if (queue.length > 0) {
    document.getElementById("currentCall").innerText = queue[0];
    queue.shift();
    updateQueue();
  }
}, 5000);
