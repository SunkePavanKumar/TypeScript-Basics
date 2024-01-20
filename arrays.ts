// let arr:Array<number> = [];  // Two ways of declaring the array
let arr:number[] = [];

// 2d array syntax ;

let twoDArray: number[][] = [];

function sum(array:number[]){
    for(let i =0;i<10;i++){
        array.push(i)
    }

    console.log(array)
}


sum(arr);

export{}