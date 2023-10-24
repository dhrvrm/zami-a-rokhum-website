document.querySelector(".scrollc").addEventListener("scroll", (e) => {
  x = (e.target.scrollTop / e.target.scrollHeight) * 100;
  setAxis(x);
  setScale(x);
});
// document.querySelector('.scrollc').addEventListener('scroll', function() {
//     console.log("chacha");
//
//   });

// document.querySelector("html").addEventListener("scroll", (e) => {
//     // console.log(e.target.scrollTop)
//     // console.log(e.target.scrollHeight)

//     console.log("chachii");

//     // if(document.documentElement.clientWidth > 900){
//     //     document.body.style.backgroundSize = "2"+scale+"%";
//     // }
// }
// // x = ((window.scrollY / window.document.body.getBoundingClientRect().height) * 100);
// // y = 90 - x;
// // console.log(pos);
// );

var circle= document.querySelector(".circle");

function setAxis(axis){
    circle.style.right = (axis*0.5) + "%";
}
function setScale(scale){
    circle.style.scale = ((100-scale)/100) +"";
}

setAxis(-10);
