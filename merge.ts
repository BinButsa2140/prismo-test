const merge = (c1: number[], c2: number[], c3: number[]):number[] => {


    let c1Runner:number= 0
    let c2Runner:number = c2.length-1
    let c3Runner:number = 0
    let result:number[] = []
    
    while (c1Runner<c1.length || c2Runner>=0 || c3Runner<c3.length){


        let val1: number = c1[c1Runner] ?? Infinity;
        let val2: number = c2[c2Runner] ?? Infinity;
        let val3: number = c3[c3Runner] ?? Infinity;

        //หาค่าน้อยสุด
        let min:number = val1
        if(val2<min){
            min = val2
        }
        if(val3<min){
            min = val3
        }
        result.push(min)

        //เช็คว่าอันไหนที่พึ่งเพิ่มเข้าไป
        if(min==val1){
            c1Runner+=1
        }
        else if(min==val2){
            c2Runner-=1
        }
        else if(min==val3){
            c3Runner+=1
        }
    }
    
    return result
};

export default merge
