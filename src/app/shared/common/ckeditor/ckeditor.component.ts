import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Bold, Essentials, Italic, Mention, Paragraph, Undo, InlineEditor, Image, Table, ImageUpload, LinkImage, MediaEmbed,Clipboard, Underline, SourceEditing, Markdown, ClassicEditor, ImageResize, CodeBlock } from 'ckeditor5';
import { MyUploadAdapter } from "./uploadadapter";
import { UploadService } from "../../uploadfile/uploadfile.service";
@Component({
  selector: 'app-ckeditor',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    CKEditorModule
  ],
  templateUrl: './ckeditor.component.html',
  styleUrl: './ckeditor.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CkeditorComponent {
    @Input() Detail: any = 'Vui lòng nhập nội dung';
    @Output() contentChange = new EventEmitter<any>();
    constructor(private _UploadService: UploadService) { }
    public Editor = ClassicEditor;
    public config = {  
        // extraAllowedContent: 'iframe[*];',
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'blockQuote',
          'undo',
          'redo',
           'insertImage',
           'Image',
           'mediaEmbed',
          //  'sourceEditing',
            ],
        plugins: [
           Bold, Essentials, Italic,Underline, Mention, Paragraph, Undo, Image, 
           Table,MediaEmbed,LinkImage,ImageUpload,Clipboard,
           SourceEditing,ImageResize,CodeBlock
       ],
        // licenseKey: 'M2IzZUd3ZDJhTGZhZDN4ejJaSnBTa2k5UlpWVURway9KQStTNCtuZSsvQWtMakpzelIzMzBMQVBHMndka3c9PS1NakF5TkRFeE1UTT0=',
        // mention: {
        //     Mention configuration
        // }
    }
    
    onReady(editor: any) {
       // console.log(editor);
        editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
          const result =  new MyUploadAdapter(loader,'local', this._UploadService);
          console.log(result);
          return result;
        };
      }
    onChange(event: any) {
       this.contentChange.emit(event.editor.getData());
        // editor.model.document.on('change:data', () => {
        //     this.contentChange.emit(editor.getData());
        // });
    }
}
