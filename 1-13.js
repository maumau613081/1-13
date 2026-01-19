let digits=2;
let times=3;

function makequestion(){
    let question = "";
    for(let i=0; i<times; i++){
        const number = Math.floor(Math.random() * (10 ** digits));
        question += `${number} + `;
    }
    let questionstr = question.slice(0, -3);
    questionstr += " = ";
    console.log(questionstr);
}

makequestion()