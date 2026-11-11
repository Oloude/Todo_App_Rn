
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';

const TabsLayout = () => {
    const { colors} = useTheme()
  return (
    <Tabs
    
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 90,
          paddingTop: 10,
          paddingBottom : 30,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown : false,
      }}
      
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="flash-outline"
              size={size}
             color={String(color ?? 'black')}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings"
              size={size}
             color={String(color ?? 'black')}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
