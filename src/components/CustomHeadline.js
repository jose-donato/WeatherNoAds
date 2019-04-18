import React from 'react'
import { StyleSheet } from 'react-native'
import { Headline } from "react-native-paper"
import PropTypes from 'prop-types'

const CustomHeadline = props => {
    if(props.headlineNumber == 1) {
        return(
            <Headline style={styles.headline}>{props.headlineText}</Headline>
        )
    }
    else if(props.headlineNumber == 2) {
        return(
            <Headline style={styles.headline2}>{props.headlineText}</Headline>
        )
    }
}





const styles = StyleSheet.create({
    headline: {
        fontFamily: "BebasNeue-Regular",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#fff"
      },
      headline2: {
        fontFamily: "BebasNeue-Regular",
        marginTop: 20,
        marginBottom: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#fff"
      },
});

CustomHeadline.propTypes = {
    headlineNumber: PropTypes.number.isRequired,
    headlineText: PropTypes.string.isRequired,
}


export default CustomHeadline