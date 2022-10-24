const selectionSort = (arr)=>{
    for (i=0; i<arr.length; i++){
        let minValue=0;
        for(j=i+1;j<arr.length;j++){  // we take j as i+1 because in j iteration we will sort for num of arr 
            if(arr[i]<arr[minValue]){ // in j iteration we will get smallest value as sorted
                minValue = i
            }
        }
        [arr[i],arr[minValue]] = [arr[minValue],arr[i]]
    }
    return arr
   
}

console.log( selectionSort([-2, 45, 0, 11, -9]))