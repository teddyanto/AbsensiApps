import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { NotifPengisian, TablePengisian } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Form_absensi_sudah = ({navigation}) => {
    return (
        <View style={ styles.page }>
            <ScrollView style={styles.containerScrollView}>
                <View>            
                    <ScrollView style={styles.containerScroll}>
                        <View styl={styles.container}>
                            <NotifPengisian/>
                            <TablePengisian navigation={navigation}/>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form_absensi_sudah

const styles = StyleSheet.create({
    
    containerScroll:{
        height:300,        
    },
    container:{        
    },
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})