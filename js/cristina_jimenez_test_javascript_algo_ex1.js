import {array_number} from "./javascript_test_je1.js";


    /*JavaScript Exercise 1: Cristina Jimenez */
    export var to_verify = new Array(9);
    for (let i = 0; i < 9; i++) {
        to_verify[i] = [];
        for (let j = 0; j < 9; j++) {
          to_verify[j] = [];
        }
      }
    
    export function tranferTable(newArry){
        //reading table and transfer
        for (var i = 0; i < array_number.length; i++) {
            var cadena;
            var j=0;
            cadena = array_number[i];
                //we go through the string
                for (var x = 0; x <cadena.length; x++){
                    if (cadena[x] !== " "){
                        newArry[i][j] = cadena[x] ;
                        j++;
                        
                    }
                }
          }
          return newArry;
    }
    /*
    function readVerifyTable(array){
        for (var i = 0; i < to_verify.length; i++) {
            for (var j = 0; j < to_verify.length; j++) {
               console.log(to_verify[i][j]);
            }
             console.log("---------- ");
        }
    }*/
    export function displayTable(array){
        var totalCells = 80;
        var c= 0;
        while (c <= totalCells){
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    var input= document.getElementById("cell-" + c);
                    input.value = array[i][j];
                    c++;
                }
            }
        }
        
    }

    






