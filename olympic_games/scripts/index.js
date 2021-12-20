 window.setInterval(function(){/*позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.*/
   if(window.innerWidth>600){/*если вся ширина окна больше 600, то...*/
    document.querySelector('.widget').style.position="fixed";
      document.querySelector('#nov').style.width="60%";  
      document.querySelector('#match').style.width="60%";
      document.querySelector('#match').style.width="60%";
      document.querySelector('#content5').style.position="fixed";
      document.querySelector('#content5').style.width="15%";
      document.querySelector('#content5').style.marginTop="0%"; 
      document.querySelector('#content2').style.position="fixed";
      document.querySelector('#content2').style.width="15%";
      document.querySelector('.menu_list').style.display="block";
      document.querySelector('.widget').style.height="100%";
      document.querySelector('.widget').style.width="20%"; 
  }
},0);
