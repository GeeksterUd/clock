const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function clock() {
  let h =new Date().getHours();
  let m =new Date().getMinutes();
  let s =new Date().getSeconds();
  let ampm2 = "AM";
  if(h>12){
    h=h-12;
    ampm2="PM";
  }
  
  h =h < 10 ? "0" + h : h;
  m =m < 10 ? "0" + m : m;
  s =s < 10 ? "0" + s : s;
  hour.innerText=h;
  minute.innerText=m;
  second.innerText=s;
  ampm.innerText=ampm2;
  setTimeout(() => {
    clock();
  },1000);
}
clock();
