class myArray{
    constructor(){
        this.length = 0
        this.data = {}
    }
    push(data){
        this.data[this.length] = data;
        this.length++
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastItem;
    }
    get(index){
        return this.data[index];
    }
    shift(){
        const firtItem = this.data[0];
        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--
        return firtItem;
    }
    deleteByIndex(index){
        const item = this.data[index]
        for(let i = index; i<this.length; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--
        return item;
    }
}


const newArray = new myArray();
newArray.push(2);
newArray.push(3);
newArray.push(4);
console.log(newArray)
// newArray.shift()
newArray.deleteByIndex(0)
console.log(newArray)