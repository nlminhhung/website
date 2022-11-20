const yourName = localStorage.getItem('your-name');
const friendName = localStorage.getItem('friend-name');
const day = localStorage.getItem('day');
const month = localStorage.getItem('month');
const message = localStorage.getItem('message');
const printButton = document.getElementById("printButton");
const bgAudio = document.getElementById("bgAudio");
const btn = document.getElementById("printButton");

function From(yourName, friendName, message, day, month)
{
    const a = document.createElement("p");
    const b = document.createElement("p");
    const c = document.createElement("p");
    const d = document.createElement("p");
    a.innerHTML = "From: " + yourName;
    b.innerHTML = "To: " + friendName;
    c.innerHTML = '"' + message + '"';
    d.innerHTML = "Date: " + month + " " + 
    day;
    document.getElementById("container").appendChild(d);
    document.getElementById("container").appendChild(a);
    document.getElementById("container").appendChild(b);
    document.getElementById("container").appendChild(c);
}

From(yourName, friendName, message, day, month);


function Print()
{
  document.getElementById("footer").style.opacity = "0";
  var element = document.getElementById("body");
  html2pdf().from(element).save('cmsn.pdf');
}

window.onload = function() {
  var backgroundAudio=document.getElementById("bgAudio");
  backgroundAudio.volume=0.1;
}