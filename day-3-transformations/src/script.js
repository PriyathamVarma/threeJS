import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Axes Helper
 * * To get axis on the screen
 */
const axesHelper = new THREE.AxesHelper(1)// Here the number indicates units
scene.add(axesHelper)

/**
 * Objects
 * For groyup of objects instead of single object
 * Transformations have four main properties
 * Position
 * Scale
 * Rotation
 * Quaternion
 */
const group = new THREE.Group()
group.scale.y = 3
// axis order is important when transforming objects
// group.rotation.reorder('YXZ') --> first y axis then x then z
group.rotation.y = 0.1
scene.add(group)

// Group objects properties
// instaed of mesh.position.x = 1 and mesh.position.y = 1 we can 
// use mesh.position.set(1,1,1) --> for x,y,z

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = - 1.5
cube1.rotation.x = 2 // you can also rotate the object individually
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x = 1.5
group.add(cube3)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.lookAt(new THREE.Vector3(0, - 1, 0))
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)