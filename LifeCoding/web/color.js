function nightDayHandler(){
    let q = document.querySelector('body');
    let w = document.querySelectorAll('.night_day');
    
    
    if(w[0].value === 'night'){
        Body.setBackgroundColor('black');
        //BodySetBackgroundColor('black');
        Body.setColor('white');
        //BodySetColor('white');
        
        w.forEach(element => {
            element.value = 'day'            
        });
        
        Links.setColor('powderblue');
        //linkSetColor('powderblue');

    }else{
        Body.setBackgroundColor('white');
        //BodySetBackgroundColor('white');
        
        Body.setColor('black');
        //BodySetColor('black');
        
        w.forEach(ele => {
            ele.value = 'night'
        })
        
        Links.setColor('blue');
        //linkSetColor('blue');
    }

}

var Body = {
    qqqq : "Ss",
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function(color) {
        // let aList = document.querySelectorAll('a');
        // let i = 0;
        // while(i < aList.length){
        //     aList[i].style.color = color;
        //     i = i+1;
        // }
        
        //jquery 문법... 위 주석 내용과 같은 기능... => 편리하긴하네....와...
        $('a').css('color', color);
    }
}