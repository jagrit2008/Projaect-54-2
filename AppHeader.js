import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
class AppHeader extends  React.Component {

  render(){
    return(
      <View  style={styles.textContainer }> 

      <Text style={styles.text}> Dj Jagrit</Text>

      
      </View>
    );
  }
}
const styles= StyleSheet.create({
textContainer:{
backgroundColor:'black',

},
text:{
color:'blue',
padding:20,
fontSize:25,
textAlign:'center',
fontWeight:'bold',


}
 
}
)
export default AppHeader;