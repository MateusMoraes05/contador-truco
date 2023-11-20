import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      paddingVertical: 35
    },
    menuSuperior: {
        width: "100%",
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginBottom: 30
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18
    },
    caixaPontos: {
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 370
    },
    times: {
        width: "49%",
        height: "100%",
        display: "flex",
        alignItems:"center"
    },
    separador: {
        width: 0.5,
        height:"100%",
        backgroundColor: "#000"
    },
    caixaTextoTimes: {
        width: "95%",
        height: 40,
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 80
    },
    textoTimes: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 17
    },
    pontosTimes: {
        fontWeight: "bold",
        fontSize: 90
    },
    caixaBotoes: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        marginBottom: 30
    },
    botoes: {
        width: "48%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between"
    },
    botao: {
        width: "45%",
        height: 65,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textoBotao: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 24
    },
    caixaTruco: {
        width: "100%",
        paddingHorizontal: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    botaoTruco: {
        width: "100%",
        height: 80,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        borderColor:"#000",
        borderWidth: 1,
        borderRadius: 8
    },
    textoTruco:{
        fontSize:24,
        fontWeight: "bold"
    }
  });