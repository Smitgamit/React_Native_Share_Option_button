import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Share,Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this._shareMessage=this._shareMessage.bind(this);
    this._showResult=this._showResult.bind(this);
    this._showResult2=this._showResult.bind(this);
    this.state={result:''};
  }
 _showResult(result)
 {
    this.setState({result})
 }
  _shareMessage()
  {
    Share.share({message:'this is sample shared msg'}).then(this._showResult);
  }

  _shareMessage2()
  {
    Share.share({message:'hello this is sample shared msg2'}).then(this._showResult2);
  }


  render() {
    return (
      <View style={styles.container}>
        
      <TouchableHighlight onPress={this._shareMessage}>
      <Text style={styles.box} >Share! </Text>
      </TouchableHighlight>

 <View style={{flexDirection: 'row',marginTop:20}}>
      <Text style={{padding:15,backgroundColor:'#000000',color:'#FFFF'}} >Share!2 </Text>
      <TouchableOpacity onPress={this._shareMessage2}>
      <Image style={{height:50,width:50}} source={require('./img/share2.png')}/>
      </TouchableOpacity>
 </View>    
      <Text>{JSON.stringify(this.state.result)}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    backgroundColor: '#295F56',
    padding:13,
    color:'#FFFFFF'


  }
});
