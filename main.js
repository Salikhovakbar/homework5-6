function show(number){
    this.number = number
this.up = () => {
return this.number + 1
}
this.get = () => {
    return this.up()
}
this.down = () => {
return this.get() - 1
}
this.set = () => {
return this.number = 5
}
}
let something = new show(0)
console.log(something.up());
console.log(something.get());
console.log(something.down());
console.log(something.set());