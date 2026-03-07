const API="https://script.google.com/macros/s/AKfycbyZW5iLDiJVozOjV0cVMbTJ1XayJAPPZqnpdXsSialwiT0B89HCWbmvLCM11TzxO0w/exec"

const students={

25801:"Aashiq Ahmed M",
25802:"Abishek S",
25803:"ArifHussain A",
25804:"Faizal K",
25805:"Fareeduddeen N",
25806:"GokulKanna B",
25807:"Harish Priyan K",
25808:"Hasni Mubarak G",
25809:"Hemasri B",
25810:"Imam Shihad I",
25811:"Immanuel R",
25812:"Imran Baig R",
25813:"Jagannathan K",
25814:"Jayaprakash B",
25815:"Jishnu S",
25816:"Karpoor Mohammed Maroof",
25817:"Kishore Balaji P",
25818:"Layequee Ahmed S",
25819:"Lokesh M",
25820:"LokeshwarRao M",
25821:"MdTauseefSaleem V",
25822:"Mohamed EmadurRahman K",
25823:"Mohamed JawadHaris P",
25824:"Mohamed Rizwan H",
25825:"Mohamed Thameem",
25826:"Mohammed Affan W",
25827:"Mohammed Aiman I",
25828:"Mohammed Amaan D",
25829:"Mohammed Azeez N",
25830:"Mohammed Hamdaan V",
25831:"Mohammed HasnainFaiser T",
25832:"Mohammed Mafaaz C",
25833:"Mohammed MiqdadhHasheem T S",
25834:"Mohammed RehanMasa",
25835:"Mohammed Sabeel A",
25836:"Muhammad Ameen J",
25837:"MujeeburRahman S",
25838:"MuzammilAamir V",
25839:"Naeemullah R",
25840:"Nithish Kumar R",
25841:"Nizzammuddin A",
25842:"Poojashree R",
25843:"Priyanka I",
25844:"Priyanka V",
25845:"Rasika K",
25846:"Sabarivasan S",
25847:"SaiRakshan R",
25848:"Samyuktha M",
25849:"SanjayaFalak H F",
25850:"Sanjana V",
25851:"Selvamoorthy R",
25852:"Shalini S",
25853:"Shanmugam P",
25854:"Sukith Kumar P",
25855:"Sumaiya J",
25856:"Vaishnavi T",
25857:"Vijaya Kumar S",
25859:"Yukesh R",
25860:"Yuvarani G"

}

function checkStudent(){

let roll=document.getElementById("roll").value
let semester=document.getElementById("semester").value

if(!students[roll]){

document.getElementById("result").innerHTML="Invalid Roll Number"
return

}

let percent=85

document.getElementById("result").innerHTML=

"Name : "+students[roll]+"<br>"+
"Semester : "+semester+"<br>"+
"Attendance will appear after data upload"

drawGauge(percent)

}

function drawGauge(percent){

const canvas=document.getElementById("gauge")
const ctx=canvas.getContext("2d")

ctx.clearRect(0,0,220,120)

ctx.lineWidth=20

ctx.beginPath()
ctx.strokeStyle="#eee"
ctx.arc(110,100,70,Math.PI,0)
ctx.stroke()

let end=Math.PI+(Math.PI*percent/100)

ctx.beginPath()
ctx.strokeStyle="#4facfe"
ctx.arc(110,100,70,Math.PI,end)
ctx.stroke()

ctx.font="20px Arial"
ctx.fillStyle="#333"
ctx.textAlign="center"
ctx.fillText(percent+"%",110,90)

}

function staffLogin(){

let pass=document.getElementById("staffPass").value

if(pass=="staff123"){

loadPanel()

}else{

alert("Wrong Password")

}

}

function crLogin(){

let user=document.getElementById("crUser").value
let pass=document.getElementById("crPass").value

if(user=="cr" && pass=="cr123"){

loadPanel()

}else{

alert("Wrong Login")

}

}

function loadPanel(){

let html="<h3>Mark Attendance</h3>"

html+="Semester <select id='semester' class='semesterSelect'>"+
"<option value='Sem1'>Sem1</option>"+
"<option value='Sem2'>Sem2</option>"+
"<option value='Sem3'>Sem3</option>"+
"<option value='Sem4'>Sem4</option>"+
"<option value='Sem5'>Sem5</option>"+
"<option value='Sem6'>Sem6</option>"+
"<option value='Sem7'>Sem7</option>"+
"<option value='Sem8'>Sem8</option>"+
"</select><br>"

html+="Date <input type='date'><br>"

for(let roll in students){

html+=`

<div class="studentRow">

<span>${roll} - ${students[roll]}</span>

<input type="checkbox" id="r${roll}">

</div>

`

}

html+="<button onclick='saveAttendance()'>Save Attendance</button>"

document.getElementById("panel").innerHTML=html

}

function saveAttendance(){

alert("Attendance will save to Google Sheets after backend connection")

}
