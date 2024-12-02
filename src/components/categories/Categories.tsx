import { catalogActions, catalogSelectors } from "../../store/slices/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

function Categories(): JSX.Element {
	const dispatch = useAppDispatch();
	const categories = useAppSelector(catalogSelectors.getCategories);
	const currentCategory = useAppSelector(catalogSelectors.getActiveCategory);

	return (
		<div className="tabs">
			<section className="places-types container">
				<ul className="places-types__list tabs__list">
					{categories.map((category) => (
						<li key={category} className="places-types__item">
							<a
								onClick={() => dispatch(catalogActions.setActiveCategory(category))}
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
