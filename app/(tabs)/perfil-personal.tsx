import React from 'react';
import { Image } from 'expo-image';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';

interface ProfileData {
  name: string;
  profession: string;
  avatar: string;
  bio: string;
  location: string;
  email: string;
}

const PerfilPersonal: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const profileData: ProfileData = {
    name: 'Gato Cancerbero',
    profession: 'Gato Rapero',
    avatar: 'https://i.pinimg.com/736x/02/25/e1/0225e10adb23e7d3e60607d5ccd94cf5.jpg',
    bio: 'Es como un gato pero cancerbero.',
    location: 'Soacha York',
    email: 'hguerreropalacios17@gmail.com',
  };

  const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <View style={styles.infoItem}>
      <Text style={[styles.infoLabel, isDark && styles.textDark]}>{label}</Text>
      <Text style={[styles.infoValue, isDark && styles.textDark]}>{value}</Text>
    </View>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#2563eb', dark: '#BF5E1D' }}
      headerImage={
        <Image
          source={{ uri: profileData.avatar }}
          style={styles.avatar}
          contentFit="cover"
          transition={300}
        />
      }
    >
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <Text style={[styles.title, isDark && styles.textDark]}>
            {profileData.name}
          </Text>
          <Text style={[styles.profession, isDark && styles.professionDark]}>
            {profileData.profession}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.textDark]}>
            Acerca de
          </Text>
          <Text style={[styles.bio, isDark && styles.bioDark]}>
            {profileData.bio}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.textDark]}>
            Contacto
          </Text>
          <InfoItem label="Ubicación" value={profileData.location} />
          <InfoItem label="Email" value={profileData.email} />
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.textDark]}>150</Text>
            <Text style={[styles.statLabel, isDark && styles.bioDark]}>Proyectos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.textDark]}>45.7M</Text>
            <Text style={[styles.statLabel, isDark && styles.bioDark]}>Seguidores</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.textDark]}>18+</Text>
            <Text style={[styles.statLabel, isDark && styles.bioDark]}>Años Exp.</Text>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 40,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  mainInfo: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  infoLabel: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#111827',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 16,
    padding: 24,
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e5e7eb',
  },
  textDark: {
    color: '#f9fafb',
  },
  professionDark: {
    color: '#9ca3af',
  },
  bioDark: {
    color: '#d1d5db',
  },
});

export default PerfilPersonal;