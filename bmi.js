class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
     let BMI = this.weight/(this.height**2);
     return BMI;
    }
}

let MyBMi = new BMI(2, 90);
let calculateBMI = MyBMi.calculateBMI();
console.log(calculateBMI);