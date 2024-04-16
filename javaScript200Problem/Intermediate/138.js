/// Promise

function promiseForHomework(mustDo){
    return new Promise((resolve, reject)=>{
        console.log("doing homework");
        setTimeout(() => {
            if(mustDo){
                resolve(
                    {
                        result : "homework-ended"
                    }
                );
            }else{
                reject(new Error("Too Lazy"));
            }
            
        }, 3000);
    });
};

// const promiseA = promiseForHomework(true);

const promiseB = promiseForHomework();

// promiseA.then(v => console.log(v));
promiseB.then(v => console.log(v)).catch(e => console.error(e));