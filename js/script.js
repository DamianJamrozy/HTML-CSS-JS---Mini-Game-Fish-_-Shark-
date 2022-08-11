var x = document.getElementById("game_start");
var y = document.getElementById("game_stop");
var z = document.getElementById("Authors");
var q = document.getElementById("Options");

function showFirst() {
	if (x.style.display === "none") {
	x.style.display = "block";
	y.style.display = "none";} 
	
	else {
	x.style.display = "none";
	y.style.display = "block";
  }
}

function showSec() {
	if (z.style.display === "none") {
	z.style.display = "block";
	y.style.display = "none";} 
	
	else {
	z.style.display = "none";
	y.style.display = "block";
  }
}

function showTh() {
	if (q.style.display === "none") {
	q.style.display = "block";
	y.style.display = "none";} 
	
	else {
	q.style.display = "none";
	y.style.display = "block";
  }
}

function showFor() {
	if (y.style.display === "none") {
	y.style.display = "block";
	z.style.display = "none";
	q.style.display = "none";} 
	
	
	else {
	y.style.display = "none";
	q.style.display = "none";
  }
}
function showFif() {
	if (y.style.display === "none") {
	y.style.display = "block";
	x.style.display = "none";
	q.style.display = "none";} 
	
	
	else {
	x.style.display = "none";
	q.style.display = "none";
  }
}




// GRA //


var polozenie_rekina_x=500;
var polozenie_rekina_y=200;
var polozenie_rybki=100; 
var stan_gry=0; 

var ocean=document.createElement('img');
ocean.src = 'img/ocean2.jpg';
var rybka=document.createElement('img');
rybka.src = 'img/rybka.gif';
var rekin=document.createElement('img');
rekin.src = 'img/rekin.gif';
var over=document.createElement('img');
over.src = 'img/Back-Button.gif';

var i=0;
var j=10;

function run()
{
plotno=document.getElementById('tu_rysuj');
rysuj2d=plotno.getContext('2d');
rysujwynik=plotno.getContext('2d');
window.addEventListener('keydown', poruszaj_rybka);
setInterval(uruchom_gre, 100);
}

function uruchom_gre()
{
if(stan_gry==2)   
  {
  rysuj2d.font="35px Verdana";
  rysuj2d.fillText("Twój wynik to "+i, 250, 250);
  rysuj2d.fillText("Przytrzymaj ESC aby wrócić do menu.", 20, 400);
  clearInterval();


  }
  else
  {
  rysuj2d.clearRect(0,0,700,700);
  wykryj_kolizje();
  rysuj_ocean();
  rysuj_rybke();   
  poruszaj_rekinem();   
  }
}

function wykryj_kolizje()
{

  if(polozenie_rekina_x>=290&&polozenie_rekina_x<=370&&polozenie_rekina_y>=polozenie_rybki&&polozenie_rekina_y<=polozenie_rybki)
    {
    stan_gry=2;

    }
}

function rysuj_rybke()
{
rysuj2d.drawImage(rybka, 300, polozenie_rybki);
}
function rysuj_ocean()
{
rysuj2d.drawImage(ocean, 0,0);
}
function rysuj_rekina()
{
rysuj2d.drawImage(rekin, polozenie_rekina_x,polozenie_rekina_y);
}

function poruszaj_rekinem()
{
  if(polozenie_rekina_x<=-200)
  {
  polozenie_rekina_x=700;
  polozenie_rekina_y=Math.floor(Math.random() * 7)*100;
  i++
  j++
  }
  else
  {
     if(polozenie_rekina_x>=700)
     {
     polozenie_rekina_x-=10;
     }
     else
     {
     polozenie_rekina_x-=j;
     rysuj_rekina();
     }
       }
	rysujwynik.font="15px Arial";
	rysujwynik.fillText("Runda "+i, 25, 25);
	
}

function poruszaj_rybka(zdarzenie)
{           
klucz_klawisza = zdarzenie.keyCode;       
switch(klucz_klawisza)
   {
   case 38:
   if(polozenie_rybki<=0)
     {
     polozenie_rybki=0;
     }
   else
     {
     polozenie_rybki-=100;
     }
   break;
   case 40:
   if(polozenie_rybki>=600)
     {
     polozenie_rybki=600;
     }
   else
     {
     polozenie_rybki+=100;
     }
   break;
   
   case 27:{
	window.location.reload(true);
	}
	break;
   }
   
} 