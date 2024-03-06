const handler = {
    get : function(target, name) {
        return name === 'name' ? `${target.a} ${target.b}` : target[name];
    }
}

const p = new Proxy({a : 'KUNDOL', b : 'IS AUMUMU ZANGIN'}, handler);
console.log(p.name);
console.log(p.target);