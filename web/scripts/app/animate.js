define(function(require){
  //Load webgl scene
  var scene = require("./scene");
  
  //Load clouds
  var clouds = require("./clouds");
  //scene.plane.add(clouds);
	scene.scene.add(clouds.mesh);

  
  //Load variables
  var variables = require("./variables");
  
  //Load THREE
  var THREE = require("OrbitControls");

  //Animate
  function animate() {
    requestAnimationFrame(animate);
    //Do frame rendering
    scene.renderer.render(scene.scene, scene.camera);
    scene.controls.update();
    
    //Apply updates when needed
    if(variables.change){
      //Change sky colors
//      scene.lights.hemisphere.color = new THREE.Color("#FFFFFF");
      scene.lights.hemisphere.color = new THREE.Color(variables.skyBottom);
      scene.sky.material.color = new THREE.Color(variables.skyTop);
      scene.fog.color = new THREE.Color(variables.ambientcolor);
      //Set change back to false
      variables.change = false;
    }
		
		
		clouds.mesh.position.z += variables.windspeed;
		

    
  }
  return {"animate" : animate(), "renderer" : scene.renderer};
  
});