var a = 0;
function zeruj()
{
a=0;
	document.getElementById('clickCount').innerHTML = a;

}
function dodaj()
{
	a++;
	document.getElementById('clickCount').innerHTML = a;
	if (a==1){
		setTimeout("zeruj()", 30000);
	}
}
