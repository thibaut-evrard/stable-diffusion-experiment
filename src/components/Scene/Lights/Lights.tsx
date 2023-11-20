const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[3, 3, 5]}
                intensity={2}
                castShadow
                shadow-mapSize={2048}
                shadow-bias={-0.001}
            >
                <orthographicCamera
                    attach='shadow-camera'
                    args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]}
                />
            </directionalLight>
            <pointLight position={[-2, 0, 4]} intensity={1} />
        </>
    );
};

export default Lights;
