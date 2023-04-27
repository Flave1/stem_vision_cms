import { DocumentationDetail } from "../../components/Models/documentation/DocumentationDetail";

export interface IDocumentationState {
    docList: DocumentationDetail[],
    docProducts:DocumentationDetail[],
    singleDocumentation:DocumentationDetail,
    exportedDocumentation:any,
    filterProps:any,
}