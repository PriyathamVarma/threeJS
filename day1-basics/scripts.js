// Starts here
// Create a THREE object instance
// Every page conatins scene, camera, render and objects
// Sizes

// Canvas
const canvas = document.querySelector('.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Creating a object
// To create a cube we need to create a geometry and a material
// Geometry is the shape of the object
// Material is the color of the object

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
// Creating a mesh
// Mesh is a combination of geometry and material
// Mesh is a 3D object
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
// Creating a camera for viewing the field of view
// PerspectiveCamera is a camera that projects 3D objects into 2D
// Field of view is the angle of the camera
// Aspect ratio is the ratio of width to height of the camera
// Near and far are the distances to the near and far clipping planes
// Near clipping plane is the closest point to the camera
// Far clipping plane is the furthest point to the camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)