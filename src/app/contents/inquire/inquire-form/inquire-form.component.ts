import {Component, OnInit} from '@angular/core';
import {Code} from '../../../domain/vo/code';
import {InquireService} from '../../../service/inquire.service';
import {Inquire} from '../../../domain/entity/Inquire';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalConstants} from '../../../domain/vo/global-constants';
import {Utils} from '../../../shared/utils/utils';
import {ConfirmService} from '../../../shared/component/confirm/confirm.service';
import {FileService} from '../../../service/file.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {Observable} from "rxjs";

@Component({
    selector: 'app-inquire-form',
    templateUrl: './inquire-form.component.html',
    styleUrls: ['./inquire-form.component.scss']
})
export class InquireFormComponent implements OnInit {

    vo: Inquire = new Inquire();
    file;
    fileName;
    isLogin = false;
    paramData;
    seq;


    constructor(
        private confirm: ConfirmService,
        private inquireService: InquireService,
        private fb: FormBuilder,
        private fileService: FileService,
        private spinner: NgxSpinnerService,
        private router: Router,
    ) {
        this.paramData =this.router.getCurrentNavigation().extras.state;
    }


    InquireType: Code[];
    inquireForm: FormGroup;
    Constants = GlobalConstants;

    ngOnInit(): void {
        this.getInquireType();

        if(this.paramData){
            this.seq = this.paramData.seq;
        }

        if(this.seq){
            this.getDetail()
        }

        if (sessionStorage.getItem('accesstoken')) {
            this.isLogin = true;
        }

        this.inquireForm = this.fb.group(
            {
                name: new FormControl('', [
                    Validators.required
                ]),
                email: new FormControl('', [
                    Validators.required,
                    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
                ]),
                phoneNumber: new FormControl('', [
                    Validators.required,
                    Validators.pattern(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)

                ]),
                inquiryTypeCode: new FormControl('', [Validators.required]),
                title: new FormControl('', [Validators.required]),
                contents: new FormControl('', [Validators.required]),
                fileName: new FormControl('', []),
            }, {
                validator: []
            }
        );

        if(this.isLogin){
            this.inquireForm.get('name').clearValidators();
            this.inquireForm.get('email').clearValidators();
            this.inquireForm.get('phoneNumber').clearValidators();
        }

    }

    get name() {
        return this.inquireForm.get('name')!;
    }

    get email() {
        return this.inquireForm.get('email')!;
    }

    get phoneNumber() {
        return this.inquireForm.get('phoneNumber')!;
    }

    get inquiryTypeCode() {
        return this.inquireForm.get('inquiryTypeCode')!;
    }

    get title() {
        return this.inquireForm.get('title')!;
    }

    get contents() {
        return this.inquireForm.get('contents')!;
    }

    getInquireType() {
        this.inquireService.getCodes().subscribe(r => {
            this.InquireType = r;
            console.log(this.InquireType);
        });
    }

    saveConfirm() {
        this.vo.phoneNumber = Utils.unmask(this.vo.phoneNumber, 'telephone').toString();
        let msg = '1:1문의를 접수하시겠습니까?';
        if(this.seq){
            msg = '1:1문의를 수정하시겠습니까?';
        }
        this.confirm.confirm(msg).afterClosed().subscribe(async result => {
            if (result == 'Y') {

                if (this.file) {
                    const image_upload = await this.fileUpload();
                    console.log(image_upload);
                    this.vo.fileSeq = await image_upload;
                }

                if(this.seq){
                    this.modifyForMember();
                }else{
                    if(this.isLogin){
                        this.addMemberInquire();
                    }else{
                        this.addNoMemberInquire();
                    }
                }

            }
        });
    }

    addNoMemberInquire() {
        this.inquireService.addNoMember(this.vo).subscribe(r => {
            console.log(r);
            this.spinner.hide('main');
            this.saveAlert();
        }, error=>{
            this.confirm.alert(error.message);
            this.spinner.hide('main');
        });
    }

    addMemberInquire() {
        this.inquireService.addMember(this.vo).subscribe(r => {
            console.log(r);
            this.spinner.hide('main');
            this.saveAlert();
        }, error=>{
            this.confirm.alert(error.message);
            this.spinner.hide('main');
        });
    }

    modifyForMember(){
        this.inquireService.modifyForMember(this.vo).subscribe(r=>{
            this.spinner.hide('main');
            this.saveAlert();
        }, error=>{
            this.confirm.alert(error.message);
            this.spinner.hide('main');
        })
    }

    fileChange(files: FileList) {
        this.file = files[0];
        if (this.file == null) {
            this.fileName = '';
            return;
        }

        this.fileName = this.file.name;
        if (this.file.size > 20 * 1024 * 1024) {
            this.confirm.alert('20MB를 초과할 수 없습니다.').afterClosed().subscribe(() => {
                this.file = null;
            });
        }
    }

    fileUpload(): Promise<any> {
        let formData = new FormData();
        formData.append('file', this.file);

        let ob: Observable<any>;
        if(this.isLogin){
          ob = this.fileService.uploadSingleImageFile(formData)
        }else{
          ob = this.fileService.uploadSingleImageFileNoToken(formData)
        }

        this.spinner.show('main')
        return new Promise((resolve, reject) => {
          ob.subscribe(async res => {
                console.log(res);
                return resolve(res.fileSeq);
            }, err => {
                this.confirm.alert('파일업로드 오류');
                this.spinner.hide('main');
                reject(err);
            });
        });
    }

    private saveAlert() {
        this.spinner.hide('main');
        this.confirm.alert('등록되었습니다.').afterClosed().subscribe(() => {
            if(this.isLogin){
                this.router.navigate(['/mypage/inquire-list']);
            }else{
                this.router.navigate(['/']);
            }

        });
    }

    getDetail(){
        this.inquireService.getDetailMember(this.seq).subscribe(r=>{
            this.vo = r;
            if(this.vo.imageList[0].name){
                this.fileName = this.vo.imageList[0].name;
            }
        })
    }
}
