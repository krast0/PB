function oldLibrary(input){
    let book = input[0]
    let index = 1
    let bookIsFound = false
    let nextBookName = input[index]
    while(nextBookName !== "No More Books"){
        if(nextBookName === book){
            bookIsFound = true
            break;
        }
        index++
        nextBookName = input[index]
    }
    if(bookIsFound === false){
        console.log(`The book you search is not here!\nYou checked ${index} book`)
    }else{
        console.log(`You checked ${index} books and found it`)
    }


}
oldLibrary(["Troy","Stroneger","Life Style","Troy"])