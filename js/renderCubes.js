const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var fullTurn = 100

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

defineElseGroup()
defineAllGroup()
scene.add(AllPivot)


camera.position.z = 5;
var ball = false;
const animate = function () {
    requestAnimationFrame( animate );

    if (fullTurn < (90*(Math.PI/180))){
        fullTurn += (Math.PI/180)
        defineSelectionRotation(SelectedGroup, Direction)
        if (fullTurn > (90*(Math.PI/180))){
            ball = true;
        }  
    } else if (fullTurn >= (90*(Math.PI/180))){
        //PLEASE DELETE ME
        trudy = true;
    }
    if (ball){
        ball = false
        shiftAll(Direction)
    }

    renderer.render( scene, camera );

};

animate();	
