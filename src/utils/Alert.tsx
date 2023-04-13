import swal from "sweetalert";

export class Alert {
    static showError(text: string) {
        swal("Error", text, "error")
    }
    static showSuccess(text: string) {
        swal("Successful", text, "success")
    }
    static showDialog({ title, text }: any): Boolean {
        swal({
            title,
            text,
            icon: "warning",
            buttons: ["cancel", true],
            dangerMode: true,
        }).then((res: any) => {
            console.log('dialog res', res);
            return res;
        });
        return false;
    }
}