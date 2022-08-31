import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.itmes[0].title}
        amount={props.itmes[0].amount}
        date={props.itmes[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itmes[1].title}
        amount={props.itmes[1].amount}
        date={props.itmes[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itmes[2].title}
        amount={props.itmes[2].amount}
        date={props.itmes[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itmes[3].title}
        amount={props.itmes[3].amount}
        date={props.itmes[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
