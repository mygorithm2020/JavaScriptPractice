// 클래스 상속 이해하기

class Chart {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log("draw line");
    }
}

class BarChart extends Chart {
    constructor(width, height){
        super(width, height);
    }

    draw() {
        this.drawLine();
        console.log(`draw barChart`);
    }
}

const barChart1 = new BarChart(10, 20);
barChart1.draw();