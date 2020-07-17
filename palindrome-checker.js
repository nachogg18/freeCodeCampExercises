function palindrome(str) {
return str.toLowerCase().replace(/[\/]/g, '').replace(/\\/g, '').replace(/[-_().,\s]/g,'').split('').reverse().concat().toString().replace(/,/g,'')===str.toLowerCase().replace(/[\/]/g, '').replace(/\\/g, '').replace(/[-_().,\s]/g,'').split('').concat().toString().replace(/,/g,'')
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));

