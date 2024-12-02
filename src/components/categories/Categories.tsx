import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { categoriesActions, categoriesSelectors } from "../../store/slices/categoriesSlice";

function Categories(): JSX.Element {
	const dispatch = useAppDispatch();
	const categories = useAppSelector(categoriesSelectors.categories);
	const currentCategory = useAppSelector(categoriesSelectors.activeCategory);

	const handleOnTabClick = (category: string) => dispatch(categoriesActions.setActiveCategory(category));

	return (
		<div className="tabs">
			<section className="places-types container">
				<ul className="places-types__list tabs__list">
					{categories.map((category) => (
						<li key={category} className="places-types__item">
							<a
								onClick={() => handleOnTabClick(category)}
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
