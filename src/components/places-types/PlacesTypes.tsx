import { setCurrentPlaceType } from '../../features/catalog/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { PLACES_TYPES } from '../../const';

function PlacesTypes(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentPlaceType = useAppSelector(
    (state) => state.catalog.currentPlaceType
  );

  const handlePlaceTypeChange = (placeType: string) => {
    dispatch(setCurrentPlaceType(placeType));
  };

  return (
    <div className='tabs'>
      <section className='places-types container'>
        <ul className='places-types__list tabs__list'>
          {PLACES_TYPES.map((placeType) => (
            <li key={placeType} className='places-types__item'>
              <a
                onClick={() => handlePlaceTypeChange(placeType)}
                className={`places-types__item-link tabs__item ${
                  placeType === currentPlaceType ? 'tabs__item--active' : ''
                }`}
                href='#'
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
