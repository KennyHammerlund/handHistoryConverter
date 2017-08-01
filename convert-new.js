function test(){
	console.log("work");
}

function selector(){
	var option = document.getElementById("conv-sel").value;
	var text = document.getElementById("conversion-text").value;
	if (option == "om-indicator"){
		omahaIndicator(text);
	}else if(option== "he-indicator"){
		holdemIndicator(text);
	}
}

function omahaIndicator(str){
	// //reformat flop
	// str = str.replace(/Flop: \(([AKQT\d][hdcs]\,?)([AKQT\d][hdcs]\,?)([AKQT\d][hdcs]\,?)\) /g, "Flop: $1  $2  $3  ");
	// //remove number of players
	// str = str.replace(/\(\d players\)/g, "");
	// //replace line breaks with BR tags
	// str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
	// //replace turn parenthasis
	// str = str.replace(/Turn:\s?\(([AKQT\d][hdcs])\) /g, "Turn: $1");
	// //change me to hero
	// str = str.replace(/(Me)/g, "**Hero: ");
	// //remove brackets
	// str = str.replace(/[\[\]]/g, "");
	// //remove player Numbers
	// str = str.replace(/P\d/g, "");
	// //change double breaks to single
	// str = str.replace(/(\<br \/\>)\s?\s?\s?(\<br \/\>)/g, "<br />");
	//split by double line braks indicator produces between information
	var arrayString = str.split(/\n\n/); 
	//create var for display string
	var displayString = "";
	//Loop through array from results to produce 
	for (i=0; i <  arrayString.length; i++){
		console.log("loop " + i);
		//replace line breaks with BR tags
		arrayString[i] = arrayString[i].replace(/(?:\r\n|\r|\n)/g, '<br />');
		//change me to hero
		arrayString[i] = arrayString[i].replace(/(Me)/g, "**Hero: ");
		//concant string 
		displayString += arrayString[i];
		displayString += "<br><br>";
		
	}
	
	document.getElementById("result-text").innerHTML = displayString;
	console.log(arrayString.length);
}


function holdemIndicator(str){
	console.log("holdem");
	str = preFormat(str);
	arrayString = streetSplit(str);
	var streets = arrayString.length;
	var check = document.getElementById("result-text").innerHTML;
	var printString = "";
	console.log(streets);	
	console.log(arrayString[3]);
	console.log(arrayString[4]);
	
	if ( check == ""){
		
		//Player Stats
		//replace line breaks with BR tags
		arrayString[0] = "<span style=\"font-weight: bold; text-align: left;\">Player Stats: </span> <br> " + arrayString[0].replace(/(?:\r\n|\r|\n)/g, '<br />');
		//print tp result-text
		printString += arrayString[0];		
		printString += "<br><br>";	
		//pull your hand
		var heroHand = [];
		if (arrayString[1].match(/([AKQJT2-9])h/g) != null){
			heroHand = heroHand.concat(arrayString[1].match(/([AKQJT2-9])h/g));
		}
		if (arrayString[1].match(/([AKQJT2-9])d/g) != null){

			heroHand = heroHand.concat(arrayString[1].match(/([AKQJT2-9])d/g));
		}
		if (arrayString[1].match(/([AKQJT2-9])c/g) != null){
			heroHand = heroHand.concat(arrayString[1].match(/([AKQJT2-9])c/g));
		}
		if (arrayString[1].match(/([AKQJT2-9])s/g) != null){
			heroHand = heroHand.concat(arrayString[1].match(/([AKQJT2-9])s/g));		
		}
		//preflop
		arrayString[1] = arrayString[1].replace("Pre Flop:", "<span style=\"font-weight: bold; text-align: left;\">Pre Flop:</span>");
		arrayString[1] = arrayString[1].replace(/\s(\w*)\(\w*\) folds,/g, "");
		console.log(arrayString[1]);
		arrayString[1] = arrayString[1].replace(/([AKQJT2-9][cdhs]),\s?\s?([AKQJT2-9][cdhs])/g, " $1 $2 <br> ");
		arrayString[1] = arrayString[1].replace(/Hero:/g, "<br>Hero:");
		arrayString[1] = replaceSuit(arrayString[1].toString());
		printString += arrayString[1];		
		printString += "<br><br>";	
		
		
		if(streets > 3){
			//pull the flop
			var flop = [];
			if (arrayString[2].match(/([AKQJT2-9])h/g) != null){
				flop = flop.concat(arrayString[2].match(/([AKQJT2-9])h/g));
			}
			if (arrayString[2].match(/([AKQJT2-9])d/g) != null){
				flop = flop.concat(arrayString[2].match(/([AKQJT2-9])d/g));
			}
			if (arrayString[2].match(/([AKQJT2-9])c/g) != null){
				flop = flop.concat(arrayString[2].match(/([AKQJT2-9])c/g));
			}
			if (arrayString[2].match(/([AKQJT2-9])s/g) != null){
				flop = flop.concat(arrayString[2].match(/([AKQJT2-9])s/g));
			}
			//Flop
			arrayString[2] = arrayString[2].replace("Flop:", "<span style=\"font-weight: bold; text-align: left;\">Flop:</span>");
			arrayString[2] = arrayString[2].replace(/([AKQJT2-9][cdhs]),\s?\s?([AKQJT2-9][cdhs]),\s?\s?([AKQJT2-9][cdhs])/g, " $1  $2  $3 <br>");	
			arrayString[2] = replaceSuit(arrayString[2].toString());
			printString += arrayString[2];		
			printString += "<br><br>";	
		}

			//pull turn
			var turn = [];
			if (arrayString[3].match(/([AKQJT2-9])h/g) != null){
				turn = turn.concat(arrayString[3].match(/([AKQJT2-9])h/g));
			}
			if (arrayString[3].match(/([AKQJT2-9])d/g) != null){
				turn = turn.concat(arrayString[3].match(/([AKQJT2-9])d/g));
			}
			if (arrayString[3].match(/([AKQJT2-9])c/g) != null){
				turn = turn.concat(arrayString[3].match(/([AKQJT2-9])c/g));
			}
			if (arrayString[3].match(/([AKQJT2-9])s/g) != null){
				turn = turn.concat(arrayString[3].match(/([AKQJT2-9])s/g));
			}
		if(streets >= 5){
			console.log("Turn -- " + arrayString[3]);
			//turn
			arrayString[3] = arrayString[3].replace(/Turn: \(?/, "<span style=\"font-weight: bold; text-align: left;\">Turn: </span>");
			arrayString[3] = arrayString[3].replace(/([AKQJT2-9][cdhs])\)?/g, " $1 <br>");	
			arrayString[3] = replaceSuit(arrayString[3].toString());
			printString += arrayString[3];		
			printString += "<br><br>";
		}
		
		
			//pull river
			var river = [];
			if (arrayString[4].match(/([AKQJT2-9])h/g) != null){
				river = river.concat(arrayString[4].match(/([AKQJT2-9])h/g));
			}
			if (arrayString[4].match(/([AKQJT2-9])d/g) != null){
				river = river.concat(arrayString[4].match(/([AKQJT2-9])d/g));
			}
			if (arrayString[4].match(/([AKQJT2-9])c/g) != null){
				river = river.concat(arrayString[4].match(/([AKQJT2-9])c/g));
			}
			if (arrayString[4].match(/([AKQJT2-9])s/g) != null){
				river = river.concat(arrayString[4].match(/([AKQJT2-9])s/g));
			}
		if(streets >= 6){
		//river
			arrayString[4] = arrayString[4].replace("River:", "<span style=\"font-weight: bold; text-align: left;\">River:</span>");
			arrayString[4] = arrayString[4].replace(/([AKQJT2-9][cdhs])/g, " $1 <br>");	
			arrayString[4] = replaceSuit(arrayString[4].toString());
			printString += arrayString[4];		
			printString += "<br>";	
		}
		
		
		//array for final board values formated
		var board = [flop, turn, river];
			for (i=0; i < board.length; i++){
				board[i] = replaceSuit(board[i].toString());
			}
		//Final
		arrayString[streets-1] = arrayString[streets-1].replace("Final:", "<br><span style=\"font-weight: bold; text-align: left;\">Results: </span>" + board + 
			" <br> <span style=\"font-weight: bold;\">Heros Cards: </span>" + heroHand + " <br>");
		arrayString[streets-1] = replaceSuit(arrayString[streets-1].toString());
		arrayString[streets-1] = arrayString[streets-1].replace(/\)\s?(<span style=\"font-weight: bold\">Hero: <\/span>)?\s?\(/, ") <br>$1 (");	
		//print to result-text
		printString += arrayString[streets-1];		
		printString += "<br><br>";		
	}
	//final String processing 
	console.log(printString);
	
	printString = printString.replace(/<br>(\s?)*(<br>(\s?)*)+/g, "<br><br>");
		console.log("New - " +printString);
	document.getElementById("result-text").innerHTML = printString;
	
}
//clear the results area
function clearTextArea(){
	document.getElementById("result-text").innerHTML = "";
}

function selectText(id){
    var sel, range;
    var el = document.getElementById(id); //get element id
	console.log("element loaded");
    if (window.getSelection && document.createRange) { //Browser compatibility
      console.log("inside if");
	  sel = window.getSelection();
      if(sel.toString() == ''){ //no text selection
        console.log("no text");
		window.setTimeout(function(){
            range = document.createRange(); //range object
            range.selectNodeContents(el); //sets Range
            sel.removeAllRanges(); //remove all ranges from selection
            sel.addRange(range);//add Range to a Selection.
        },1);
      }
    }else if (document.selection) { //older ie
        sel = document.selection.createRange();
        if(sel.text == ''){ //no text selection
            range = document.body.createTextRange();//Creates TextRange object
            range.moveToElementText(el);//sets Range
            range.select(); //make selection.
        }
    }
}
//takes in a string searches for suits and replaces with unicode representations
function replaceSuit(str){
	//replace hearts
	str = str.replace(/([AKQJT2-9])h[^a-zA-Z]/g,  '<span style="color:red">$1&hearts; </span>');
	//replace diamonds
	str = str.replace(/([AKQJT2-9])d[^a-zA-Z]/g, '<span style="color:red">$1&diams; </span>');
	//replace clubs
	str = str.replace(/([AKQJT2-9])c[^a-zA-Z]/g, '<span style="color:black">$1&clubs; </span>');
	//replace spades
	str = str.replace(/([AKQJT2-9])s[^a-zA-Z]/g, '<span style="color:black">$1&spades; </span>');
	return str;
}

//removes some unneccisary charachters and changes me to hero
function preFormat(str){
	//reformat flop
	str = str.replace(/Flop: \(([AKQJT\d][hdcs]),?([AKQJT\d][hdcs]),?([AKJQT\d][hdcs]),?\)/g, "Flop: $1  $2  $3 <br>");
	//remove number of players
	str = str.replace(/\(\d players\)/g, "");
	//change me to hero
	str = str.replace(/(Me)/g, "<span style=\"font-weight: bold\">Hero: </span>");
	//remove brackets
	str = str.replace(/[\[\]]/g, "");
	//remove player Numbers
	str = str.replace(/P\d/g, "");

	return str;
}
//remove folds from strings
function removeFold(str){
	str.replace(/\(\w*\) folds,/g, "");
	return str;	
}
//Splits HE/OMAHA indicator information into an array based on triple line break in between streets
function streetSplit(str){
	//split by double line braks indicator produces between information
	var arrayStreet = str.split(/\n\n\n/); 	
	return arrayStreet;
}
function CopyToClipboard(containerid) {
    if (document.selection) { 
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("Copy"); 
		console.log("Copied");

    } else if (window.getSelection) {
        var range = document.createRange();
         range.selectNode(document.getElementById(containerid));
         window.getSelection().addRange(range);
         document.execCommand("Copy");
       
    }}

