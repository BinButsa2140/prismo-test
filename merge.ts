let c1 = [1, 2, 3, 4, 5];
let c2 = [10, 9, 8, 7, 6];
let c3 = [11, 12, 13, 14, 15];

const merge = (c1: number[], c2: number[], c3: number[]):number[] => {


    let c1Runner:number= 0
    let c2Runner:number = c2.length-1
    let c3Runner:number = 0
    let result:number[] = []
    
    while (c1Runner<c1.length || c2Runner>=0 || c3Runner<c3.length){


        let val1 = c1[c1Runner] || Infinity //ยังไงก็หาค่าน้อยสุด เอาไว้กันค่า undefined
        let val2 = c2[c2Runner] || Infinity
        let val3 = c3[c3Runner] || Infinity


        let min:number = val1
        if(val2<min){
            min = val2
        }
        if(val3<min){
            min = val3
        }
        result.push(min)

        if(min==val1){
            c1Runner+=1
        }
        else if(min==val2){
            c2Runner-=1
        }
        else if(min==val3)[
            c3Runner+=1
        ]

        

    }
    

    
    

    return result
};


console.log(merge(c1, c2, c3))

