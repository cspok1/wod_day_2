function adjacentElementsProduct(inputArray){
	var largest = inputArray[0]*inputArray[1];
	for (i=0; i<=inputArray.length; i++){
		if (inputArray[i]*inputArray[i+1]>largest){
			return inputArray[i]*inputArray[i+1];
		}
	}
}

document.write(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
document.write("<br/>");
document.write(adjacentElementsProduct([-3, 1, -2, 6, -8]));