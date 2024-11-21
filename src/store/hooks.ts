import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./index";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;