const questions = [

{
question:"What does HTML stand for?",
answers:[
{ text:"Hyper Text Markup Language", correct:true},
{ text:"High Text Machine Language", correct:false},
{ text:"Hyper Tool Multi Language", correct:false},
{ text:"Home Text Language", correct:false}
]
},

{
question:"Which language is used for styling websites?",
answers:[
{ text:"HTML", correct:false},
{ text:"CSS", correct:true},
{ text:"Java", correct:false},
{ text:"Python", correct:false}
]
},

{
question:"Which language makes websites interactive?",
answers:[
{ text:"CSS", correct:false},
{ text:"JavaScript", correct:true},
{ text:"C++", correct:false},
{ text:"PHP", correct:false}
]
}

];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");

let currentQuestion=0;
let score=0;

function startQuiz(){
showQuestion();
}

function showQuestion(){

answerButtons.innerHTML="";

let q=questions[currentQuestion];

questionElement.innerHTML=q.question;

q.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

button.addEventListener("click",()=>selectAnswer(answer.correct));

answerButtons.appendChild(button);

});

}

function selectAnswer(correct){

if(correct){
score++;
}

nextBtn.style.display="inline-block";

}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

document.getElementById("score").innerHTML=
"Your Score : "+score+" / "+questions.length;

}

});

startQuiz();