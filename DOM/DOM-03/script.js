//element access
// console.log(element.id)
// console.log(element.getAttribute('data'))
// console.log(element.setAttribute('order','pending'))
// console.log(element.getAttribute('order'))

//to see present or not 
// console.log(element.hasAttribute('order'))

//remove an element
// console.log(removeAttribute('order'))

//to cgeck all the attribute 
// console.log(element.attributes)






//------------craeating and removing the node element---------------
// const newDiv = document.createElement('div')
// const newText = document.createTextNode('hello adii')
// newDiv.appendChild(newText)
// body.append(newDiv)

// const newDivv = document.createElement('div')
// const newTextt = document.createTextNode('hieee adii')
// newDivv.appendChild(newTextt)
// body.prepend(newDivv)

// const op = document.createElement('div')
// const nt = document.createTextNode(' adii')
// op.appendChild(nt)
// body.before(op)

// const s = document.createElement('div')
// const n = document.createTextNode(' subham')
// s.appendChild(n)
// body.after(s)

// const ss = document.createElement('div')
// const nn = document.createTextNode(' you are replaced')
// ss.appendChild(nn)
// fistDiv.replaceWith(ss)

// const a = document.createElement('div')
// const b = document.createTextNode(' you are replaced')
// a.appendChild(nn)
// secondDiv.remove()


const div = document.createElement('div')
div.innerHTML=` <ul id="black" data="valid">
<li class="list">1st element</li>
<li class="list">2nd element</li>
<li class="list">3rd element</li>
</ul>`
body.append(div)