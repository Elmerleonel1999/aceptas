let btnYes = document.getElementById('btn-yes');
btnYes.addEventListener('click', ()=>{
  btnYes.style.backgroundColor='#000';
  let yee = document.getElementById('yee');
  yee.style.display='block';
  let btns = document.getElementById('btns');
  btns.style.display='none';
});


let No = document.getElementById('btn-no');

No.addEventListener('mouseover',()=>{
  let x = Math.round(Math.random() * 90);
  let y = Math.round(Math.random() * 90);
  No.style.left = x + "%";
  No.style.top = y + "%";
});

No.addEventListener('click',()=>{
  let x = Math.round(Math.random() * 90);
  let y = Math.round(Math.random() * 90);
  No.style.left = x + "%";
  No.style.top = y + "%";
});
