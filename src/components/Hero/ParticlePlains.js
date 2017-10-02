import React, { Component } from 'react'
import * as THREE from 'three-canvas-renderer'

const SEPARATION = 100
const AMOUNTX = 50
const AMOUNTY = 50
const PARTICLE_COLOR = 0xf8f8f8

class ParticlePlains extends Component {
  container
  camera
  scene = new THREE.Scene()
  renderer = new THREE.CanvasRenderer({ alpha: true })
  particles = []
  particle
  count = 0
  mouseX = 300
  mouseY = -600
  windowHalfX
  windowHalfY

  constructor (props, context) {
    super(props, context)

    this.init = this.init.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.animate = this.animate.bind(this)
    this.renderScene = this.renderScene.bind(this)
  }

  init () {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 1000

    const PI2 = Math.PI * 2
    const material = new THREE.SpriteCanvasMaterial({
      color: PARTICLE_COLOR,
      transparent: true,
      opacity: 0.4,
      program: context => {
        context.beginPath()
        context.arc(0, 0, 0.5, 0, PI2, true)
        context.fill()
      }
    })
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const particle = this.particles[i++] = new THREE.Sprite(material)
        particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2)
        particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2)
        this.scene.add(particle)
      }
    }
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.container.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.onWindowResize, false)
  }

  onWindowResize () {
    this.windowHalfX = window.innerWidth / 2
    this.windowHalfY = window.innerHeight / 2
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  animate () {
    window.requestAnimationFrame(this.animate)
    this.renderScene()
  }

  renderScene () {
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05
    this.camera.lookAt(this.scene.position)
    var i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const particle = this.particles[i++]
        particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) +
          (Math.sin((iy + this.count) * 0.5) * 50)
        particle.scale.x = particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 1) * 4 +
          (Math.sin((iy + this.count) * 0.5) + 1) * 4
      }
    }
    this.renderer.render(this.scene, this.camera)
    this.count += 0.1
  }

  componentDidMount () {
    this.windowHalfX = window.innerWidth / 2
    this.windowHalfY = window.innerHeight / 2
    this.init()
    this.animate()
  }

  render () {
    return (
      <div
        className='z--1 absolute top-0 left-0 min-vh-100 w-100'
        ref={div => { this.container = div }}
      />
    )
  }
}

export default ParticlePlains
