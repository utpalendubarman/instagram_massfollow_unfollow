javascript: 
follow_button_length=document.querySelectorAll('.L3NKy').length; 
str2="Follow"; 
i=0; 
while(i<follow_button_length){ 
	str=document.querySelectorAll('.L3NKy')[i].innerHTML; 
	if(str==str2){
		document.querySelectorAll('.L3NKy')[i].click(); 
	}
	i++; 
};

