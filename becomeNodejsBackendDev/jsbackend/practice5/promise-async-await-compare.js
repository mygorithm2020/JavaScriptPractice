async function getName(){
    let qq = "myAwaitName";
    // 반환값이 없어서 잘못된 방법
    setTimeout(()=>{
        return qq;
    }, 1000);
};

function getPromiseName(){
    return new Promise((resolve, reject) => {
        let qq = "myPromiseName";
        setTimeout(()=> {
            resolve(qq);
        }, 1000)
        
    });

};

async function main(){
    let q = await getName();
    let w = await getPromiseName();
    console.log(q);
    console.log(w);
};

main();