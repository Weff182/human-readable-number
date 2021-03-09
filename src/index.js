module.exports = function toReadable(number) {
  let a = number;
  arr_numb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '30', '40', '50', '60', '70', '80', '90']
  arr_word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  a = a.toString().split('');

  function number1(a) {
    let inx = arr_numb.indexOf(a);
    let n = arr_word[inx];
    return n;
  }

  function number2(b) {
    if ( b === '0') {
      return 'zero';
    } 
    let k = b + '0';
    let inx = arr_numb.indexOf(k);
    let n = arr_word[inx];
    return n;
  }

 if ( a.length === 1) {
    a = a[0];
  a = number1(a);
  return a;
  }

  if (a.length === 2) {
    if ( number1(a.join("")) !== undefined) {
      a = a.join("");
      a = number1(a);
      return a;
    }
  let b = a[0];
  a = a[1];
 
  b = number2(b);
  a = number1(a);
  if ( a === 'zero') {
    a = '';
  }
  let c = `${b} ${a}`;
    return c;

 }
 if (a.length === 3) {
  let c = a[2];
  let b = a[1];
  a = a[0];
  a = number1(a); 
  if ( number1((b + c)) !== undefined) {
    b = (b + c);
    b = number1(b);
    let answ = `${a} hundred ${b}`;
    return answ;
  }
  c = number1(c);
  b = number2(b);
  if ( b === 'zero') {
    if ( c === 'zero') {
      let answ = `${a} hundred`;
      return answ;
      }
    let answ = `${a} hundred ${c}`;
    return answ;
  }
  if ( c === 'zero') {
    let answ = `${a} hundred ${b}`;
    return answ;
  }

  let answ = `${a} hundred ${b} ${c}`;
  return answ;
 }
}
  

