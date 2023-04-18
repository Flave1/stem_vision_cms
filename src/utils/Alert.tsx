import swal from "sweetalert";
import { respondDialog } from "../store/actions/app-layout-actions";

export class Alert {
    static showError(text: string) {
        swal("Error", text, "error")
    }
    static showSuccess(text: string) {
        swal("Successful", text, "success")
    }
    static showDialog = ( title : any, text : any) => (dispatch:any) {
        swal({
            title,
            text,
            icon: "warning",
            buttons: ["cancel", true],
            dangerMode: true,
        }).then((res: any) => {
            if (res) {
                respondDialog('continue')(dispatch)
              } else {
                swal("Your item is safe!");
                respondDialog('')(dispatch)
              }
        });
        return false;
    }
}
