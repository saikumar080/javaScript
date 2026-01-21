
/* ============= 1. calling variable before Declaring with Var=====================
    1.✨While consoling a variable and Declaring it later it will show🌟
    👉👉👉👉👉 UNDEFINED
*/
    console.log(x)
    var x=8
/*==============  2. Calling variable without declaring it  =============
    ✨While consoling a variable without Declaring it will show 🌟
    👉👉👉👉👉 Reference Error: Y is not defined
*/
    // console.log(y)

/*=================== 3. Invoking the Function Expression before intizalise it  ============ 
    *  👉👉 it will  call the function print the value present in function
*/
        getName();
        function getName(){
            console.log("Saikumar")
        }

/*   ======= 4. Logging the function with name not invoking the function();  ============ 
    * 👉👉 it will  call the function and print the entire function.
 */
        console.log(getFullName);
        function getFullName(){
            console.log("Saikumar Pillalamarri")
        }

/*========== 5. Invoking the expression function before it is defined  ============ 
    * 👉👉 it  will throw as  TypeError: getFullNameExp is not a function.
      🔥🔥getFullNameExp is hoisted as undefined because it is declared with var. When it is invoked before assignment, JavaScript throws a TypeError since undefined is not callable.
      1. initially getFullNameExp is hoisted and assigned undefined why beacuse it assigned to var.
      2. when we are invoking the function it is trying to call undefined as a function which is not possible and it throws TypeError.

*/
        // getFullNameExp();
        // var getFullNameExp=function(){
        //     console.log("Pillalamarri Saikumar")
        // }

/* ========= 6. Invoking the arrow function before it is defined  ============ 
    * 👉👉 it  will throw as  TypeError: getFullNameArrow is not a function.
      🔥🔥getFullNameArrow is hoisted as undefined because it is declared with var. When it is invoked before assignment, JavaScript throws a TypeError since undefined is not callable.
      1. initially getFullNameArrow is hoisted and assigned undefined why beacuse it assigned to var.
      2. when we are invoking the function it is trying to call undefined as a function which is not possible and it throws TypeError.
*/
        // getFullNameArrow();
        // var getFullNameArrow=()=>{
        //     console.log("Saikumar P")
        // }
         if(x==8){
            var x=10;
            console.log(x);
         }
         for(var i=0;i<3;i++){
            var x=15;
            console.log(x);
         }
         console.log(x);







