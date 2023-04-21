<<<<<<< HEAD

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import * as UploadAdapter  from '@ckeditor/ckeditor5-upload'
//import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

=======
import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
>>>>>>> 820e95a63262cc1d464ceef8faad2a926ff52f5c

function MyEditor({ setContent, content }) {

    const textEditorModules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', "strike"],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['image', "link",],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
            ],
            //   handlers: {
            //     image: imageHandler
            //   }
        },
    }), []);
    return (
<<<<<<< HEAD
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
            //  plugins: [ Base64UploadAdapter ],
              
            // }}
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
=======
        <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={textEditorModules}
            style={{ height: '1000px', maxHeight: "1000px" }}
            className="h6 mb-5"
>>>>>>> 820e95a63262cc1d464ceef8faad2a926ff52f5c
        />
    );
}

export default MyEditor;