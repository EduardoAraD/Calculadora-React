import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    },
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
/*
export default props => {
    const stylesButton = [styles.button]

    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)
    
    return (
        <TouchableHighligth onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighligth>
    )
}
*/