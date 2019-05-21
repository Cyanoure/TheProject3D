//SOMETHING
var runOnUpdate = {};

//SCENE
var scene = new THREE.Scene();

//#HASHTAG

//CAMERA
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

//RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
    if(renderer.getSize(new THREE.Vector2)["x"] != window.innerWidth || renderer.getSize(new THREE.Vector2)["y"] != window.innerHeight){
        renderer.setSize(window.innerWidth,window.innerHeight);
    }
    
    $.each(runOnUpdate,function(idx,valx){
        if(typeof(valx) == "function"){
            valx();
        }else if(valx != null){
            console.error("Error in function '"+idx+"'");
            runOnUpdate[idx] = null;
        }
    });
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();