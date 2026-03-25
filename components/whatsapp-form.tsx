"use client"

import { FormEvent, ReactNode } from "react"

interface WhatsAppFormProps {
  children: ReactNode
  className?: string
  phoneNumber: string
  intro: string
  fieldLabels?: Record<string, string>
  phoneMap?: Record<string, string>
  phoneFieldName?: string
}

export function WhatsAppForm({
  children,
  className,
  phoneNumber,
  intro,
  fieldLabels = {},
  phoneMap,
  phoneFieldName = "abogado",
}: WhatsAppFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const lines: string[] = []
    const selectedPhoneKey = String(formData.get(phoneFieldName) || "")

    for (const [key, value] of formData.entries()) {
      const stringValue = String(value).trim()
      if (!stringValue) continue

      const label = fieldLabels[key] || key
      lines.push(`${label}: ${stringValue}`)
    }

    const destinationPhone = phoneMap?.[selectedPhoneKey] || phoneNumber
    const message = encodeURIComponent(`${intro}\n\n${lines.join("\n")}`)
    window.open(`https://wa.me/${destinationPhone}?text=${message}`, "_blank")
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
