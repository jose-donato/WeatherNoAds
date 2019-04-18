import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from "react-native-paper"
import PropTypes from 'prop-types'

const CustomButton = props => {
    return(
        <Button mode="contained" onPress={props.searchFunc} style={styles.button}>
            <Text style={styles.text}>{props.searchText}</Text>
        </Button>
    )
}





const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: 120,
        padding: 10,
        fontFamily: "BebasNeue-Regular"
      },
    text: { color: "#6f6f6f", fontFamily: "BebasNeue-Regular" },
});

CustomButton.propTypes = {
    searchFunc: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
}


export default CustomButton