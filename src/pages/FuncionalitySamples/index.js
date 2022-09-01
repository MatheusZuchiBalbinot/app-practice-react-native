import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';
import Lottie from 'lottie-react-native';
import { Heading, Text, Box, Container } from 'native-base';

export default function FuncionalitySamples() {
  return (
    <View style = {
      styles.backContainer
    } >
      <Box style={{flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-around'}}>
        <Container View style = {
          {
            maxWidth: "50%"
          }
        } >
          <Text bold fontSize="3xl"  >Em Desenvolvimento!</Text>
          <Text>As funcionalidades a seguir estão em desenvolvimento.Isso é apenas uma demonstração</Text>
        </Container>

        <View style={{maxWidth:"50%"}}>
            < Lottie
            source = {
              require("../../assets/lottie/lf20_m9zragkd.json")
            }
            loop
            autoPlay
            style = {
              {
                width: 'auto'
              }
            }
            />
        </View>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    width: '100%',
    margin: 10
  },
  button: {
    width: '20%',
    marginLeft: 20
  },
  buttonText: {
    marginTop: 25,
    color: '#4388a5',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonTextBack: {
    marginTop: 25,
    color: '#4388a5',
    fontWeight: 'bold',
    fontSize: 14
  },
  container: {
    flex: 2,
    backgroundColor: theme.colors.whiteBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    width: '60%',
    flex: 1,

  },
  containerForm: {
    flex: 3,
    width: '100%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  iduffs: {
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12
  },
  logoPractice: {
    flex: 2,
    width: '80%',
  },
  message: {
    marginTop: 10,
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
  },
  senha: {
    fontSize: 20,
  }
});
