import { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetExportedDoc } from '../../../store/actions/documentation-actions';
import { useLocation } from 'react-router-dom';

const ExportedPreviewDocumentation = ({ exportedDocumentation, getExportedDoc }: any) => {
    const locations = useLocation();
    const queryParams = new URLSearchParams(locations.search);
    const feature = queryParams.get("feature");

    useEffect(() => {
        getExportedDoc(feature)
    }, [feature])


    return (
        <>
            {exportedDocumentation?.map((doc: any, idx: number) => (
                <div>
                    <h4 className="card-title m-3 ">
                        <b>{doc.subject}</b>
                    </h4>
                    <div className='container'>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: doc?.body,
                            }}
                        >

                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

function mapStateToProps(state: any) {
    return {
        exportedDocumentation: state.documentation.exportedDocumentation,
    };
}

function mapDispatchToProps(dispatch: any) {
    return { getExportedDoc: (id: any, pageNumber: number) => GetExportedDoc(id)(dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportedPreviewDocumentation)