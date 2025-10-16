import { ScrollView, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/Card'

export default function App() {
    const handlePress = (title: string): void => {
        Alert.alert('Card presionada', `Presionaste: ${title}`)
    }

    return (
        <SafeAreaView className="flex-1 bg-gradient-to-b from-white to-gray-100">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                {/* Header */}
                <View className="bg-white px-6 py-6 border-b border-gray-200 shadow-sm">
                    <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Componentes Card
                    </Text>
                    <Text className="text-base text-gray-500 mt-1">
                        Ejemplos de variantes visuales
                    </Text>
                </View>

                {/* Default Cards */}
                <View className="mt-10 px-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                        Default Cards
                    </Text>

                    <View className="space-y-6 max-w-md mx-auto">
                        <Card
                            icon="📱"
                            title="React Native"
                            description="Framework para crear apps móviles nativas con React"
                            actionLabel="Aprender más"
                            onPress={() => handlePress('React Native')}
                        />

                        <Card
                            icon="💻"
                            title="TypeScript"
                            description="JavaScript con tipos estáticos para código más seguro"
                            actionLabel="Ver documentación"
                            onPress={() => handlePress('TypeScript')}
                        />
                    </View>
                </View>

                {/* Featured Cards */}
                <View className="mt-10 px-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                        Featured Cards
                    </Text>

                    <View className="bg-white rounded-2xl p-4 shadow-sm max-w-md mx-auto">
                        <Card
                            variant="featured"
                            icon="🚀"
                            title="Expo Framework"
                            description="La mejor manera de construir apps con React Native"
                            actionLabel="Comenzar ahora"
                            onPress={() => handlePress('Expo')}
                        />
                    </View>
                </View>

                {/* Compact Cards */}
                <View className="mt-10 px-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                        Compact Cards
                    </Text>

                    <View className="space-y-4 bg-white rounded-2xl p-4 shadow-sm max-w-md mx-auto">
                        <Card
                            variant="compact"
                            icon="⚙️"
                            title="Configuración"
                            description="Ajusta las preferencias de tu aplicación"
                            onPress={() => handlePress('Configuración')}
                        />

                        <Card
                            variant="compact"
                            icon="👤"
                            title="Perfil"
                            description="Ver y editar tu información personal"
                            onPress={() => handlePress('Perfil')}
                        />

                        <Card
                            variant="compact"
                            icon="📊"
                            title="Estadísticas"
                            description="Revisa tus métricas y progreso"
                            onPress={() => handlePress('Estadísticas')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
