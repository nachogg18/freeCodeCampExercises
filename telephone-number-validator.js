function telephoneCheck(str) {
  var regexp1 = /^[1]{0,1}\s{0,1}[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  var regexp2 = /^[1]{0,1}\s{0,1}\([0-9]{3}\)\s{0,1}[0-9]{3}-[0-9]{4}$/
  var regexp3 = /^[1]{0,1} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/
  var regexp4 = /^[1]{0,1} [0-9]{3} [0-9]{3} [0-9]{4}$/
  var regexp5 = /^[1]{0,1}[0-9]{3}[0-9]{3}[0-9]{4}$/


  

  return regexp1.test(str) || regexp2.test(str) || regexp3.test(str) || regexp4.test(str) || regexp5.test(str)
}

console.log(telephoneCheck("27576227382"));
