
var SelectionPivot = new THREE.Group()
var ElsePivot = new THREE.Group()
var AllPivot = new THREE.Group()
var SelectedGroup;
var Direction;
var trudy = true;

var oneDeg = 0.01745329252;
var third = 0.5235987756;
var half = 0.7853981634;
var nintey = 1.5707963268;
var three6 = 6.2831853072;
var quarter = 0.3926990817;

var rotSpeed = quarter;

function roundTwo(number){
    out = Math.round((number*10))
    return out/10
}


function highlightDELETE(cube){
    for (let i = 0; i<6; i++){
        cube.getNewOutObject().material[i].color.setHex(0x00ffff)
    }
}

// function redefinePosition(SelectionPivot){
//     SelectionPivot.children[2].worldToLocal
// }


function defineElseGroup(){
    for (let i = 0; i < 26; i++){
        ElsePivot.add(cubes[i][0].getNewOutObject()) 
    }
}

function defineSelectionGroup(selectionGroup){
    //U/D/L/R/F/B
    SelectedGroup = selectionGroup
    for (let i = 0; i < 26; i++){
        // defineCubeColors()
        ElsePivot.add(cubes[i][0].getNewOutObject()) 
    }
    let dic = []
    for (let i = 0; i < 26; i++){
        for (let j = 0; j < cubes[i][1].length;j++){
            if (cubes[i][1][j] == selectionGroup){
                SelectionPivot.add(cubes[i][0].getNewOutObject())



            }
        }
    }
    // for (let k = 0; k<6; k++){
    //     SelectionPivot.children[0].material[k].color.setHex(0xa68e05)
    //     SelectionPivot.children[1].material[k].color.setHex(0xd35ce1)
    //     SelectionPivot.children[2].material[k].color.setHex(0xe8ffe2)
    //     SelectionPivot.children[3].material[k].color.setHex(0xe8ecbc)
    //     SelectionPivot.children[4].material[k].color.setHex(0xd62892)
    //     SelectionPivot.children[5].material[k].color.setHex(0x2bf1e9)
    //     SelectionPivot.children[6].material[k].color.setHex(0x923f9e)
    //     SelectionPivot.children[7].material[k].color.setHex(0xf70ea1)
    //     SelectionPivot.children[8].material[k].color.setHex(0xdd9c05)

    
    
    // }

}

function defineAllGroup(){
    AllPivot.add(ElsePivot)
    AllPivot.add(SelectionPivot)
}

function defineSelectionRotation(Group, direction){
    switch(Group){
        case "U":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.y -= (Math.PI/180);
                    break;
                case "cc":
                    SelectionPivot.rotation.y += (Math.PI/180);
                    break;
            }
            break;
        case "D":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.y += (Math.PI/180);
                    break;
                case "cc":
                    SelectionPivot.rotation.y -= (Math.PI/180);
                    break;
            }
            break;
        case "L":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.x += (Math.PI/180);
                    break;
                case "cc":
                    SelectionPivot.rotation.x -= (Math.PI/180);
                    break;
            }
            break;
        case "R":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.x -= (Math.PI/180);
                    console.log(SelectionPivot.rotation)
                    break;
                case "cc":
                    SelectionPivot.rotation.x += (Math.PI/180);
                    break;
            }
            break;
        case "F":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.z -= (Math.PI/180);
                    break;
                case "cc":
                    SelectionPivot.rotation.z += (Math.PI/180);
                    break;
            }
            break;
        case "B":
            switch(direction){
                case "cw":
                    SelectionPivot.rotation.z -= (Math.PI/180);
                    break;
                case "cc":
                    SelectionPivot.rotation.z += (Math.PI/180);
                    break;
            }
            break;
    }
}




function shiftAll(direction){
    let tempPosList = []
    for (let i = 0; i < 9; i++){
        tempPosList.push([SelectionPivot.children[i].position.x,SelectionPivot.children[i].position.y,SelectionPivot.children[i].position.z])
    }    
    console.table(tempPosList)
    switch(direction){
        case "cw":
            setPosition(SelectionPivot.children[0],tempPosList[2])
            setPosition(SelectionPivot.children[1],tempPosList[5])
            setPosition(SelectionPivot.children[2],tempPosList[8])
            setPosition(SelectionPivot.children[3],tempPosList[1])
            setPosition(SelectionPivot.children[5],tempPosList[7])
            setPosition(SelectionPivot.children[6],tempPosList[0])
            setPosition(SelectionPivot.children[7],tempPosList[3])
            setPosition(SelectionPivot.children[8],tempPosList[6])
        case "cc":
            setPosition(SelectionPivot.children[0],tempPosList[6])
            setPosition(SelectionPivot.children[1],tempPosList[3])
            setPosition(SelectionPivot.children[2],tempPosList[0])
            setPosition(SelectionPivot.children[3],tempPosList[7])
            setPosition(SelectionPivot.children[5],tempPosList[1])
            setPosition(SelectionPivot.children[6],tempPosList[8])
            setPosition(SelectionPivot.children[7],tempPosList[5])
            setPosition(SelectionPivot.children[8],tempPosList[2])
    }
    SelectionPivot.rotation.z = 0
}


document.addEventListener('keydown', (event) => {
    if (trudy){
    switch(event.key){
        case "w":
            defineSelectionGroup("U")
            break;
        case "s":
            defineSelectionGroup("D")
            break;
        case "a":
            defineSelectionGroup("L")
            break;
        case "d":
            defineSelectionGroup("R")
            break;
        case "q":
            defineSelectionGroup("F")
            break;
        case "e":
            defineSelectionGroup("B")
            break;
        case "ArrowDown":
            Direction = "cw"
            trudy = false
            fullTurn = 0
            break;
        case "ArrowUp":
            console.log(SelectionPivot.children[0].getWorldPosition(new THREE.Vector3))
            Direction = "cc"
            trudy = false
            fullTurn = 0
            break;
    }
} else if (!trudy){}
});


//Mouse Rotations
var bob=false;
var oneDeg = 0.01745329252;
function mouseInput(moveObj, mosX, mosY){
    if (moveObj.rotation.y > 6.2831853072 || moveObj.rotation.y < -6.2831853072){
        moveObj.rotation.y = 0;
    } 
    if (moveObj.rotation.x > 6.2831853072 || moveObj.rotation.x < -6.2831853072){
        moveObj.rotation.x = 0;
    }
    if (mosX > 0){
        moveObj.rotation.y += oneDeg*Math.abs(mosX)
    } else if (mosX < 0){
        moveObj.rotation.y -= oneDeg*Math.abs(mosX)

    }
    if (mosY > 0){
        moveObj.rotation.x += oneDeg*Math.abs(mosY)

    } else if (mosY < 0){
        moveObj.rotation.x -= oneDeg*Math.abs(mosY)

    }
}
document.onmousedown = function(r) {
    bob = true;
}
document.onmouseup = function(r){
    bob = false;
}
document.onmousemove = function(e) {
    if (bob){
        let mosX = e.movementX;
        let mosY = e.movementY; 

        //Change Geometries, full port mouse rotations
        mouseInput(AllPivot, mosX, mosY)
        // console.log(newCone.getNewOutObject().getWorldQuaternion(quat))
    }
}
