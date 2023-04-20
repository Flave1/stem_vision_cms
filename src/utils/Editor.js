
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import * as UploadAdapter  from '@ckeditor/ckeditor5-upload'


function MyEditor({ setContent, content }) {

    // const [uploadedFile, setUploadedFile] = useState(null);

    // function handleUploadFile(event, editor) {
    //   const file = event.target.files[0];
    //   setUploadedFile(file);
    // }
    return (
        <CKEditor

            // style={{ height: '300px' }}
            editor={ClassicEditor}
            data={content}

            onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setContent(data)
            }}
            onBlur={(event, editor) => {
                // console.log('Blur.', editor);
                // setContent(event.target.value)
            }}
            onFocus={(event, editor) => {
                // console.log('Focus.', editor);
                // setContent(data)
            }}
        // config={{
        //     simpleUpload: {
        //         uploadUrl: '/your-upload-endpoint',
        //         headers: {
        //             'X-CSRF-TOKEN': 'CSRF-Token', // Replace with actual CSRF token
        //         },
        //         // Upload adapter options
        //         adapter: <UploadAdapter />,
        //         // Configure the URL endpoint for the file uploads
        //         withCredentials: true,
        //     },
        // }}
        />
    );
}

export default MyEditor;