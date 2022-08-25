import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from "./style"

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}> Opa {name}! </Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={27} color="FFF"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}