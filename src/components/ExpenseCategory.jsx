export default function ExpenseCategory({setSelecteCategory, categories}) {
  return <>
  <select className="select select-primary w-full max-w-xs" onChange={(e) => setSelecteCategory(e.target.value)}>
   <option disabled selected>
    Filter By Category
   </option>
   <option value="">
    All
   </option>
   {categories.map((category) => (
      <option value={category} key={category}>{category}</option>
    ))}
</select>
  </>
}
