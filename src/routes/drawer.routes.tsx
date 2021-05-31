import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerRoutes = createDrawerNavigator();

import Home from '../screens/Home';
import MyLinks from '../screens/MyLinks';


export default function Drawer(){
    return(
        <DrawerRoutes.Navigator>
            <DrawerRoutes.Screen
                name="Home"
                component={Home}
            />

            <DrawerRoutes.Screen
                name="MyLinks"
                component={MyLinks}
            />

        </DrawerRoutes.Navigator>
    );
}