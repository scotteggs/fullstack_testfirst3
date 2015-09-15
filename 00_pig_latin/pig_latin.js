var translate = function (input) {
	var output = [];
	var wordArray = input.split(" ");
    	for (var j = 0; j < wordArray.length; j++) {
                	var letterArray = wordArray[j].split("");
                	console.log(letterArray);
                	if ('aeiou'.indexOf(letterArray[0]) === -1) {
                	    var position = 0;
                	    for (var i = 0; i < letterArray.length; i++) {
                    	     if('bcdfghjklmnpqrstvwzxy'.indexOf(letterArray[i]) === -1) {
                    	        if (letterArray[i-1]+letterArray[i]== 'qu') {
                    	            position = i+1;   
                    	            break;
                    	        }   else {
                    	            position = i;
                    	            break;
                    	        }
                    	        
                    	        
                    	       
                    	     }
                	    }
                	    var first = letterArray.slice(position,letterArray.length).join("");
                	    var second = letterArray.slice(0,position).join("");
                	    var pigword = first + second;
                	 output.push(pigword + "ay");
                	} else {
                	    output.push(letterArray.join("") + "ay");
                	}
    	        }
        	
        return output.join(" ");

};
