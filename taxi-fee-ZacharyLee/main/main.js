function main(distance,waitTime){
    
    let result=waitTime*0.25;
    if(distance<=2){
        result+= 6;
    }
    else if(distance>2&&distance<=8){
        result+= 0.8*(distance-2)+6;
    }
    else {
        result+=10.8+1.2*(distance-8);
    }
    return Math.round(result);
}
module.exports=main;