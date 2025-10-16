/**
 * ContactCard - Tarjeta individual de contacto
 *
 * ¿Para qué? Mostrar información de un contacto de forma visual
 * ¿Cómo? Recibe datos del contacto como props y los renderiza
 */
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Contact } from '../app/types/Contact'

interface ContactCardProps {
  contact: Contact
  onPress: (contact: Contact) => void
}

export function ContactCard({
  contact,
  onPress,
}: ContactCardProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(contact)}
      activeOpacity={0.7}
      className="bg-white mx-4 mb-3 p-4 rounded-xl shadow-sm border border-gray-100"
    >
      <View className="flex-row items-center">
        {/* Avatar */}
        <Image
          source={{ uri: contact.avatar }}
          className="w-16 h-16 rounded-full mr-4"
        />

        {/* Información */}
        <View className="flex-1">
          {/* Nombre */}
          <Text className="text-lg font-bold text-gray-900 mb-1">
            {contact.name}
          </Text>

          {/* Profesión */}
          <View className="flex-row items-center mb-1">
            <Text className="text-sm text-gray-600">
              💼 {contact.profession}
            </Text>
          </View>

          {/* Teléfono */}
          <View className="flex-row items-center">
            <Text className="text-sm text-gray-500">📱 {contact.phone}</Text>
          </View>
        </View>

        {/* Arrow indicator */}
        <Text className="text-gray-400 text-2xl ml-2">›</Text>
      </View>

      {/* Empresa (si existe) */}
      {contact.company && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="text-xs text-gray-500">🏢 {contact.company}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}