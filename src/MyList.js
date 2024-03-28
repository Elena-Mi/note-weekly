const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
  return (
		<div>
			<div className='mealPlan_mobile'>
				<h1>Weekly Meal Plan Ideas</h1>

				<button  className='button-add' onClick={addMeal}>
					ADD
				</button>
			</div>
			<div >
				{mealPlans.map(({ id, title, mealForADay }) => (
					<div key={id}
						className={` meal ${id === selectedDay ? 'selected' : 'default'}`}
						onClick={() => setSelectedDay(id)}
					>
						<p className='title'>{title}</p>

						<p className='title'> {mealForADay.substring(0, 60)}</p>

						<button className='button-delete' onClick={() => deleteDay(id)}>
							delete
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
export default MyList;