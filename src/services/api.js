const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export async function submitAppointment(data) {
  const response = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error al enviar la solicitud' }))
    throw new Error(error.message || 'Error al enviar la solicitud')
  }
  return response.json()
}
