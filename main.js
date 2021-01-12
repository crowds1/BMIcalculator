'use strict'

  var btn = document.getElementById('btn');
  console.log(btn);

  btn.addEventListener('click',() => {
    var userweight = document.getElementById('weight').value;
    var usertall = document.getElementById('tall').value/100;
        console.log(userweight);
        console.log(usertall);
    alert('BMIはズバリ' + (userweight / (usertall * usertall)));

  }, false);
