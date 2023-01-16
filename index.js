
function attachEventListner(){
    let count=0
    document.getElementById("10").addEventListener("click",function xyz(){
        console.log("hit",++count)
    })
}
attachEventListner();
addEventListener(onload,function(){
    console.log("dom contents loaded")
})

window.addEventListener('load', function () {
    console.log("DOM has loaded"    )
  })