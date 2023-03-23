import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    backgroundColor: '#192734',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  iconButton: {
    alignItems: 'center',
    tabIcon: {
      color: '#a3d4ff',
    },
  },
  iconText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#a3d4ff',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#ccc',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  headerPika: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
  },
  headerHome: {
    flex: 0.1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'flex-end',
    backgroundColor: '#6C63FF',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 16 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#FDD835',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#FFEB3B',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  image: {
    width: 200,
    height: 200,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  friendList: {
    marginTop: 10,
    maxHeight: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    },
  dropdown: {
    width: 200,
    marginBottom: 10,
    },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },
  chatButton: {
    backgroundColor: '#5cb85c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
  deleteButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
  acceptButton: {
    backgroundColor: '#5cb85c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
  declineButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
  buttonTextDrop: {
    color: 'white',
    fontWeight: 'bold',
    },
});

export default Styles;