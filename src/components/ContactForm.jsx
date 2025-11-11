import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('¡Mensaje enviado! Te contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
    setSending(false)
  }
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+5493625672594',
      icon: 'bi-whatsapp',
      color: '#25D366'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tonotos_print',
      icon: 'bi-instagram',
      color: '#E4405F'
    },
    { 
      name: 'Email',
      url: 'mailto:tonotosprint@gmail.com',
      icon: 'bi-envelope-fill',
      color: '#0D6EFD'
    }
  ]

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Contacto</h2>
          
          {/* Botones de redes sociales */}
          <div className="d-flex justify-content-center gap-4 mb-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg"
                style={{ 
                  backgroundColor: social.color,
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className={`bi ${social.icon} fs-4`}></i>
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm