import { UserDetail } from "../../components/Models copy/auth/UserDetail";

export interface IAuthState {
    token: string,
    refreshToken: string,
    message: string,
    userDetail: UserDetail,
}