import { getCategories, getActiveCategory, setActiveCategory } from "../../store/slices/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function Categories(): JSX.Element {
	const dispatch = useAppDispatch();
	const categories = useAppSelector(getCategories);
	const currentCategory = useAppSelector(getActiveCategory);

	const handleCategoryChange = (category: string) => {
		dispatch(setActiveCategory(category));
	};

	return (
		<div className="tabs">
			<section className="places-types container">
				<ul className="places-types__list tabs__list">
					{categories.map((category) => (
						<li key={category} className="places-types__item">
							<a
								onClick={() => handleCategoryChange(category)}
								className={`places-types__item-link tabs__item ${
									category === currentCategory ? "tabs__item--active" : ""
								}`}
								href="#"
							>
								<span>{category}</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default Categories;
