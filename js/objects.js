class NewObject{
    constructor(name, geoType, geoVarList, matType, matObject){
        this.name = name;
        this.geoType = geoType;
        this.geoVarList = geoVarList;
        this.matType = matType;
        this.matObj = matObject;
        this.geometry = defineGeometry(this.geoType, this.geoVarList);
        this.material = defineMaterial(this.matType, this.matObj);
        this.newOutObject = new THREE.Mesh(this.geometry, this.material);
    }
    getName(){
        return this.name
    }
    getGeoType(){
        return this.geoType
    }
    getGeoVarList(){
        return this.geoVarList
    }
    getMatType(){
        return this.matType
    }
    getMatObj(){
        return this.matObj
    }
    setMatObj(matObjin){
        console.log("cock")
        this.matObj = matObjin
    }
    getGeometry(){
        return this.geometry
    }
    getMaterial(){
        return this.material
    }
    getNewOutObject(){
        return this.newOutObject
    }
}


class NewCube{
    constructor(name, geoType, geoVarList, inMat){
        this.name = name;
        this.geoType = geoType;
        this.geoVarList = geoVarList;
        this.geometry = defineGeometry(this.geoType, this.geoVarList);
        this.material = inMat
        this.newOutObject = new THREE.Mesh(this.geometry, this.material);
    }
    getName(){
        return this.name
    }
    getGeoType(){
        return this.geoType
    }
    getGeoVarList(){
        return this.geoVarList
    }
    getGeometry(){
        return this.geometry
    }
    getMaterial(){
        return this.material
    }
    getNewOutObject(){
        return this.newOutObject
    }
}


function defineGeometry(geoType, geoVarList){

    var geoOut;
    switch(geoType){
        case "Box":
            geoOut = new THREE.BoxGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4], geoVarList[5]);
            break;
        case "Circle":
            geoOut = new THREE.CircleGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Cone":
            geoOut = new THREE.ConeGeometry(geoVarList[0], geoVarList[1], geoVarList[2]);
            break;
        case "Cylinder":
            geoOut = new THREE.CylinderGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3]);
            break;
        case "Dodecahedron":
            geoOut = new THREE.DodecahedronGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Edges":
            geoOut = new THREE.EdgesGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Extrude":
            geoOut = new THREE.ExtrudeGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Icosahedron":
            geoOut = new THREE.IcosahedronGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Lathe":
            geoOut = new THREE.LatheGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3]);
            break;
        case "Octahedron":
            geoOut = new THREE.OctahedronGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Parametric":
            geoOut = new THREE.ParametricGeometry(geoVarList[0], geoVarList[1], geoVarList[2]);
            break;
        case "Plane":
            geoOut = new THREE.PlaneGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3]);
            break;
        case "Polyhedron":
            geoOut = new THREE.PolyhedronGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3]);
            break;
        case "Ring":
            geoOut = new THREE.RingGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4], geoVarList[5]);
            break;
        case "Shape":
            geoOut = new THREE.ShapeGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Sphere":
            geoOut = new THREE.SphereGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4], geoVarList[5], geoVarList[6]);
            break;
        case "Tetrahedron":
            geoOut = new THREE.TetrahedronGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Text":
            geoOut = new THREE.TextGeometry(geoVarList[0], geoVarList[1]);
            break;
        case "Torus":
            geoOut = new THREE.TorusGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4]);
            break;
        case "TorusKnot":
            geoOut = new THREE.TorusKnotGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4], geoVarList[5]);
            break;
        case "Tube":
            geoOut = new THREE.TubeGeometry(geoVarList[0], geoVarList[1], geoVarList[2], geoVarList[3], geoVarList[4]);
            break;
        case "Wireframe":
            geoOut = new THREE.WireframeGeometry(geoVarList[0]);
            break;
    }
    return geoOut
}


function defineMaterial(matType, obj){
    var matOut;
    switch(matType){
        case "LineBasic":
            matOut = new THREE.LineBasicMaterial(obj);
            break;
        case "LineDashed":
            matOut = new THREE.LineDashedMaterial(obj);
            break;
        case "MeshBasic":
            matOut = new THREE.MeshBasicMaterial(obj);
            break;
        case "MeshDepth":
            matOut = new THREE.MeshDepthMaterial(obj);
            break;
        case "MeshDistance":
            matOut = new THREE.MeshDistanceMaterial(obj);
            break;
        case "MeshLambert":
            matOut = new THREE.MeshLambertMaterial(obj);
            break;
        case "MeshMatcap":
            matOut = new THREE.MeshMatcapMaterial(obj);
            break;
        case "MeshNormal":
            matOut = new THREE.MeshNormalMaterial(obj);
            break;
        case "MeshPhong":
            matOut = new THREE.MeshPhongMaterial(obj);
            break;
        case "MeshPhysical":
            matOut = new THREE.MeshPhysicalMaterial(obj);
            break;
        case "MeshStandard":
            matOut = new THREE.MeshStandardMaterial(obj);
            break;
        case "MeshToon":
            matOut = new THREE.MeshToonMaterial(obj);
            break;
        case "Points":
            matOut = new THREE.PointsMaterial(obj);
            break;
        case "RawShader":
            matOut = new THREE.RawShaderMaterial(obj);
            break;
        case "Shader":
            matOut = new THREE.ShaderMaterial(obj);
            break;
        case "Shadow":
            matOut = new THREE.ShadowMaterial(obj);
            break;
        case "Sprite":
            matOut = new THREE.SpriteMaterial(obj);
            break;
    }
    return matOut;

}