var out="";
function stack(num)
{
	out=out+num;
	document.getElementById('output').innerHTML=out;
}
function empty()
{
	out="";
	document.getElementById('output').innerHTML=out;
}
function calc()
{
	out=eval(out);
	document.getElementById('output').innerHTML=out;
}