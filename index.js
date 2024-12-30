// class SetClass {
//     constructor() {
//         this.door = "door"; 
//         // console.log(this.door); 
//     }

//     car() {
//         console.log(this.door); 
//     }
// }
// let object = new SetClass()
// let btn = document.getElementsByTagName("button")
// btn[0].addEventListener("click", ()=>{
//     object.car(this.door)
// });

// function family(nam,age,gender){
//     this.name=nam,
//     this.age=age,
//     this.gender=gender
// }
// family.prototype.job="manager";
// let myFather=new family("surya",21,"male")
// console.log(myFather);


// let video={
//     title:"a",
//     Show(){
//         console.log(this.title)
//     }
// }
// video.Show()

// console.log("hello");
// let str=""
// for(let i=0;i<2;i++){
//     for(let j=0;j<1;j++){
//         str += "*"
//     }
//     console.log(str)
// }
let a = {
    value: 1,
    valueOf: function() {
      return this.value++;
    }
  };
//   console.log(a.valueOf())
  if (a == 1 && a == 2 && a == 3) {
    console.log("hello");
  } 