import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { z } from 'zod'

const registerSchema = (formData) => {
  const schema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  })

  return schema.safeParse(formData)
}

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setMessage('')
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = registerSchema(formData)

    if (!result.success) {
      setError(result.error.issues[0].message)
      setMessage('')
      return
    }

    setError('')
    setMessage('Registration submitted successfully.')
  }

  return (
    <div className="register-form">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="register-field">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="register-field">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="register-field">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        <Button type="submit">Submit</Button>
        {error && <p className="register-error">{error}</p>}
        {message && <p className="register-success">{message}</p>}
      </form>
    </div>
  )
}

export default Register
