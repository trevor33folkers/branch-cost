function calculate() {
  var cogs = document.getElementById('cogs').value;
  var cost = document.getElementById('cost').value;
  var cur = document.getElementById('cur').value;
  var des = document.getElementById('des').value;
  var cur_sell = (cogs / (1-(cur/100)));
  console.log((cur_sell));
  var br_mar = (cur_sell - cost) / cur_sell;
  console.log((br_mar));
  var new_br = (cogs / (1-(des /100))) * (1-br_mar);
  console.log((new_br));
  document.getElementById('new_br').innerHTML = new_br;
}