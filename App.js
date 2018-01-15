import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
      render() {
        return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
        );
    }
}

// 

// AppRegistry.registerComponent('p3', App); 


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
