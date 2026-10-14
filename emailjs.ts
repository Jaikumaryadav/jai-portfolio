export const emailjsConfig = {
  serviceId: '',
  templateId: '',
  publicKey: '',
}

export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey
)
