import { ScrollView, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ContactCard } from '../../components/ContactCard'
import { contactsData } from '../data/contacts'
import { Contact } from '../types/Contact'

export default function App() {
    const handleContactPress = (contact: Contact): void => {
        Alert.alert(
            contact.name,
            `📱 ${contact.phone}\n📧 ${contact.email}\n💼 ${contact.profession}${contact.company ? `\n🏢 ${contact.company}` : ''}`,
            [
                { text: 'Llamar', onPress: () => console.log('Llamar:', contact.phone) },
                { text: 'Email', onPress: () => console.log('Email:', contact.email) },
                { text: 'Cerrar', style: 'cancel' },
            ]
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Header */}
            <View className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-8 shadow-md">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-white text-3xl font-extrabold tracking-tight">
                            Contactos
                        </Text>
                        <Text className="text-blue-100 text-sm mt-1">
                            {contactsData.length} contactos guardados
                        </Text>
                    </View>
                    <View className="bg-white/25 w-12 h-12 rounded-full items-center justify-center shadow-sm">
                        <Text className="text-white text-2xl">👥</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor principal */}
            <View className="flex-1 bg-white rounded-t-3xl -mt-3 shadow-sm">
                <ScrollView
                    className="flex-1 pt-5"
                    contentContainerStyle={{ paddingBottom: 60 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="px-5 space-y-3 max-w-md mx-auto">
                        {contactsData.map((contact) => (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onPress={handleContactPress}
                            />
                        ))}
                    </View>

                    {/* Footer */}
                    <View className="border-t border-gray-200 mt-8 pt-6 items-center">
                        <Text className="text-gray-400/80 text-sm tracking-wide">
                            Fin de la lista
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
