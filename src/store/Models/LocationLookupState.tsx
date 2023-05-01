import { CityDetail } from "../../components/Models/locationLookupModel/CityModel/CityState";
import { CountryDetail } from "../../components/Models/locationLookupModel/CountryModel/ListCountryState";
import { StateDetail } from "../../components/Models/locationLookupModel/StateModel/StateModel";

export interface ILocationLookupState {
    message: string,
    countryList: CountryDetail[],
    stateList: StateDetail[],
    cityList: CityDetail[],
}