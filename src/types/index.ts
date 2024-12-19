export interface NavItem {
  title: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  details: string[]
}

export interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  description?: string
  requirements?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
