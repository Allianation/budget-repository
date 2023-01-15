import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState("");
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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

  // const deleteEntry = (id) => {}
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    //console.log("Entries", entries);
    //console.log("Result", result);
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense,
    });
    //console.log("Entries", entries);
    //console.log("Result", result);
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {
    if (id) {
      //console.log("Edit entry with id: ", id);
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

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
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      ></EntryLines>

      <MainHeader title="Add new transaction" type="h3"></MainHeader>
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      ></NewEntryForm>
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      ></ModalEdit>
      <br></br>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.0,
    isExpense: true,
  },
];
