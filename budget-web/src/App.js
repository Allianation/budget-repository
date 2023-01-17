import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    //console.log("TotalIncomes", totalIncomes);
    //console.log("TotalExpenses", totalExpenses);
    setTotal(totalIncomes - totalExpenses);
    setTotalExpenses(totalExpenses);
    setTotalIncomes(totalIncomes);
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance
        title="Your balance"
        value={total}
        size="small"
      ></DisplayBalance>

      <DisplayBalances
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
      ></DisplayBalances>

      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLines entries={entries}></EntryLines>

      <MainHeader title="Add new transaction" type="h3"></MainHeader>
      <NewEntryForm></NewEntryForm>
      <ModalEdit isOpen={isOpen} {...entry}></ModalEdit>
      <br></br>
    </Container>
  );
}

export default App;
