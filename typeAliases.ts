type dimensions = {
    len : number,
    breadth : number,
    height : number,
    type ?: string,
    readonly description : string
}


type extraDetails = {
    color : String,
    border : boolean
}

// combination of the types

type combinedType = dimensions & extraDetails & {
    combined : boolean
}


function calArea(data : dimensions){
    let {len, breadth, height} = data;
    return len * breadth * height;
}

let area = calArea({len : 100, breadth : 90, height : 32, description : "This is the square", type : "square"})

console.log(area)

export {}