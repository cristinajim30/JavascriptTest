/*Exercise 2 from JavaScript test */
function checkLines(array){
    var isValid = true;
    //console.log(array.length);
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      //console.log('element ' ,element);
    
      // Check if the element is a number from 1 to 9
      if ( element < 1 || element > 9) {
        isValid = false;
        console.log('no es un numero');
        break;
      }
      // Check if the element is different from the previous elements
      //console.log('index: ' , array.indexOf(element));
      //console.log('i: ' , i);
      if (array.indexOf(element) !== i) {
            alert('The repeated element is ' , array[i]);
          isValid = false;
        break;
      }
    }
    return isValid;

}
export {checkLines};