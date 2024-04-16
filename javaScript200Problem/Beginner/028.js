var family = {
    "address" : "seoul",
    member : {},
    addFamily : function(age, name, role){
        this.member[role] = {
            age : age,
            name : name
        };
    },
    getHeadCount : function(){
        return Object.keys(this.member).length; 
    }

};

console.log(family.getHeadCount());
family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");
console.log(family.getHeadCount());
console.log(family.address);

var printMembers = function(){
    var members = family.member;
    for (var role in members){
        console.log("role =>" + role + ", name => " + members[role].name + ", age => " + members[role].age);
    }
};

printMembers();

var members = family.member;
members["nephew"] = {age : 3, name : "hyun"};
members.niece = {age : 5, name : "lyn"};
delete members.aunt;
delete members["dog"];
printMembers();