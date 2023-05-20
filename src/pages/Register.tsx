import { useState } from "react"

export function Register() {
  const [formRegister, setFormRegister] = useState({ name: '', lastName: '', email: '', password: '' })

  const handleRegister = () => {
    console.log(formRegister)
  }

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="name">Name</label>
      <input value={formRegister.name} onChange={(e) => ({ name: e.target.value, lastName: formRegister.lastName, email: formRegister.email, password: formRegister.password })} type="text" placeholder="First Name" id="name" name="name" required />
      <label htmlFor="lastName">Last Name</label>
      <input value={formRegister.lastName} onChange={(e) => setFormRegister({ name: formRegister.name, lastName: e.target.value, email: formRegister.email, password: formRegister.password })} type="text" placeholder="Last Name" id="lastName" name="lastName" required />
      <label htmlFor="registerEmail">Email</label>
      <input value={formRegister.email} onChange={(e) => ({ name: formRegister.name, lastName: formRegister.lastName, email: e.target.value, password: formRegister.password })} type="email" placeholder="youremail@gmail.com" id="registerEmail" name="registerEmail" required />
      <label htmlFor="registerPassword">Password</label>
      <input value={formRegister.password} onChange={(e) => ({ name: formRegister.name, lastName: formRegister.email, email: formRegister.email, password: e.target.value })} type="password" minLength={6} placeholder="******" id="registerPassword" name="registerPassword" required />
      <button>Register</button>
    </form>
  )

}
