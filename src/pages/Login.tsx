import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  const registerLogin = () => {
    navigate('./register')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={formData.email} onChange={(e) => setFormData({ email: e.target.value, password: formData.password })} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input value={formData.password} onChange={(e) => setFormData({ email: formData.email, password: e.target.value })} type="password" minLength={6} placeholder="******" id="password" name="password" required />
        <button type="submit">Log In</button>
      </form>
      <h3>Do not have an account?</h3>
      <button onClick={registerLogin}>Register here</button>
    </>
  )
}
