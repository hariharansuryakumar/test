class Biology {
    constructor() {

        console.log("This is contructor from Biology class"); 
tamil = true;
}
}
class computerScince extends Biology {
constructor() {
    super();
    console.log("This is contructor from ComputerScience class");
}
tamil = true;

}
let r = new Biology ();