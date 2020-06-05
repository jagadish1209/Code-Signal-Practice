function sortByHeight(a: number[]): number[] {
    
    let humanheight = [];
    
    a.forEach((value,i)=>{
        if(value != -1){
            humanheight.push(value);
        }
    });
    
    humanheight.sort((a,b)=>a-b);
    
    console.log(humanheight);
    
    a.forEach((value,i)=>{
       if(value !== -1){
        //    if(value <= humanheight[0]){
               a[i] = humanheight[0];
               humanheight.splice(0, 1);
        //    }
       } 
    });
    
    console.log('after iterations Array is::', a);
    
    return a;

}
