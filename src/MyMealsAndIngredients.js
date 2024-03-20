const MyMealAndIngredients = ({ selectedDay, updateDay }) => {

	const editMyMeal = (myInput, value) => {
		updateDay({
			...selectedDay,
			[myInput]: value,
		})
	}
	if (!selectedDay) return <p className='week'>Plan your week ahead of time</p>

	return (
		<div>
			<div className='wholePlane'>
				<input
					className='myInput'
					placeholder='Today is...'
					id='title'
					value={selectedDay.title}
					onChange={e => editMyMeal('title', e.target.value)}
				/>
				<textarea 
					placeholder='Write your meal plan here'
					id='mealForADay'
					value={selectedDay.mealForADay}
					onChange={e => editMyMeal('mealForADay', e.target.value)}
				/>

				<textarea
					placeholder='List of ingredients'
					id='MealForADay'
					value={selectedDay.ingredients}
					onChange={e => editMyMeal('ingredients', e.target.value)}
				/>
			</div>
		</div>
	)
}
export default MyMealAndIngredients
