import { Canvas } from '@react-three/fiber'
import Merry from '../models/Merry'

export const Model3D = () => {

  const adjustMerryForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (Window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [merryScale, merryPosition, merryRotation] = adjustMerryForScreenSize()

  return (
    <section className='w-auto h-full lg:w-1/2 lg:pt-40'>
      <Canvas
        className='w-full h-full'
        camera={{ near: 0.1, far: 1000 }}
      >
        <directionalLight position={[1,1,2]} color='blue' />
        <ambientLight intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        
        <Merry 
          position = {merryPosition}
          scale = {merryScale}
          rotation = {merryRotation}
        />
      </Canvas>
    </section>
  )
}

// export default Model3D