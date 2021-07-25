class Bob{
    constructor(x,y,radius){

        var options={
            isStatic:true
        }

            this.body=Bodies.circle(x,y,radius)
    World.add(world,this.body)
        this.radius=radius
        console.log(this.body)
    }
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)

    }


}
