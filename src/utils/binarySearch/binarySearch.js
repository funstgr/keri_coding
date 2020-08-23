const recursiveSearch = (array, target, left, right) => { 
    
    let index = -1;  
    // let indexCounter = 0; 
    while(index === -1 && left <= right){
        let currentIndex = Math.floor((left + right)/2);
        const potentialMatch = array[currentIndex];
        if (target === potentialMatch){
            index = currentIndex;
        } else if(target < potentialMatch){
            right = currentIndex - 1;
        } else{
            left = currentIndex + 1;
        }
        // indexCounter++;
    }
    return index;
} 

const binarySearch = (array, value) => recursiveSearch(array, value, 0, array.length-1);

export default binarySearch;
   

   
