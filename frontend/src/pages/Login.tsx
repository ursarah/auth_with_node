import Handles from "../components/Handles"

const Login = () => {
  const { handleLogin, handleLogout, setEmail, setPassword, erro, user } =
    Handles()

  return (
    <div className='login-form-wrap'>
      {user === null ? (
        <>
          <h2>Login</h2>
          <form className='login-form'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
            <button
              type='submit'
              className='btn-login'
              onClick={(e) => {
                handleLogin(e)
              }}>
              Login
            </button>
            <p>{erro}</p>
          </form>
        </>
      ) : (
        <>
          <h2>Ola, {user.name} </h2>
          <button
            type='submit'
            className='btn-login'
            onClick={(e) => {
              handleLogout(e)
            }}>
            Sair
          </button>
        </>
      )}
    </div>
  )
}

export default Login
