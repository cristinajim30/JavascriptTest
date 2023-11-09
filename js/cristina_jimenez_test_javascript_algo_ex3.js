
import { checkLines } from './cristina_jimenez_test_javascript_algo_ex2.js';

/*Exercise 3.1 from JavaScript test */
function readingLines(arry){
    var isValid;
    for( var i=0; i<arry.length; i++){
        isValid = checkLines(arry[i]);
        if (!isValid){
            alert('The line which a repeated element is: ', i+1);
        }
        console.log(isValid)
    }
    
}


/*Exercise 3.2 from JavaScript test */