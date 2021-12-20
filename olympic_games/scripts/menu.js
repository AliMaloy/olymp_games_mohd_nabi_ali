  function open_close_menu(){//////////////////////////////////////////////////////////////////////
      if(document.querySelector('.menu_list').style.display=="none"){
        document.querySelector('.menu_list').style.display="block";
        document.querySelector('.widget').style.position="fixed";
    document.querySelector('.widget').style.height="100%";
    document.querySelector('.widget').style.width="20%";
  }
  else{
     document.querySelector('.widget').style.position="relative";
    document.querySelector('.menu_list').style.display="none";
     document.querySelector('.widget').style.height="20%";
    document.querySelector('.widget').style.width="100%";
    document.querySelector('.widget').style.zIndex="100";
  }
      document.querySelector(".container").classList.toggle("change");/////////////////////////////
}
  function open_close_test(){////////////////////////////////////////////////////////////////////
    open_close_menu();///////////////////////////////////////////////////////////////////////////
    if(document.querySelector('.menu_list').style.display=="block"){    
    document.querySelector('#content3').style.width="60%";
    document.querySelector('#content3').style.left="25%"; 
  }
  else{    
    document.querySelector('#content3').style.width="100%";
    document.querySelector('#content3').style.left="0";  
    document.querySelector('#content3').style.zIndex="1";  
  }
  }
  function open_close_table(){
    open_close_menu();
    if(document.querySelector('.menu_list').style.display=="block"){     
    document.querySelector('.main1').style.width="78vw";
    document.querySelector('.main1').style.marginTop="5vh";
  }
  else{    
    document.querySelector('.main1').style.width="100%";
    document.querySelector('.main1').style.marginTop="20vh";   
  }
  }

  function open_close_top(){
  open_close_menu();
  if(document.querySelector('.menu_list').style.display=="block"){  
    document.querySelector('#usa').style.width="75%";
  document.querySelector('#russia').style.width="75%";
  document.querySelector('#gb').style.width="75%";
  document.querySelector('#top_clubs').style.width="75%";
   document.querySelector('#top_clubs').style.marginLeft="25%";
  }
  else{
  document.querySelector('#usa').style.width="100%";
  document.querySelector('#russia').style.width="100%";
  document.querySelector('#gb').style.width="100%";
  document.querySelector('#top_clubs').style.width="100%";
   document.querySelector('#top_clubs').style.marginLeft="0";
   }
   }
   function open_close_komanda(){
      open_close_menu();
      if(document.querySelector('.menu_list').style.display=="block"){
       document.querySelector('.fon').style.width="80vw"; /*field111*/
       document.querySelector('#content7').style.width="80%"; 
       }
       else{ 
      document.querySelector('.widget').style.zIndex="1";
      document.querySelector('#content7').style.zIndex="0";

      document.querySelector('#content7').style.width="100%";
      document.querySelector('.fon').style.width="100%";     /*field111*/
     }
   } 
    function open_close_index(x){
      open_close_menu();
      if(document.querySelector('.menu_list').style.display=="block"){
       document.querySelector('#nov').style.width="60%";  
       document.querySelector('#match').style.width="60%";
       document.querySelector('#match').style.width="60%";
       document.querySelector('#content5').style.position="fixed";/*для того, чтобы при прокрутке не двигался(Факт дня)*/
      document.querySelector('#content5').style.width="15%";/*ширина занимает 15% экрана(Факт дня)*/
      document.querySelector('#content5').style.marginTop="0%";/*расстояние сверху всегда 0 было(Факт дня)*/
      document.querySelector('#content2').style.position="fixed";/*для того, чтобы при прокрутке не двигался*/
      document.querySelector('#content2').style.width="15%";/*ширина занимает 15% экрана(Факт дня)*/
       }
       else{      
      document.querySelector('#nov').style.width="100%";  
      document.querySelector('#match').style.width="100%"; 
      document.querySelector('#content5').style.position="relative";/*для того, чтобы при прокрутке не двигался(Факт дня)*/
      document.querySelector('#content5').style.width="100%";/*для того, чтобы при прокрутке не двигался(Факт дня)*/
      document.querySelector('#content5').style.marginTop="5%"; /*отсуп 5% внешний сверху(Факт дня)*/
       document.querySelector('#content2').style.position="relative";/*для того, чтобы при прокрутке не двигался(Факт дня)*/
      document.querySelector('#content2').style.width="100%";    
     }
   } 