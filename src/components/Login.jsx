import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [code, setCode] = useState('')
    const navigate = useNavigate()
    const checkCode = () => {
        if (code === "1234") {
            navigate('/admins')
        }else{
            alert('Kod xato')
        }
    }
    return (
        <div>
            <input 
                onChange={(e) => setCode(e.target.value)}
                className="border-2"
                type="password"
                placeholder="password"
            />
            <button 
                onClick={checkCode}
                className="border-2 font-bold"
            >
                enter
            </button>
        </div>
    )
}

export default Login