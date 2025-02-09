let a= true;
let b=false;
console.log( a && b);


let val1=12;
let val2=34;
//AND operator
console.log(val1 && val2)

//OR operator
console.log(val1 || val2)


//   && || Operators in functions:-
function getName(name){
    return name;
}
let f1=false;
let f2=true;
console.log(getName("Saikumar Pillalamarri")   && val1)
console.log(f1 || getName("Saikumar Pillamarri"))



/*  ===============TERNARY OPERATORS========= 
=> condition ? statement1 : statement2;
*/
        let showRecipeOne=true;
        function getRecipeOne(recipeName){
            return recipeName;
        }

        function getRecipeTwo(recipeName){
            return recipeName;
        }

        showRecipeOne 
        ? console.log(getRecipeOne("Pizza 😋")) 
        : console.log(getRecipeTwo("No food 😒"));


/*  ======================= DESTRUCTRING IN ARRAYS && OBJECTS=============    */

        //Destructing in objects:-
        const id=1;
        const productName="Prodcut Apple Watch";
        const rating=5;

        const product1={
            id:id,
            productName:productName,
            rating:rating
        }
        console.log(product1)

        //---->>>>>>>  sort and Property <<<<-----
        const product2={
            id,
            productName,
            rating
        }
        console.log(product2)

        //----->>>>> Destructing in Objects   <<<<<<------
        const product3={
            description:"Product 3 description",
            id,
            productName,
            rating,
            Price:"13,000$"
        }

        //-------->>>>>>>>  Normal way to print value from objects:-  <<<<<<<------------
        const getProductThreeDescription=product3.description;
        console.log(getProductThreeDescription)

        //using Destruction ways:-
        const {description}=product3
        console.log(description)
        const{Price}=product3
        console.log(Price)


    //=====>>>>>>> Destructing in Arrays   =====<<<<<<<

    const array=[1,2,3]
    //Normal way:-
    let getArrayFirstValue=array[0]
    let getArraySecondValue=array[1]
    console.log(getArrayFirstValue)
    console.log(getArraySecondValue)
    
    //Destructing way:-
    const[,,firstElement,secondElement,]=array;
    console.log(firstElement,secondElement)
    const[,idx1,idx2]=array
    console.log(idx1,idx2)



/* =========== Default Parameters, Spread && rest operators ========= */

    //=========>>>> Default Parameters <<<<=========
        //passing default parameters 3,2
        //Here we are forget to passing arguments but default it will take from parameters value
        const multplication=((num1=3,num2=2)=>{
            console.log("::::::Multiplication Function:::::")
            console.log(num1,num2)
            return num1*num2
        })
        console.log(multplication(10))
        //here num1=10 is over ride with arguments we passed when we call the fn()
        const Addition=((num1=10,num2)=>{
            console.log("::::::: Addition Function:::::::")
            console.log(num1,num2)
            return num1+num2
        })
        console.log(Addition(1,2))
    

    //========>>>>>>> SPread Operator  <<<<<======
        const array2=['🍋','🍋‍🟩','🍌','🍍','🥭','🍉','🍈']
        console.log(array2)
        console.log(...array2)
        const array3=[4,5,6,7,8]
      console.log([...array2,...array3])
      console.log(...array2,...array3)


    //======>>>>>> Rest Operators <<<<======
    //here we don't we need define all the parameters we can use ...spread operator but we need to declare at last:-
      function getInfo(a,b,...c){
        console.log(a,b,c)
        return "saikumar Pillalamarri😎"
      }
      console.log(getInfo(1,2,3,4,5,6,7,8))


/* =========================================
 => map:- it's callback function which return new array,indx of array,
 => filter:-it will return callback function whether check the condition true all the values,
 => find:-it will return callback function whether condtion true and it will return single value 
 => some:- we will return boolean value true or false if the condtion is satisfied.
 => every:-It will return true when all the condition satisfied.
 => includes
 => indexOf
 => findIndex
 ======================================*/
        const personArray=[
            {
                name:`person1`,
                age:30,
                city:"USA"
            },
            {
                name:`person2`,
                age:40,
                city:"RUSSIA"
            },
            {
                name:`person3`,
                age:50,
                city:"INDIA"
            },
            {
                name:`person4`,
                age:60,
                city:"USA"
            },
            {
                name:`person5`,
                age:70,
                city:"RUSSIA"
            }
        ]

        //----->>>>>>>> Map   <<<<<<<<<<<--------------
        let getAllNames=personArray.map((singlePerson,ind,arr)=>{
            console.log(singlePerson,ind,arr)
            return `${singlePerson.name} age is ${singlePerson.age}`
        })
        console.log(getAllNames)

        //------->>>>>>>>>>>> find  <<<<<<<<<<-------------
        let getPersonFromUSA=personArray.find((singlePerson,ind)=>{
            return singlePerson.city==="USA"
        })
        console.log(getPersonFromUSA)

        //------->>>>>>>>>>>> filter   <<<<<<<<<<-----------
        let getAllPersonFromUSA=personArray.filter((singlePerson,ind,arr)=>{
            return singlePerson.city==="USA"
        })
        console.log(getAllPersonFromUSA)

        //---------->>>>>>>>>>>> some <<<<<<<-------------------
        let checkSomeArrayMethodWithExample=personArray.some(singlePerson=>{
            return singlePerson.age>90;
        })
        console.log(checkSomeArrayMethodWithExample)

        //-------->>>>>>>>> EVERY <<<<<<<------------
        let checkEveryArrayMethodWithExample=personArray.every((singlePerson)=>{
            return singlePerson.age>20;
        })
        console.log(checkEveryArrayMethodWithExample)

        //----->>>>>>>>>> Includes  <<<<<------------
        const fruitsArray=["apple🍎","banana🍌","Orange🍋"]
        console.log(fruitsArray.includes("apple🍎"))
        console.log(fruitsArray.indexOf("apple🍎"))
        

        //---->>>>>> findIndex <<<<<<------
        let getIndexOfRussiaPerson=personArray.findIndex(singlePerson=>{
            return singlePerson.city==="RUSSIA"
        })
        console.log(getIndexOfRussiaPerson)





//================= Async - Await Function
let getListOfProductsElement=document.querySelector(".list-of-products")


function renderProducts(getProducts){
    getListOfProductsElement.innerHTML=getProducts.map(singleProduct=>{
        return `<p>${singleProduct.title}</p>`
    }).join(" ")
}

async function fetchListOfProducts() {
    try{
        const apiResponse=await fetch("https://dummyjson.com/products",{
            method:"GET"
        })
        const result=await apiResponse.json();
        console.log(result)
        if(result?.products?.length>0) renderProducts(result?.products)
    }catch(e){
        console.log(e)
    }
}



fetchListOfProducts()