var label1 = document.querySelector('.first-label');
var label2 = document.querySelector('.midl-label');
var label3 = document.querySelector('.last-label');

console.log(label1)
// label1.addEventListener('dbclick', function (e) {
//   e.preventDefault();
// })
var button = document.querySelector('button')
// section.style.backgroundColor = 'aqua'


function colors1() {
  label1.style.backgroundColor = 'blue'
  label2.style.backgroundColor = 'transparent'
  label3.style.backgroundColor = 'transparent'
  
}
function colors2() {
  label2.style.backgroundColor = 'blue'
  label1.style.backgroundColor = 'transparent'
  label3.style.backgroundColor = 'transparent'
  
}
function colors3() {
  label3.style.backgroundColor = 'blue'
  label2.style.backgroundColor = 'transparent'
  label1.style.backgroundColor = 'transparent'
  
}
function colors4() {
  label3.style.backgroundColor = 'transparent'
  label2.style.backgroundColor = 'transparent'
  label1.style.backgroundColor = 'transparent'
  
}
label1.addEventListener('click', function () {
  colors1()
})
label2.addEventListener('click', function () {
  colors2()
})
label3.addEventListener('click', function () {
  colors3()
})
button.addEventListener('click', function () {
  colors4()
})