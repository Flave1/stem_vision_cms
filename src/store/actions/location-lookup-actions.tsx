import axiosInstance from "../../axios/axiosInstance"
import { dashboard_routes } from "../../router/fws-path-locations";
import { Alert } from "../../utils/Alert";
import { actions } from "../action-types/location-lookup-action-types"
import { startSpining, stopSpining } from "./app-layout-actions";

export const GetCountryLookupList = () => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get('/fws/lookups/api/v1/get-all/country-lookup')
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_COUNTRY_LOOKUP,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const GetStateLookupList = (countryId: any) => (dispatch: any) => {
    startSpining()(dispatch);
    axiosInstance.get(`/fws/lookups/api/v1/get-all/state-lookup?countryId=${countryId}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_STATE_LOOKUP,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const GetCityLookupList = (stateId: any) => (dispatch: any) => {
    startSpining()(dispatch);
    axiosInstance.get(`/fws/lookups/api/v1/get-all/city-lookup?stateId=${stateId}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_CITY_LOOKUP,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}


export const CreateCountry = (form: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);
    axiosInstance.post('/fws/lookups/api/v1/create/country-lookup', form)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(-1)
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const CreateState = (values: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('/fws/lookups/api/v1/create/state-lookup', values)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(-1)
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const CreateCity = (form: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);
    axiosInstance.post('fws/lookups/api/v1/create/city-lookup', form)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(`${dashboard_routes.locationLocations.city}?countryId=${form.countryId}&stateId=${form.stateId}`)
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const UpdateCountry = (country: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('fws/lookups/api/v1/update/country-lookup', country)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(-1)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const UpdateState = (states: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('fws/lookups/api/v1/update/state-lookup', states)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(-1)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const UpdateCity = (city: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('fws/lookups/api/v1/update/city-lookup', city)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
            navigate(`${dashboard_routes.locationLocations.city}?countryId=${city.countryId}&stateId=${city.stateId}`)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const DeleteCountryItem = (countryId: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        lookupId: countryId[0]
    }
    axiosInstance.post('/fws/lookups/api/v1/delete/country-lookup', payload)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCountryLookupList()(dispatch)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const DeleteStateItem = (stateId: any, countryIdQueryParam: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        lookupId: stateId[0]
    }

    axiosInstance.post('/fws/lookups/api/v1/delete/state-lookup', payload)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetStateLookupList(countryIdQueryParam)(dispatch)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const DeleteCityItem = (params: any,) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        lookupId: params.cityId
    }
    axiosInstance.post('/fws/lookups/api/v1/delete/city-lookup', payload)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetCityLookupList(params.stateIdQueryParam)(dispatch)
        }).catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}