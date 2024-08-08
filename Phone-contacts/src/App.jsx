import React from 'child'

function App() {
    const [familyName, setFamilyName] = useState("");
    const updateFamilyName = (name) => {
        setFamilyName(name)
    }


return (
    <div>
        <p>Family Name: {familyName}</p>
        <button onClick={()=>
            updateFamilyName("Gellers")} >

            Get Family Name</button>
            <child familyName={familyName} />
    </div>
)
}

export default App
