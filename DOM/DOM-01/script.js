
// -----------root node------------------------ 
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);


// // --------------child node---------------
// console.log(document.body.children);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);


// for(node of document.body.children){
//     console.log(document.body.children);
// }

// const op=Array.from(document.body.children)
// console.log(op)


// // -----------sibling---------------
// console.log(document.body.children);
// console.log(document.body.children[0]);

// const hm = document.body.children[0]
// console.log(hm.nextSibling);
// console.log(hm.nextElementSibling);

// console.log(document.body.children[0].children)
// ultag=document.body.children[0];
// firstli=ultag.children[0]
// console.log(firstli)
// console.log(firstli.textContent)
// secondli=ultag.children[1]
// console.log(secondli)
// console.log(secondli.textContent)
// console.log(secondli.previousElementSibling.textContent)

// // ----------table.row-----------------------
console.log(document.body.children)
 
tabletag=document.body.children[1];
//  console.log(tabletag.tBodies)
//  console.log(tabletag.tBodies[0])
//  console.log(tabletag.rows)
//  console.log(tabletag.rows[0])
//  console.log(tabletag.tBodies[0].rows)
 console.log(tabletag.tBodies[0].rows[0])
 console.log(tabletag.tBodies[0].rows[0].cells[0])
 console.log(tabletag.tBodies[0].rows[0].cells[0].textContent)


