import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const aboutGlobo =  `Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. A arcu cursus vitae congue. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Mauris commodo quis imperdiet massa. Purus semper eget duis at tellus. Donec massa sapien faucibus et molestie ac feugiat sed. Pretium vulputate sapien nec sagittis aliquam malesuada. Cursus euismod quis viverra nibh cras pulvinar. Tincidunt praesent semper feugiat nibh sed. Purus non enim praesent elementum facilisis. Urna condimentum mattis pellentesque id nibh tortor id aliquet.`
const whatGlobo = `Fermentum leo vel orci porta non. Arcu cursus euismod quis viverra. Elit at imperdiet dui accumsan sit. Sodales ut eu sem integer vitae justo eget. Magna ac placerat vestibulum lectus mauris. Nunc consequat interdum varius sit amet mattis. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vestibulum morbi blandit cursus risus. Facilisis magna etiam tempor orci. Suscipit tellus mauris a diam maecenas. Ac feugiat sed lectus vestibulum. Eu feugiat pretium nibh ipsum consequat. Sem nulla pharetra diam sit amet nisl suscipit. Ut porttitor leo a diam sollicitudin. Eu augue ut lectus arcu bibendum at varius vel. Sed cras ornare arcu dui vivamus.`


export class About extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/laptop2.jpg')}/>
                <Text style={styles.aboutTitle}>Who we are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/laptop2.jpg')}/>
                <Text style={styles.aboutTitle}>What we do we are</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>

            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300,
        width: '100%'
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});