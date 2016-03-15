let countDown = function(times, fn, endFn) {
    if (typeof times === "number") {
        times = calculateTime(times);
    } else if (Object.prototype.toString.apply(times) === "[object Date]") {
        var ms = times.getTime() - new Date().getTime()
        times = calculateTime(ms);
        setTimeout(function () {
            countDown(times, fn, endFn);
        }, ms % 1000);
        return;
    }
    fn(times);    // 一开始先执行一次
    var intervalMac = setInterval(function () {
        var timesLen = times.length,
            scales = [24, 60, 60],
            scalesLen = scales.length;
        for (var i = timesLen; i--;) {
            if (times[i] > 0) {
                times[i] = times[i] - 1;
                break;
            }
            // 等于0，非首位的处理
            if (i !== 0) {
                times[i] = scales[scalesLen -(timesLen - i)] - 1;
            } else { // 一直到首位都为0，倒计时结束
                for (var j = 0; j < times.length; j++) {
                    times[j] = 0;
                }
                clearInterval(intervalMac);
                return;
            }
        }
        fn(times);
        if(typeof endFn === "function"){
            var isEnd = true;
            for(var i = 0,len = times.length;i < len;i++){
                if(times[i] !== 0){
                    isEnd = false;
                    break;
                }
            }
            if(isEnd){
                endFn(times);
            }
        }
    }, 1000);

    return intervalMac;
}

function calculateTime(time) {
    if (time < 0) {
        return [0, 0, 0, 0];
    }
    time = Math.floor(time / 1000);
    var times = [], scales = [86400, 3600, 60];
    for (var i = 0; i < scales.length; i++) {
        times.push(Math.floor(time / scales[i]));
        time %= scales[i];
    }
    times.push(time);
    return times;
}

export default countDown;