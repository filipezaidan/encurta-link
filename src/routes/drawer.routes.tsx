import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


const DrawerRoutes = createDrawerNavigator();

import Home from '../screens/Home';
import MyLinks from '../screens/MyLinks';


export default function Drawer(){
    return(
        <DrawerRoutes.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2ccbb9',
                activeTintColor: '#fff',
                marginTop: 16,
                labelStyle:{
                    fontSize: 19
                },

            }}
        >
            <DrawerRoutes.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Link',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <DrawerRoutes.Screen
                name="MyLinks"
                component={MyLinks}
                options={{
                    title: 'Meus Links',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

        </DrawerRoutes.Navigator>
    );
}