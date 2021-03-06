import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLogoPolman } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const HeaderApps = () => {
    return (
        <View style={styles.container}>
            <IconLogoPolman/>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => Alert.alert('lgout')}    
            >
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderApps

const styles = StyleSheet.create({
    container:{
        height:55,
        borderBottomColor:WARNA_SEKUNDER,
        borderBottomWidth:1,        
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:-15,
        marginTop:-15,        
        marginBottom:4,
        justifyContent:'space-between'
    },
    touchable:{                
    },
    text:{
        fontFamily:"Poppins-Regular",
        fontSize:12,
        color:WARNA_UTAMA,
        textAlign:'right',
        paddingRight:13,
    }
})
