class Paper{
    constructor(){

var options={
    isStatic :false,
    restitution :0.3,
    friction : 0.5,
    density : 1.2,

}

 Matter.Bodies.circle(10,240,3,options,maxSides)
fill="pink";


    }
}