/**
 * Card Component - Tarjeta reutilizable con variantes
 *
 * ¿Para qué?
 * Mostrar información de forma consistente en toda la app
 *
 * ¿Cómo?
 * Recibe props y renderiza diferentes variantes según configuración
 *
 * Variantes disponibles:
 * - default: Tarjeta estándar con botón de acción
 * - featured: Tarjeta destacada con gradiente
 * - compact: Tarjeta compacta para listas
 */

import { View, Text, TouchableOpacity, Image } from 'react-native'

interface CardProps {
    imageUrl?: string
    title: string
    description: string
    icon?: string
    variant?: 'default' | 'featured' | 'compact'
    onPress?: () => void
    actionLabel?: string
}

export function Card({
    imageUrl,
    title,
    description,
    icon = '📄',
    variant = 'default',
    onPress,
    actionLabel = 'Ver más',
}: CardProps) {
    // Variante default (estándar)
    if (variant === 'default') {
        return (
            <View className="bg-white rounded-xl p-5 shadow-md m-3">
                <Text className="text-4xl mb-3">{icon}</Text>

                <Text className="text-xl font-bold text-gray-900 mb-2">{title}</Text>

                <Text className="text-base text-gray-600 mb-4">{description}</Text>

                {onPress && (
                    <TouchableOpacity
                        onPress={onPress}
                        activeOpacity={0.7}
                        className="bg-blue-600 py-3 rounded-lg"
                    >
                        <Text className="text-white text-center font-bold">
                            {actionLabel}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    // Variante featured (destacada)
    if (variant === 'featured') {
        return (
            <View className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden m-3 shadow-xl">
                {/* Badge destacado */}
                <View className="bg-yellow-400 py-1 px-3 self-start">
                    <Text className="text-xs font-bold text-gray-900">⭐ DESTACADO</Text>
                </View>

                <View className="p-5">
                    <Text className="text-6xl mb-3">{icon}</Text>

                    <Text className="text-2xl font-bold text-white mb-2">{title}</Text>

                    <Text className="text-base text-white/90 mb-4 leading-6">
                        {description}
                    </Text>

                    {onPress && (
                        <TouchableOpacity
                            onPress={onPress}
                            activeOpacity={0.8}
                            className="bg-white py-3 rounded-lg shadow-lg"
                        >
                            <Text className="text-purple-600 text-center font-bold text-base">
                                {actionLabel}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }

    // Variante compact (compacta)
    if (variant === 'compact') {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={!onPress}
                activeOpacity={0.7}
                className="bg-gray-50 rounded-lg p-4 m-2 border border-gray-200 active:bg-gray-100"
            >
                <View className="flex-row items-center justify-between mb-1">
                    <View className="flex-row items-center flex-1">
                        <Text className="text-2xl mr-2">{icon}</Text>
                        <Text
                            className="text-lg font-bold text-gray-900 flex-1"
                            numberOfLines={1}
                        >
                            {title}
                        </Text>
                    </View>

                    {onPress && <Text className="text-gray-400 text-xl ml-2">›</Text>}
                </View>

                <Text className="text-sm text-gray-600 ml-9" numberOfLines={1}>
                    {description}
                </Text>
            </TouchableOpacity>
        )
    }

    if (variant === 'horizontal') {
        return (
            <View className="bg-white rounded-xl overflow-hidden m-3 shadow-md flex-row">
                {/* Imagen */}
                {imageUrl && (
                    <Image
                        source={{ uri: imageUrl }}
                        className="w-32 h-full"
                        resizeMode="cover"
                    />
                )}

                {/* Contenido */}
                <View className="flex-1 p-4 justify-between">
                    <View>
                        <Text className="text-lg font-bold text-gray-900 mb-1">
                            {title}
                        </Text>
                        <Text className="text-sm text-gray-600" numberOfLines={2}>
                            {description}
                        </Text>
                    </View>

                    {onPress && (
                        <TouchableOpacity
                            onPress={onPress}
                            className="bg-blue-600 py-2 px-4 rounded-lg self-start mt-2"
                        >
                            <Text className="text-white font-bold text-sm">
                                {actionLabel}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }

    return null as any
}