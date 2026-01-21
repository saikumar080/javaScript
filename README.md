🔥🔥❤️‍🔥 I am Learning about Hoisting🔥🔥❤️‍🔥
👉👉👉👉👉Hoisting: is a phenomena in js by which u can access these variables and functions even before u have initailed it.
⭐“Hoisting occurs because JavaScript allocates memory to variables and functions during the memory creation phase of the execution context.”

Here the  Reason is simple Where we run JS program and Global execution context is created and its; created in ✌️ 2 phases

📍 1. Memory creation phase : variable and functions

📍 2.  execution Phase : executing line-by-line.

⭐ Here Memory creation phase plays as role in Hoisting:

    when the  whole code in JS  starts executing the  memory is allocated to each and every  variable and function.

                        🔥 How the  memory  is allocated:

     
=================================================================================
                    🤖🤖🤖🤖1. calling variable before Declaring with Var

			    ℹ️code: 
			        console.log(x);
			        var x=10

    				✨✨ UNDEFINED.

		    🧑‍💻🧑‍💻Reason: 
		                 1.Var x -> memory allocated as undefined.
		                 2.initialization happens in execution phase. no code available it  will show undefined 

==================================================
						🤖🤖🤖🤖2. Calling Variable without declaring it
					
					    ℹ️ code:
					        console.log(y)
		    🧑‍💻🧑‍💻Reason:
		            ✨✨ it throw Reference Error: Y is not defined.

==============================================================
✨✨3.Invoking  function Before Intizalise it.
👉👉 it will print the values present in function.

===================================
🤖🤖🤖🤖4. Locking the function with name not invoking the function();
            ℹ️: console.log(getFullName);
                    function getFullName(){
                        console.log("Saikumar Pillalamarri")
                    }
    🧑‍💻🧑‍💻Reason:
            ✨✨ it will print entire function.
==============================================================
🤖🤖🤖🤖 5. Invoking the expression function && Arrow function before it is defined.

ℹ️ code: 
        getFullNameExp();
            var getFullNameExp=function(){
            console.log("Pillalamarri Saikumar")
        }
    🧑‍💻🧑‍💻Reason:
            👉👉 it  will throw as  TypeError: getFullNameExp is not a function.

            🔥🔥getFullNameExp is hoisted as undefined because it is declared with var. When it is invoked before assignment, JavaScript throws a TypeError since undefined is not callable.

            ✨ 1. initially getFullNameExp is hoisted and assigned undefined why beacuse it assigned to var.

            ✨2. when we are invoking the function it is trying to call undefined as a function which is not possible and it throws TypeError.
      
