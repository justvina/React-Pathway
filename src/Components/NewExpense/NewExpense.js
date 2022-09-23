import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (expenseDataParam) => {
    const expenseData = {
      ...expenseDataParam,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const editingHandler = () => {
    setEditing(true);
  };

  const cancelEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
