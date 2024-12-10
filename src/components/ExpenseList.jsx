export default function ExpenseList({expense,onRemove}) {
    if(expense.length === 0){
        return(
            <>
            <h2>No Data Found</h2>
            </>
        );
    }
  return (
    <>
    <div className="overflow-x-auto">
    <table className="table table-zebra border-white border-2">

    <thead>
      <tr className="text-xl text-primary">
        <th>ID</th>
        <th>Category</th>
        <th>Description</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>

      {expense.map((expense) => (
        <tr key={expense.id}>
        <th>{expense.id}</th>
        <th>{expense.category}</th>
        <th>{expense.description}</th>
        <th>{expense.amount}</th>
        <button className="btn btn-primary mb-[10px]" onClick={() => onRemove(expense.id)}>Remove</button>
      </tr>
      ))}
    </tbody>
  </table>
</div>
</>
  );
}
