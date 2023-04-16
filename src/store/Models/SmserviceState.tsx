import { locationDetail } from "../../components/Models/Sms/SmserviceDetail";


export interface ISmserviceState {
    smservice:locationDetail[],
    message: string,
    countries:locationDetail[],
    states:locationDetail[],
    baseUrlSuffixValidation:boolean,
    exportPinsCode:string,
}