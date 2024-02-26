import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#d5e3e6'
      },
      textInput: {
        marginVertical: 10,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        width: 300,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: 300,
      },
      startdate: {
        height: 45,
        width: 300,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        marginBottom: 10,
      },
      submitButton: {
        height: 45,
        width: 200,
        backgroundColor: '#2b98f5',
        alignSelf: 'center',
        top: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      checkboxwrap:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginBottom:15 
    },
    checkboxwrap2:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
})