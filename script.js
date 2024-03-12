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

function margin() {
  var cogs = document.getElementById('cogs').value;
  var des = document.getElementById('des').value;
  var new_sell = cogs / (1-(des/100));
  document.getElementById('new_sell').innerHTML = new_sell;
}

function list() {
  var list = document.getElementById('list').value;
  var mult = document.getElementById('mult').value;
  var our_cost = list * mult;
  document.getElementById('our_cost').innerHTML = our_cost;
}

function listMargin() {
  var our_cost = document.getElementById('our_cost').innerHTML;
  var margin = document.getElementById('margin').value;
  var cust_cost = our_cost / (1-(margin/100));
  document.getElementById('cust_cost').innerHTML = cust_cost;
}