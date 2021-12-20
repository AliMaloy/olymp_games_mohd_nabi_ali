 window.setInterval(function(){/*позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.*/
   if(window.innerWidth>600){  //ширина окна вместе с шириной полосы прокруткой 
      document.querySelector('.widget').style.position="fixed";
      document.querySelector('#top_clubs').style.width="20%";
      document.querySelector('#top_clubs').style.right="0";
       document.querySelector('#usa').style.width="50%";
  document.querySelector('#russia').style.width="50%";
  document.querySelector('#gb').style.width="50%";
      document.querySelector('.menu_list').style.display="block";
      document.querySelector('.widget').style.height="100%";
      document.querySelector('.widget').style.width="20%"; 
  }
else{ 
  if(document.querySelector('.menu_list').style.display=="block"){
  document.querySelector('#usa').style.width="75%";
  document.querySelector('#russia').style.width="75%";
  document.querySelector('#gb').style.width="75%";
  document.querySelector('#top_clubs').style.width="75%";
   document.querySelector('#top_clubs').style.marginLeft="25%";
 }
}
},0);