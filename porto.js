import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, Button, Alert, TextInput } from 'react-native';
import React from 'react'
const Separator = () => <View style={styles.separator} />;
import { FontAwesome } from '@expo/vector-icons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

const [text, onChangeText] = React.useState('Masukkan Nama');

return (
  <View style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <Image style={styles.background}
  source={require('./background.png')}
  />
    <Image style={styles.avatar}
  source={require('./profile1.jpg')}
  />
    <Text style={styles.title}>Girindra Wijaya</Text>
    <Text style={styles.paragraph}>(Biasa dipanggil Indra)</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <View>
    <Text style={{width: 140, textAlign: 'center', color: '#d9d9d9'}}>Tentang Saya</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
</View>
    <Text style={styles.paragrap}>Halo,{"\n"}{"\n"}Perkenalkan nama saya Girindra Wijaya, saya adalah salah satu pelajar di SMK Telkom Purwokerto. Saya mengambil jurusan RPL (Rekayasa Perangkat Lunak).RPL merupakan jurusan yang bergerak dalam bidang Informasi dan Teknologi. Jurusan RPL Sendiri lebih berfokus kepada pengembangan software. Saya memiliki pengalaman mengerjakan project mendesain website, menjadi front-end developer dan desainer konten feed instagram.{"\n"}{"\n"} Pengalaman tersebut saya dapatkan dari kegiatan pkl selama 6 bulan di kota Semarang Salah satu project front-end yang pernah saya kerjakan adalah project pembuatan website jurnal karyawan, dimana website tersebut akan digunakan untuk mencatat kehadiran dan kegiatan karyawan/murid magang selama bekerja</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <View>
    <Text style={{width: 100, textAlign: 'center', color: '#d9d9d9'}}>Recent Project</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
</View>
    <Text style={styles.recent}>Recent Project</Text>
    <Text style={styles.description}>1. Membuat Artikel & Mengupload </Text>
    <Image style={styles.project1}
  source={require('./project1.png')}
  />
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
    <Text style={styles.description}>2. Membuat Konten Feed Instagram </Text>
    <Image style={styles.project1}
  source={require('./project2.png')}
  />
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <Text style={styles.description}>3. Team Project Pembuatan Website </Text>
    <Image style={styles.project1}
  source={require('./project3.png')}
  />
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <Text style={styles.description}>4. Mengubah Isi Pada Konten Program </Text>
    <Image style={styles.project1}
  source={require('./project4.png')}
  />
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <Text style={styles.description}>5. Membuat,Merevisi, dan Mengupload Deskripsi Program </Text>
    <Image style={styles.project1}
  source={require('./project5.png')}
  />
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
  <View>
    <Text style={{width: 170, textAlign: 'center', color: '#d9d9d9'}}>Kontak & Sosial Media</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9'}} />
</View>
<Text style={styles.recent}>Kontak & Sosial Media</Text>
<Text style={styles.txt}><FontAwesome name="whatsapp" size={14} color="white" /> 0882003076795</Text>
<Text style={styles.txt}><FontAwesome name="instagram" size={14} color="white" /> grndrawjy_</Text>
      </ScrollView>
  </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  }, 
  paragraph: {
    marginBottom: 10,
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center'
  },
  paragrap: {
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    marginBottom:20,
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginTop: 60,
    width: 128,
    height: 128,
    borderRadius: 100,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
  },
  recent: {
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  project1: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    marginTop: 20
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 25,
    marginTop: 25
  },
  txt: {
    margin: 10,
    padding: 10,
    borderRadius: 7,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#ABABAB',
    color: 'white'
  },
  background: {
    width: 450,
    position: 'absolute',
    height: 140,
    borderRadius: 40,
  }

});