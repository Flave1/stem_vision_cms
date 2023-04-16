import { locationDetail } from "../../components/Models/Sms/SmserviceDetail";

export interface ISmserviceState {
    smservice:locationDetail[],
    message: string,
    baseUrlSuffixValidation:boolean,
    exportPinsCode:string,
}