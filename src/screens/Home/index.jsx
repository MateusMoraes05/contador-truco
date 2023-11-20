import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native"
import {styles} from "./styles"
import { useState, useEffect } from "react"

export default function Home() {

    let [nomeTimeA, setNomeTimeA] = useState("Time A")
    let [nomeTimeB, setNomeTimeB] = useState("Time B")
    let [isTrucado, setIsTrucado] = useState(false)
    let [valorRodada, setValorRodada] = useState(1)
    let [pontosA, setPontosA] = useState(0)
    let [pontosB, setPontosB] = useState(0)

    useEffect(() => {
        if(!isTrucado) {
            setValorRodada(1)
        }
    }, [isTrucado])

    useEffect(()=>{
        if(pontosA == 12) {
            Alert.alert(`BOAAAAAAAAA. Parabéns, ${nomeTimeA}`)
            setPontosA(0)
            setPontosB(0)
        }
        else if(pontosB == 12) {
            Alert.alert(`UHUUUUUUL. Parabéns, ${nomeTimeB}`)
            setPontosA(0)
            setPontosB(0)
        }
    }, [pontosA, pontosB])

    function trucoSolicitado() {
        setIsTrucado(true)
        if(valorRodada == 1) {
            setValorRodada(3)
        }
        else if(valorRodada == 3) {
            setValorRodada(6)
        }
        else if(valorRodada == 6) {
            setValorRodada(9)
        }
        else if(valorRodada == 9) {
            setValorRodada(12)
        }
        else if(valorRodada == 12) {
            setValorRodada(1)
        }
    }

    function acrescentarPontos(time) {
        if(time == "a") {
            if(pontosA + valorRodada <= 12) {
                setPontosA(pontosA + valorRodada)
            }
            else {
                setPontosA(12)
            }
        }
        else if(time == "b") {
            if(pontosB + valorRodada <= 12) {
                setPontosB(pontosB + valorRodada)
            }
            else {
                setPontosB(12)
            }
        }
        setIsTrucado(false)
    }

    function subtrairPontos(time) {
        if(time == "a") {
            if((pontosA - valorRodada) > 0) {
                setPontosA(pontosA - valorRodada)
            }
            else {
                setPontosA(0)
            }
        }
        else if(time == "b") {
            if((pontosB - valorRodada) > 0) {
                setPontosB(pontosB - valorRodada)
            }
            else {
                setPontosB(0)
            }
        }
        setIsTrucado(false)
    }


    return (
        <View style={styles.container}>
            <View style={styles.menuSuperior}>
                <Text style={styles.titulo}>Truco dos Pescadores</Text>
            </View>
            <View style={styles.caixaPontos}>
                <View style={styles.times}>
                    <View style={[styles.caixaTextoTimes, {backgroundColor: "#000"}]}>
                        <TextInput onChangeText={newText => setNomeTimeA(newText)}
                        defaultValue={nomeTimeA} style={styles.textoTimes}></TextInput>
                    </View>
                    <Text style={styles.pontosTimes}>{pontosA}</Text>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.times}>
                    <View style={[styles.caixaTextoTimes, {backgroundColor: "#c6000c"}]}>
                        <TextInput onChangeText={newText => setNomeTimeB(newText)}
                        defaultValue={nomeTimeB} style={styles.textoTimes}></TextInput>
                    </View>
                    <Text style={styles.pontosTimes}>{pontosB}</Text>
                </View>
            </View>
            <View style={styles.caixaBotoes}>
                <View style={styles.botoes}>
                    <TouchableOpacity onPress={()=>{subtrairPontos("a")}} style={[styles.botao, {backgroundColor: "#000"}]}><Text style={styles.textoBotao}>-{valorRodada}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{acrescentarPontos("a")}} style={[styles.botao, {backgroundColor: "#000"}]}><Text style={styles.textoBotao}>+{valorRodada}</Text></TouchableOpacity>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity onPress={()=>{subtrairPontos("b")}} style={[styles.botao, {backgroundColor: "#c6000c"}]}><Text style={styles.textoBotao}>-{valorRodada}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{acrescentarPontos("b")}} style={[styles.botao, {backgroundColor: "#c6000c"}]}><Text style={styles.textoBotao}>+{valorRodada}</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.caixaTruco}>
                <TouchableOpacity onPress={() => {trucoSolicitado()}} style={styles.botaoTruco}>
                    <Text style={styles.textoTruco}>Truco!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}