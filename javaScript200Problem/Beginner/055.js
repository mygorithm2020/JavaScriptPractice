// module

var namespaceA = (function(){
    let privateVar = "비공개 변수";
    return {
        publicApi : function(){
            console.log(privateVar + "를 접근할 수 있습니다.");
        }
    }
})();

namespaceA.publicApi();
console.log(namespaceA.privateVar);