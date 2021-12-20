function ready(fn) {//чтобы всё загрузилось на странице
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn)//DOMContentLoaded-браузер полностью загрузил HTML, было построено DOM - дерево, но внешние ресурсы, такие как img и стили могут быть ещё не загружены
  }
}
var name = window.prompt('Введите свое имя и давайте начнем!!');//имени присвоеватеся значение, которое вводит пользователь в окне
window.confirm ('Ну что, ' + name + ' ты готов??' )
ready(choices);
var backs=[
"linear-gradient(rgba(207, 0, 15, 1),rgba(0,0,0,0.5))",//фон в опроснике главный красного цвета
"linear-gradient(rgba(38, 166, 91, 1),rgba(0,0,0,0.5))",//фон на 1 вопросе
"linear-gradient(rgba(34, 167, 240, 1),rgba(0,0,0,0.5))",//фон на 2 вопросе
"linear-gradient(#c21500,#ffc500)",//фон на 3 вопросе
"linear-gradient(rgba(249, 105, 14, 1),rgba(0,0,0,0.5))",//фон на 4 вопросе
"linear-gradient(rgba(154, 18, 179, 1),rgba(0,0,0,0.5))"//фон на 5 вопросе
];
var content =//вопросы в олимпийской векторине
[
  {question: 'Сколько золотых медалей принесли российские спортсмены?', choices: ["20", "21", "22", "23"], correct: 0,picture:'img/russian_flag.jpg'},
  {question: 'Что символизируют пять колец на Олимпийском флаге??', choices: ['Пять континентов', 'Пять пальцев', '5 цветов', '5 пальцев'], correct: 0 ,picture:'img/olymp_flag.jpg'},
  {question: 'Где прошли первые зимние Олимпийские игры?', choices: ['В Швейцарии', 'В Швеции', 'Во Франции', 'В Испании'], correct: 2,picture:'img/first_olymp_games.jpg'},
  {question: 'Какую награду получал победитель Олимпийских игр в древности?', choices: ['Лавровый венок', 'Венок из ромашек', 'Композицию из роз', '12 золотых монет'], correct: 0,picture:'img/lavr_venok.jpg'},
  {question: 'Какое современное государство считается родиной Олимпийских игр?', choices: ['Россия', 'Турция','Египет', 'Греция'], correct: 3,picture:'img/greek_olymp_games.jpg'},
  {question: 'Какой вид спорта был включён в программу Олимпиад из-за легенды о смерти его основоположника?', choices: ['Бадминтон', 'Марафонский бег', 'Настольнный теннис', 'Лёгкая атлетика', 'Хоккей'], correct: 1,picture:'img/maraphon_run.jpg'} 
];
var x = 0;//счетчик от которого зависит, какие значение question, choises, correct, picture будут выдаваться
var y = 1;//счётчик для отображения номера вопроса
var score = 0;//счётчик правильных ответов
function colorit(){  /*функция, которая отвечает за цвет кнопки при разных вариантвх правильных ответах*/
  if(content[x]['correct']==0){//если 1 правильный-то 1 кнопка зеленая, если 2, то 2 кнопка зеленая и тд.
    document.getElementById("button1").style.backgroundColor = "green";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";   
  }
   if(content[x]['correct']==1){
     document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "green";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";
   }
   if(content[x]['correct']==2){
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "green";
    document.getElementById("button4").style.backgroundColor = "red";    
  }
   if(content[x]['correct']==3){
     document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "green";
   }
   document.getElementById("next").style.backgroundColor="#4CAF50";//фон
   document.getElementById("next").disabled = false;//во время выборки правильного ответа на кнопку след вопрос нажать нельзя
}
function myFunction1() {  //изначально у нас все кнопки белые, поэтому мы проверяем на белый фон, чтобы потом определить правильность и добавить цвет с помошью функции colorit();
if(content[x]['correct']==0 && document.getElementById("button1").style.backgroundColor =="white"){//допустим человек на 1 вопросе нажал на третию кнопку, то так как correct у 1 вопроса 0, то ему в if выдастся значение false и соответсвенно просто прокрасятся цвета кнопок, если же ответит правильно, то добавится к score 1
    score++;      
  }  
  colorit();
}
function myFunction2() { 
  if(content[x]['correct']==1 && document.getElementById("button2").style.backgroundColor =="white"){
    score++;      
  }  
  colorit();
}
function myFunction3() { 
    if(content[x]['correct']==2 && document.getElementById("button3").style.backgroundColor =="white"){
    score++;      
  }  
  colorit();
  
}
function myFunction4() { 
  if(content[x]['correct']==3 && document.getElementById("button4").style.backgroundColor =="white"){
    score++;      
  }  
  colorit();
}
function choices() {//описание, что делать , если викторина закончена и не закончена, заканчивается векторина, когда x равен 6 становится, потому что всего полей у content 5
  if (content[x] === undefined) {  //После завершения опроса в зависимости от кол-ва правильных ответов выводим нужную надпись, скрыв ненужные элементы при помощит visibily hidden
     document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";  
     document.querySelector(".question").style.visibility = "hidden";
      document.querySelector(".questionNumber").textContent = "Ваш результат";
    document.querySelector("#content3").style.top="20%;"
    document.querySelector("#content3").style.height="70%";
    document.getElementById("pict").src= "img/final_main in js.jpg";     
    document.querySelector("#content3").style.backgroundImage="linear-gradient(#e43a15,#e65245)";

      if(score >= 4){
          document.querySelector('.score').textContent =name+', а ты хорош! У тебя ' + score + ' из 6';
      }
      if (score < 4){
          document.querySelector('.score').textContent = name+', тебе есть куда расти, у тебя ' + score + ' из 6';
      }
      if (score = 0){
           document.querySelector('.score').textContent = name+', ничего, сегодня просто не твой день, у тебя ' + score;
      }

  } else {//случай когда викторина продолжается, а не заканчивается
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Вопрос ' + y;//отображение номера вопроса

var question = document.querySelector('.question');
    question.textContent = content[x]['question'];//для смены вопроса и его отображения
document.querySelector("#content3").style.backgroundImage=backs[x];//при смене вопроса меняется и фон
     document.getElementById("pict").src= content[x]['picture'];//для смены картинки
document.getElementById("button1").style.backgroundColor = "white";/*объект у которого указан этот уникальный id сменит фон на белый*/
  document.getElementById("button2").style.backgroundColor = "white";/*объект у которого указан этот уникальный id сменит фон на белый*/
  document.getElementById("button3").style.backgroundColor = "white";/*объект у которого указан этот уникальный id сменит фон на белый*/
  document.getElementById("button4").style.backgroundColor = "white";/*объект у которого указан этот уникальный id сменит фон на белый*/ 
  document.getElementById("next").style.backgroundColor="red"; /*красный фон у кнопки следующий вопрос*/
  document.getElementById("next").disabled = true;/*показ кнопки "следующий вопрос"*/
   document.getElementById("button1").innerText=content[x]['choices'][0];//для того чтобы текст на кнопках появляся нужный в соответсвии с content, 0-первый вариант ответа
   document.getElementById("button2").innerText=content[x]['choices'][1];//для того чтобы текст на кнопках появляся нужный в соответсвии с content, 1-второй вариант ответа
     document.getElementById("button3").innerText=content[x]['choices'][2];//для того чтобы текст на кнопках появляся нужный в соответсвии с content, 2-третийй вариант ответа
   document.getElementById("button4").innerText=content[x]['choices'][3];//для того чтобы текст на кнопках появляся нужный в соответсвии с content, 3-четвертый вариант ответа
  }
}

function next() {//вызов функции в test.html
  var inputs = document.querySelectorAll('input');/*обращение ко всем объектам класса*/
  x++;
  y++;  
  choices();  
}
  window.setInterval(function(){//////////////////////////////////////////////////////
   if(window.innerWidth>600){
    document.querySelector('#content3').style.width="60%";
    document.querySelector('#content3').style.left="25%"; 
    document.querySelector('.menu_list').style.display="block";
    document.querySelector('.widget').style.height="100%";
    document.querySelector('.widget').style.width="20%"; 
  }
},0); 