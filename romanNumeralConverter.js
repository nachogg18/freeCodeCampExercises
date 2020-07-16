function convertToRoman(num) {
    var romanos_miles = ''
    var romanos_centenas = ''
    var romanos_decenas = ''
    var romanos_unidades = ''
   
   
    var miles = Math.trunc(num/1000)
    console.log(miles)
    var resto = num%1000
    console.log(resto)
    var centenas = Math.trunc(resto/100)
    console.log(centenas)
    resto = resto%100
    var decenas = Math.trunc(resto/10)
    console.log(decenas)
    resto = resto%10
    var unidades = resto
    console.log(miles,centenas,decenas,unidades)
    
    
    switch(miles) {
      case 1:
             romanos_miles = 'M' + romanos_miles
             break;
      case 2:
             romanos_miles = 'MM' + romanos_miles
             break;
      case 3:
             romanos_miles = 'MMM' + romanos_miles
             break;
      case 4:
             romanos_miles = 'MMMM' + romanos_miles
             break;
    }
   
    switch(centenas) {
      case 1:
             romanos_centenas = 'C' 
             break;
      case 2:
             romanos_centenas = 'CC' 
             break;
      case 3:
             romanos_centenas = 'CCC' 
             break;
      case 4:
             romanos_centenas = 'CD' 
             break;
      case 5:
             romanos_centenas = 'D'
             break;
      case 6:
             romanos_centenas = 'DC'
             break;
      case 7:
             romanos_centenas = 'DCC'
             break; 
      case 8:
             romanos_centenas = 'DCCC'
             break;
      case 9:
             romanos_centenas = 'CM'
             break 
             
    }
   
    switch(decenas) {
      case 1:
             romanos_decenas = 'X' 
             break;
      case 2:
             romanos_decenas = 'XX' 
             break;
      case 3:
             romanos_decenas = 'XXX' 
             break;
      case 4:
             romanos_decenas = 'XL' 
             break;
      case 5:
             romanos_decenas = 'L'
             break;
      case 6:
             romanos_decenas = 'LX'
             break;
      case 7:
             romanos_decenas = 'LXX'
             break; 
      case 8:
             romanos_decenas = 'LXXX'
             break;
      case 9:
             romanos_decenas = 'XC'
             break         
    }
   
    switch(unidades) {
      case 1:
             romanos_unidades = 'I' 
             break;
      case 2:
             romanos_unidades = 'II' 
             break;
      case 3:
             romanos_unidades = 'III' 
             break;
      case 4:
             romanos_unidades = 'IV' 
             break;
      case 5:
             romanos_unidades = 'V'
             break;
      case 6:
             romanos_unidades = 'VI'
             break;
      case 7:
             romanos_unidades = 'VII'
             break; 
      case 8:
             romanos_unidades = 'VIII'
             break;
      case 9:
             romanos_unidades = 'IX'
             break         
    }
   
   
   
   
   
   
   
     return (romanos_miles+romanos_centenas+romanos_decenas+romanos_unidades)
   
   }
   
   convertToRoman(891);