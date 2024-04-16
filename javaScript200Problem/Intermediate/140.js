// Async 이해하기


//139의 promise를 변환

function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 40){
                person.stamina -= 30;
                resolve({
                    result : `${name} success`
                });
            }else{
                reject(new Error("failed"));
            }
            
        }, 1000);
    });
};


const harin = {stamina : 100};

const excute = async function() {
    try {
        while(true){
            let v = await doJob("work", harin);
            console.log(v.result);
        }
        // let v = await doJob("work", harin);
        // console.log(v.result);
        // v = await doJob("study", harin);
        // console.log(v.result);
        // v = await doJob("walk", harin);
        // console.log(v.result);
        // v = await doJob("work", harin);
        // console.log(v.result);
    }catch (e){
        console.log(e);
    }
}

excute();