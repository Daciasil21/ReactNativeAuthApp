import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) =>{
	return (
		<View style = {styles.containerStyle}>
			<Text style= {styles.labelStyle}>{label}</Text>
			<TextInput 
				style = {styles.inputStyle}
				value = {value}
				placeholder={placeholder}
				onChangeText = {onChangeText}
				autocorrect = {false}
				secureTextEntry = {secureTextEntry}
				/>
		</View>
		)
}

const styles = {
	inputStyle : {
		height:50,
		 width: 100,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 27,
		flex: 2	
	},
	 labelStyle:{
	 	fontSize: 24,
	 	paddingLeft: 20,
	 	flex: 1

	},
	containerStyle:{
		height:40,
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'center'

	}

}

export {Input};