//setTimeout

const timer = {
    run : function(){
        if (this.t) console.log("이미 실행된 타이머가 있습니다.");

        let time = 1;
        this.t = setTimeout(function(){
            console.log(`${time}초뒤에 실행됩니다.`)
        }, time*1000);
    },

    cancel : function() {
        if (this.t) clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.run();
timer.cancel();
timer.run();