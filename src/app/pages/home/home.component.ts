import { Component, OnInit, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { PagesService } from '../pages.service';
import { ITooltip } from '../../../api/tooltip';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDarkTheme: boolean = false;
  lastDialogResult: string;

  _tooltips: ITooltip[];
  _tooltip: ITooltip;
  errorMessage: string;

  cars: any[] = [
    { name: "Audi", rating: "Excellent" },
    { name: "BMW", rating: "Great" },
    { name: "Jaguar", rating: "Pretty good" },
  ];

  progress: number = 0;

  constructor(
    private _pagesService: PagesService,
    private _dialog: MdDialog,
    private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open("Some random text message...", "CLOSE");
  }

  ngOnInit() {
    // Get The List of Tooltips
    this._pagesService.getTooltips()
      .subscribe(
      tooltips => this._tooltips = tooltips,
      error => this.errorMessage = <any>error);
  }

}

@Component({
  template: `
    <p>
      <button md-button (click)="dialogRef.close()" class="close-btn">
        <md-icon color="primary">close</md-icon>
      </button>
    </p>
    <p>Fusce at maximus felis. Sed eu augue orci. Nullam dapibus sapien ante, id varius neque fringilla vitae. Quisque ac est risus. Nunc eu dolor lorem. Fusce congue ipsum nec lectus congue, vitae condimentum elit dignissim. Sed consectetur condimentum lectus, ut dictum massa efficitur eget. Etiam mollis dui id lacus feugiat auctor. Fusce neque neque, consectetur id suscipit eu, dapibus id nibh. Sed eget purus at odio scelerisque fermentum a non urna. Aliquam at efficitur ante, at lacinia quam. Aliquam erat volutpat. Suspendisse sodales hendrerit purus, non finibus sapien eleifend sit amet. Nullam sagittis feugiat laoreet. Praesent nisi dui, vehicula quis diam vitae, hendrerit euismod ipsum. Morbi eget ultrices elit, imperdiet cursus turpis.</p>
  `,
})
export class DialogContent {
  constructor( @Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}