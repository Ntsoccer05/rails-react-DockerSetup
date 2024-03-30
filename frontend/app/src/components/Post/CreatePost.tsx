import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { showMessage, showMessageContent, showMessageStatus, showMessageTitle } from '../../store/showMessage';
import { TEInput, TESelect } from "tw-elements-react";
import { showDialog } from '../../store/showDialog';
import { Dialog } from '../Dialog/Dialog';
  
export const CreatePost = () => {
    // トーストメッセージを表示するか
    const [ dispMessage, setDispMessage ] = useRecoilState(showMessage);
    // トーストメッセージの内容
    const [ dispMessageContent, setDispMessageContent ] = useRecoilState(showMessageContent);
    // トーストメッセージのタイトル
    const [ dispMessageTitle, setDispMessageTitle ] = useRecoilState(showMessageTitle);
    // トーストメッセージのステータス
    const [ dispMessageStatus, setDispMessageStatus ] = useRecoilState(showMessageStatus);

    // タイトルの内容
    const [title, setTitle] = useState<string>('');
    // タイトルラベルのスタイル
    const [titleLabelStyle, setTitleLabelStyle] = useState<string>('');

    // ダイアログを表示するか
    const [ dispDialog, setDispDialog ] = useRecoilState(showDialog);

    // イベントの型定義方法はhttps://zenn.dev/kenta0313/articles/a39fb1d8edc3a4
    const handleTItleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        // リッチテキストの内容を取得
        setTitle(event.target.value);
    };

    useEffect(()=>{
        title === "" ? setTitleLabelStyle("pt-[0.37rem] peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary") 
                     : setTitleLabelStyle("pt-[0.37rem] -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem]")
    },[title])

    // リッチテキストの内容
    const [content, setContent] = useState<string>('');

    const handleEditorChange = (content:string) => {
        // リッチテキストの内容を取得
        setContent(content);
    };

    const postCard = ()=> {
        // トーストメッセージを設定する
        setDispMessage(true);
        setDispMessageContent('内容を管理者にメールにて伝えました。承認されると反映されます。');
        setDispMessageTitle('新規作成メール送信完了');
        setDispMessageStatus('info');
        // ダイアログ表示
        setDispDialog(true);
        // axios.post('api/post/create', {
        //     content
        // }).then(()=>{
        // ダイアログ表示と遷移処理
        //     setDispMessage(true)
        // トーストメッセージを設定する
        // setDispMessage(true);
        // setDispMessageContent('内容を管理者にメールにて伝えました。承認されると反映されます。');
        // setDispMessageTitle('新規作成メール送信完了');
        // setDispMessageStatus('info');
        // })
    }

    //カテゴリー内容（仮）
    const categories = [
        { text: "One", value: 1 },
        { text: "Two", value: 2 },
        { text: "Three", value: 3 },
        { text: "Four", value: 4 },
        { text: "Five", value: 5 },
      ];
    
    return (
        <div className='z-0 relative'>
            <h1 className='mt-10 mb-10 text-center text-2xl'>記事作成ページ</h1>
            <form>
                <div className='max-w-screen-lg mx-auto'>
                    <TEInput
                        type="text"
                        id="title"
                        label="タイトル"
                        counter
                        maxLength={50}
                    ></TEInput>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-3 md:w-96 pt-5">
                        <TESelect data={categories} label="カテゴリー" />
                    </div>
                </div>
                <div className='mb-10'></div>
                {/* TinyMCE 6を利用(ドキュメント：https://www.tiny.cloud/docs/tinymce/6/) */}
                <Editor
                    apiKey='x7z8rcfc6gp4092kdlue4lzoaqj6flm0xfykrifnn2fyx00y'
                    init={{
                        language: 'ja',
                        plugins: 'autoresize hr preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
                        editimage_cors_hosts: ['picsum.photos'],
                        menubar: 'file edit view insert format tools table help',
                        toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | preview | save print | pagebreak anchor codesample hr",
                        autosave_ask_before_unload: true,
                        autosave_interval: '30s',
                        autosave_prefix: '{path}{query}-{id}-',
                        autosave_restore_when_empty: false,
                        autosave_retention: '2m',
                        image_advtab: true,
                        font_family_formats: 'ⅯＳゴシック=ms gothic, gothic, sans-serif; ⅯＳ明朝=ms Mincho, sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
                        link_list: [
                            { title: 'My page 1', value: 'https://www.tiny.cloud' },
                            { title: 'My page 2', value: 'http://www.moxiecode.com' }
                        ],
                        image_list: [
                            { title: 'My page 1', value: 'https://www.tiny.cloud' },
                            { title: 'My page 2', value: 'http://www.moxiecode.com' }
                        ],
                        image_class_list: [
                            { title: 'None', value: '' },
                            { title: 'Some class', value: 'class-name' }
                        ],
                        importcss_append: true,
                        file_picker_callback: (callback, value, meta) => {
                            /* Provide file and text for the link dialog */
                            if (meta.filetype === 'file') {
                            callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
                            }

                            /* Provide image and alt text for the image dialog */
                            if (meta.filetype === 'image') {
                            callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
                            }

                            /* Provide alternative source and posted for the media dialog */
                            if (meta.filetype === 'media') {
                            callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
                            }
                        },
                        templates: [
                            { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                            { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                            { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
                        ],
                        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                        insertdatetime_formats: [ '%Y年%m月%d日 %H時%M分%S秒','%H時%M分%S秒','%Y年%m月%d日','%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p' ],
                        image_caption: true,
                        min_height:600,
                        quickbars_selection_toolbar: 'bold italic fontfamily fontsize | quicklink h1 h2 h3 blockquote quickimage quicktable',  // 入力内容をクリック時に表示するツール
                        quickbars_insert_toolbar: '',   // テキストエリアクリック時に表示するツール
                        noneditable_class: 'mceNonEditable',
                        toolbar_mode: 'sliding',
                        contextmenu: 'link image table',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                        branding: false,
                    }}
                    onEditorChange={handleEditorChange}
                />
                <div className='w-full text-center'>
                    <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mt-5" onClick={postCard}>
                        新規作成
                    </button>
                </div>
            </form>
            <Dialog title='新規作成メール送信完了'>内容を管理者にメールにて伝えました。承認されると反映されます。</Dialog>
        </div>
    )
}