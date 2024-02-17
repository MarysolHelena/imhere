import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Marysol",
    "Mateus",
    "Mika",
    "Helena",
    "Ana",
    "Bia",
    "Lorelai",
    "Rory",
    "Logan",
    "José",
    "Cecilia",
    "Victoria",
    "João",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
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
            onRemove={() => handleParticipantRemove("Marysol")}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
