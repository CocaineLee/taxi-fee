const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it (" when distance is shorter than 2",function(){
        let distance=1;
        let waitTime=0;
        let result=main(distance,waitTime);
        expect(result).toBe(6);
    });

    it (" when distance is in 2-8",function(){
        let distance=6;
        let waitTime=0;
        let result=main(distance,waitTime);
        expect(result).toBe(9);
    });

    it (" when distance is longer than 8",function(){
        let distance=10;
        let waitTime=0;
        let result=main(distance,waitTime);
        expect(result).toBe(13);
    });
    
    it (" when waitTime is not 0",function(){
        let waitTime=3;
        let distance=6;
        let result=main(distance,waitTime);
        expect(result).toBe(10);
    });
});
