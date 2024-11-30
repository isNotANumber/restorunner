import { getCategories, setCurrentPlaceType } from "../../features/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function PlacesTypes(): JSX.Element {
	const dispatch = useAppDispatch();

	const categories = useAppSelector((state) => getCategories(state));

	const currentPlaceType = useAppSelector((state) => state.catalog.currentPlaceType);

	const handlePlaceTypeChange = (placeType: string) => {
		dispatch(setCurrentPlaceType(placeType));
	};

	return (
		<div className="tabs">
			<section className="places-types container">
				<ul className="places-types__list tabs__list">
					{categories.map((placeType) => (
						<li key={placeType} className="places-types__item">
							<a
								onClick={() => handlePlaceTypeChange(placeType)}
								className={`places-types__item-link tabs__item ${
									placeType === currentPlaceType ? "tabs__item--active" : ""
								}`}
								href="#"
							>
								<span>{placeType}</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default PlacesTypes;
