AFRAME.registerComponent("key-collide",{
    schema: {
        elementId: {type: "string", default: "#key1"}
    },

    update: function(){
        this.isCollided(this.data.elementId);
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);

        element.addEventListener("collide", (e) => {
            if(elementId.includes("#key")){
                console.log(elementId + "collided");
            }
        });
    }
})