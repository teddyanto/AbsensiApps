import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonSalin from '../ButtonSalin'

const FormPengisian_1_6 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>
            {/* Apakah dalam 7 hari terakhir Anda pernah mengunjungi rumah sakit atau fasilitas kesehatan lainnya? (misal: klinik/puskesmas) */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah dalam 7 hari terakhir Anda pernah mengunjungi rumah sakit atau fasilitas kesehatan lainnya? (misal: klinik/puskesmas)                   
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Ya" value="" />
                        <Picker.Item label="Tidak" value="" />
                    </Picker>
                </View>
            </View>

            {/* Untuk keperluan apa anda ke rumah sakit/fasilitas kesehatan lainnya? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Untuk keperluan apa anda ke rumah sakit/fasilitas kesehatan lainnya?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInput}                    
                    />
            </View>
        </View>
    )
}

export default FormPengisian_1_6

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_BG_FORM,
        borderRadius:3,
        padding:10,
        marginVertical:5
    },
    containerQuestion:{
        marginVertical:5,
    },
    comboBox:{
        color:WARNA_HITAM,        
        borderRadius:3,        
        overflow:'hidden'        
    },    
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM
    },
    Mandatory:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_MERAH
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM
    },
    textInput:{                
        backgroundColor:WARNA_PUTIH,
        borderRadius:3,
        paddingLeft:10,
        textAlignVertical:'center'
    },
})
