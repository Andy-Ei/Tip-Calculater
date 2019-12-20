//Function for getElementById
function $(id) {
  return document.getElementById(id)
}

//Add Enter for Bill field
document.getElementById("bill").addEventListener("keyup", event => {
  if (event.key !== "Enter") return; // Use `.key` instead.
  document.getElementById("calc").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});

//Add Enter for Tip field
document.getElementById("tip").addEventListener("keyup", event => {
  if (event.key !== "Enter") return; // Use `.key` instead.
  document.getElementById("calc").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});

//Calculate and return the total amount
function result() {

  var billNode = $("bill").value
  billNode = Number(billNode)


  var tipNode = $("tip").value
  tipNode = Number(tipNode)

  var outputNode = $("output")

  if (billNode && tipNode) {
    var total = ((billNode / 100 * tipNode) + billNode)
    // console.log(total);
    total = Math.round(total)
    // console.log(total);
    outputNode.innerHTML = total + "$"
  } else {
    outputNode.innerHTML = "Please enter valid numbers"
  }
}