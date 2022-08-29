import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialogelement.html',
  })
  export class DialogElementsExampleDialog {
    constructor(public dialogRef:MatDialogRef<DialogElementsExampleDialog>)
    {

    }

    closedialog()
    {
        this.dialogRef.close();
    }
  }