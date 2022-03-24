function demo(input){

let nameWorker = input[0]
let numberOfProjects = Number(input[1])
let timeNeededToFinishProjects = numberOfProjects * 3
console.log(`The architect ${nameWorker} will need ${timeNeededToFinishProjects} hours to complete ${numberOfProjects} project/s.`)

}
demo(["Martin","70"])