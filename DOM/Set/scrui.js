const div=document.createElement('div')
console.log(div);
div.className="main"
div.id=Math.round(Math.random()*10+1)
div.setAttribute("title","generated title")
div.style.backgroundColor="green"
div.style.padding="12px"
// div.innerText="code"
const varp=document.createTextNode("codeing")
div.appendChild(varp)
document.body.appendChild(div)
