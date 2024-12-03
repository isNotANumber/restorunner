import { AuthorizstionStatus } from "../const";
import { userSelectors } from "../store/slices/userSlice";
import { useAppSelector } from "./store";

export function useAuth() {
	const status = useAppSelector(userSelectors.userStatus);

	return status === AuthorizstionStatus.Auth;
}
