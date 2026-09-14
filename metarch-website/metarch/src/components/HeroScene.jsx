import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * A single restrained 3D element: a wireframe massing model that
 * rotates slowly on its own. No mouse-follow, no parallax, no
 * autoplaying camera fly-through — matches the "very little cursor
 * animation" brief.
 */
export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100)
    camera.position.set(3.4, 2.6, 4.6)
    camera.lookAt(0, 0.6, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()

    // Two stepped massing volumes — echoes the "stepped down the slope" brief.
    const lineColor = new THREE.Color('#1C1B18')
    const makeBox = (w, h, d, x, y, z) => {
      const geo = new THREE.BoxGeometry(w, h, d)
      const edges = new THREE.EdgesGeometry(geo)
      const mat = new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: 0.55 })
      const mesh = new THREE.LineSegments(edges, mat)
      mesh.position.set(x, y, z)
      return mesh
    }

    group.add(makeBox(1.6, 1.1, 1.6, -0.9, 0.55, 0))
    group.add(makeBox(1.2, 0.7, 1.2, 0.9, 0.35, 0.3))

    // Ground plane grid, faint — reads as a site plan, not decoration.
    const grid = new THREE.GridHelper(6, 12, 0xcfc9bc, 0xcfc9bc)
    grid.position.y = 0
    grid.material.transparent = true
    grid.material.opacity = 0.35
    group.add(grid)

    scene.add(group)

    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()
      if (!prefersReduced) {
        group.rotation.y = t * 0.08
      }
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
}
