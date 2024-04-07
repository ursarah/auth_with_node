import axios, { AxiosError } from "axios"
import { useState } from "react"

const Handles = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [erro, setErro] = useState("")
  const [user, setUser] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        },
      )

      setErro("")
      setUser(response.data)
    } catch (error) {
      const axiosError = error as AxiosError

      if (!axiosError?.response) {
        setErro("Erro ao acessar o servidor")
      } else if (axiosError.response.status === 401) {
        setErro("Usuario ou senha Invalido")
      }
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    setUser(null)
    setErro("")
  }

  return { handleLogin, handleLogout, setEmail, setPassword, erro, user }
}

export default Handles
