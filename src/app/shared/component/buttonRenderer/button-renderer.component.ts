import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
@Component({
    selector: 'app-button-renderer',
    template: `
    <a class="text-primary" style="cursor: pointer" (click)="onClick($event)">{{params.value}}</a>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

    params;
    label: string;

    agInit(params): void {
        console.log(params);
        this.params = params;
        this.label = this.params.label || null;
    }

    refresh(params?: any): boolean {
        return true;
    }

    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
            }
            this.params.onClick(params);

        }
    }
}