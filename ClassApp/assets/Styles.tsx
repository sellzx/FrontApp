import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#192734',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  input: {
    color: 'white',
  },
  button: {
    backgroundColor: '#1DA1F2',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Styles;