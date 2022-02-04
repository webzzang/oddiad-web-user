import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmService} from '../../../shared/component/confirm/confirm.service';
import {GlobalConstants} from '../../../domain/vo/global-constants';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Partnership} from '../../../domain/entity/partnership';
import {TermFormComponent} from '../../account/term-form/term-form.component';
import {PartnershipService} from '../../../service/partnership.service';
import {Code} from '../../../domain/vo/code';
import {Utils} from '../../../shared/utils/utils';
import {TermsService} from "../../../service/terms.service";


@Component({
    selector: 'app-partnership-form',
    templateUrl: './partnership-form.component.html',
    styleUrls: ['./partnership-form.component.scss']
})
export class PartnershipFormComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private confirm: ConfirmService,
        private dialogRef: MatDialogRef<PartnershipFormComponent>,
        public dialog: MatDialog,
        private partnershipService: PartnershipService,
        private termService: TermsService
    ) {
    }

    form: FormGroup;
    Constants = GlobalConstants;
    vo: Partnership = new Partnership();
    sectorsList = [];
    businessCode : Code[];

    ngOnInit(): void {
        this.vo.business="";
        this.getBusinessCodes();
        this.form = this.fb.group(
            {
                name: new FormControl('', [
                    Validators.required
                ]),
                phoneNumber: new FormControl('', [
                    Validators.required,
                    Validators.minLength(11)
                ]),
                contents: new FormControl('', [
                    Validators.maxLength(50)
                ]),
                location: new FormControl('', [
                ]),
                business: new FormControl('', [
                ]),
                terms: new FormControl('', [
                    Validators.required,

                ]),
                terms2: new FormControl('', [
                    Validators.required
                ])
            }, {
                validator: []
            }
        );
    }

    closeDialog() {
        this.dialogRef.close(false);
    }

    // 문의사항 접수
    add() {
        console.log(this.vo);
        if (!Utils.autoMobileTelNumber(this.vo.phoneNumber)) {
            this.confirm.alert("휴대전화번호가 잘못 되었습니다. 확인바랍니다.");
            return;
        }

        this.vo.phoneNumber = Utils.unmask(this.vo.phoneNumber,'telephone').toString();

        this.partnershipService.add(this.vo).subscribe(r=>{
            this.confirm.alert("신청 완료 되었습니다.");
            this.dialogRef.close(false);

        }, err => {
            this.confirm.alert(err);
        })
    }

    // 약관팝업오픈
    openTermDialog(code) {
        let seq;
        this.termService.getTermsList(0).subscribe(r=>{
            r.filter(value => {
                if(value.code == code){
                    console.log(value.code);
                    this.openDialog(value.seq);
                }
            });
        })
    }

    openDialog(seq){
        const dialog = this.dialog.open(TermFormComponent, {
            position: {},
            disableClose: true,
            data: {
                seq: seq,
                status:0
            }
        });

        dialog.afterClosed().subscribe(results => {
            if (results) {
            }
        }, err => {
            console.log('errror', err);
        });
    }

    getBusinessCodes() {
        this.partnershipService.getCodes().subscribe((r => {
            this.businessCode = r;
        }));
    }


}
