import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance
        title="Your balance"
        value="2,550.53"
        size="small"
      ></DisplayBalance>

      <DisplayBalances></DisplayBalances>

      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLine description="Income" value="$10.00"></EntryLine>
      <EntryLine description="Expense" value="$10.00" isExpense></EntryLine>

      <MainHeader title="Add new transaction" type="h3"></MainHeader>
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
