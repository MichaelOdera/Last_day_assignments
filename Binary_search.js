//This the function for counting from 1 to twenty at intervals of 1 digit
function toTwenty(){
	for(var i = 0; i < 21; i++){
		return i;
	}
}

//This is the function for counting from 2 at intervals of 2 digits
function toFourty(){
	for(var i = 2; i < 41; i+2){
		return i;
	}
}
// this is the function for counting from 10 to a thousand at steps of 10 digits
function toOneThousand(){
	for(var i = 10; i < 1001; i+10){
		return i
	}
}

function search(value){
	var count = 0;
	var array = [];
	
	//create the function for implementing the count
	for(var i = 0; i < b.length+1; i++){
		count += 1;
		if(value != array[i]){
			return true;
		}
		else{
			search.count = count;
			break;
		}
	}
	//This step checks for the index of the value given in the array list
	var index = array.indexOf(value);
	search.index = index;
	
	search.length = array.length;
	
	var ans = [];
	ans.push(count);
	ans.push(index);
	ans.push(length);
	// output the array bearing the coutn, index and length
	 return ans;
	
	
}