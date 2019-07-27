			
									
			function fun(val){
				var str=document.getElementById('display').innerHTML.length;
				if(str>22){
					window.alert("max Length reached");
				}else{
				document.getElementById('display').innerHTML+=val;
				
				}
				}
				

			

			function backspace(){
				var str=document.getElementById('display').innerHTML;
				str= str.substring(0,str.length-1);
				document.getElementById('display').innerHTML=str;

			}
			function ac(){
				document.getElementById('display').innerHTML="";
			}
			

			
			function equal(){
				 c= eval(document.getElementById('display').innerHTML);
				document.getElementById('display').innerHTML=c;
			}
				