import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import React, { useState } from "react";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  //const [estado, atualiza] = useState(['Helena']);

  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {

   
    //verificar determinado valor dentro do array
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName(""); //define o estado como vazio apos adicionar um participant
  }

  function handleParticipantRemove(name: string) {
    

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants((prevState) =>
        prevState.filter((participant) => participant !== name)
      ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName} //define o estado como vazio apos adicionar um participant
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        //quando a lista estiver vazia
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione Participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
