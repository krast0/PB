function animalType(input){
    name = input[0];
    switch(name){
        case "dog":console.log("mammal");break;
        case "crocodile":
        case "tortoise":
        case "snake":console.log("reptile");break;
        default:console.log("unknown")
    }

}
animalType([""])