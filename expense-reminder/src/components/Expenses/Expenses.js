import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const items = props.items.map((item) => {
		return (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		);
	});

	return (
		<Card className="expenses">
			{items}
		</Card>
	);

}

export default Expenses;
