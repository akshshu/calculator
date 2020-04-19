var x=document.getElementById('demo');
function isoperator(ch){
switch(ch){
	case '+':return true;
	case '-':return true;
	case '*':return true;
	case '/':return true;	
	case '%':return true;
}return false;}
function val(n){
	var b=x.value;
	var l=b.length;
	if(isoperator(b[l-1])){
		if(isoperator(n)){
			b=b.substr(0,l-1)+n;
			x.value=b;
		}else{
		x.value +=n;
		}}else{
		x.value +=n;}
}
function cal(){
	x.value="";}
	function result(){
		final=eval(x.value);
		x.value=final;}
		var q=document.getElementsByTagName('input');
		console.log(q[1].value);
			
			
			