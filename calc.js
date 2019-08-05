


function doMath(num1, operator,num2){
   num1 = parseFloat(num1)
   num2 = parseFloat(num2)
    var result = null;
          switch(operator){
            case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;
            case '*':
            result = num1 * num2;
            break;
            case '/':
            result = num1 / num2;
            break;

              }
              return result;
  }

  //var result = doMath (2,'+' ,4);
  //console.log(result);
  //console.log(process.argv);
  var num1 = process.argv[2];
  var operator = process.argv[3];
  var num2 = process.argv[4];
  console.log(doMath(num1,operator,num2));
