import { FlatList, Text, View } from 'react-native';
import { Balance } from '../../components/Balance/balance';
import { styles } from './style';
import { Transactions } from './../../components/Transactions/transactions';
import Header from './../../components/Header/header';
import Actions from '../../components/Actions/actions';
import { list } from '../../Assets/List/list';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Guilherme Lira" />

      <Balance saldo="9.000,00" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        // Remove a barrinha de arraste
        showsVerticalScrollIndicator={false}
        // Vai passar em cada item da lista, renderizando um por um. Recebe uma função anônima que pode pegar qualquer informação da lista.
        renderItem={({ item }) => <Transactions data={item} />}
      />

    </View>
  );
}
