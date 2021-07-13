var cubes = []

var dong = 1.1;

var posCube = [
    [-1,1,1],
    [-1,1,0],
    [-1,1,-1],
    [0,1,1],
    [0,1,0],
    [0,1,-1],
    [1,1,1],
    [1,1,0],
    [1,1,-1],
    
    [-1,0,1],
    [-1,0,0],
    [-1,0,-1],
    [0,0,1],
    [0,0,-1],
    [1,0,1],
    [1,0,0],
    [1,0,-1],

    [-1,-1,1],
    [-1,-1,0],
    [-1,-1,-1],
    [0,-1,1],
    [0,-1,0],
    [0,-1,-1],
    [1,-1,1],
    [1,-1,0],
    [1,-1,-1],
]

var groupCube = [
    //read like Front, top3,middle3,bottom3
    //U
    [2,5,8,1,4,7,0,3,6],
    //D
    [17,20,23,18,21,24,19,22,25],
    //F
    [0,3,6,9,12,14,17,20,23],
    //B
    [8,5,2,16,13,11,25,22,19],
    //L
    [2,1,0,11,10,9,19,18,17],

    [6,7,8,14,15,16,23,24,25]
    //R
]

function setInitPosition(ding, vector){
    ding.position.x = vector[0]*dong
    ding.position.y = vector[1]*dong
    ding.position.z = vector[2]*dong
}

function setPosition(ding, vector){
    ding.position.x = vector[0]
    ding.position.y = vector[1]
    ding.position.z = vector[2]
}


function defineCubes(){
    for (let i = 0; i < 26; i++){
        let tempCubeMat = [
            new THREE.MeshBasicMaterial({color:0x000000}),
            new THREE.MeshBasicMaterial({color:0x000000}),
            new THREE.MeshBasicMaterial({color:0x000000}),
            new THREE.MeshBasicMaterial({color:0x000000}),
            new THREE.MeshBasicMaterial({color:0x000000}),
            new THREE.MeshBasicMaterial({color:0x000000}),
        ]
        let tempGeoMesh = new NewCube(`Object${i}`, "Box",[1,1,1], tempCubeMat)
        let tempCube = [tempGeoMesh,[],tempCubeMat]
        cubes.push(tempCube)
    }
    return cubes
}

function defineCubePositions(){
    for (let i = 0; i < 26; i++){
        //BoxGeometry
        setInitPosition(cubes[i][0].getNewOutObject(),posCube[i])
    }
    return cubes
}

function defineCubeGroups(){
    for (let i = 0; i < 6; i++){
        for (let j = 0; j < 9; j++){
            switch (i){
                case 0:
                    cubes[groupCube[i][j]][1].push("U")
                    break;
                case 1:
                    cubes[groupCube[i][j]][1].push("D")
                    break;
                case 2:
                    cubes[groupCube[i][j]][1].push("F")
                    break;
                case 3:
                    cubes[groupCube[i][j]][1].push("B")
                    break;
                case 4:
                    cubes[groupCube[i][j]][1].push("L")
                    break;
                case 5:
                    cubes[groupCube[i][j]][1].push("R")
                    break;
            }
        }
    }
    return cubes
}

function defineCubeColors(){
    for (let i = 0; i < 26; i++){
        for (let j = 0; j < cubes[i][1].length; j++){
            switch (cubes[i][1][j]){
                case "U":
                    cubes[i][0].getNewOutObject().material[2].color.setHex(0xffffff)
                    break;
                case "D":
                    cubes[i][0].getNewOutObject().material[3].color.setHex(0xffff00)
                    break;
                case "F":
                    cubes[i][0].getNewOutObject().material[4].color.setHex(0xff0000)
                    break;
                case "B":
                    cubes[i][0].getNewOutObject().material[5].color.setHex(0xffa500)
                    break;
                case "L":
                    cubes[i][0].getNewOutObject().material[1].color.setHex(0x008000)
                    break;
                case "R":
                    cubes[i][0].getNewOutObject().material[0].color.setHex(0x0000ff)
                    break;
            }
        }
    }
    return cubes
}


function cubesToScene(){
    for (let i = 0; i < 26; i++){
        scene.add(cubes[i][0].getNewOutObject())
    }
}


console.table(defineCubes())
console.table(defineCubePositions())
console.table(defineCubeGroups())
console.table(defineCubeColors())

// defineCubes()
// defineCubePositions()
// defineCubeGroups()
// defineCubeColors()







