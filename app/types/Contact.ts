/**
 * Interface Contact - Define la estructura de un contacto
 *
 * ¿Para qué? Asegurar que todos los contactos tengan la misma estructura
 * ¿Cómo? TypeScript interface con propiedades requeridas
 */
export interface Contact {
  id: number
  name: string
  profession: string
  phone: string
  email: string
  avatar: string
  company?: string // Opcional
}