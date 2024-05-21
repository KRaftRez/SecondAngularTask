import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbRatingModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Second-Angular';

ratingcount=0;
totalrating=0;

FinalRating:any;
bookauthor="George R.R Martin";
newauthor!: string;
bookdesc="House of the Dragon: A gripping tale of power, betrayal, and dragons in a fantastical realm of intrigue";
newdesc!: string;
bookname="House of the Dragon";
newbookname!: string;
onSubmit() {
  this.bookname=this.newbookname;
}
onSubmitDesc() {
  this.bookdesc=this.newdesc;
}
onSubmitAuthor() {
  this.bookauthor=this.newauthor;
}

  ratingcontrol= new FormControl(0);
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.ratingcontrol?.value || 0;
    console.log(this.ratingcontrol.value);
    this.FinalRating=(this.totalrating/this.ratingcount).toFixed(2);
  }

ratingcount1=0;
totalrating1=0;

FinalRating1:any;
bookauthor1="Erin Morgenstern";
newauthor1!: string;
bookdesc1=" A mysterious circus, a forbidden romance, and magical feats weave an enchanting tale of wonder and intrigue";
newdesc1!: string;
bookname1="Erin Morgenstern";
newbookname1!: string;
onSubmit1() {
  this.bookname1=this.newbookname1;
}
onSubmitDesc1() {
  this.bookdesc1=this.newdesc1;
}
onSubmitAuthor1() {
  this.bookauthor1=this.newauthor1;
}

  ratingcontrol1= new FormControl(0);
  GetRating1(){
    this.ratingcount1++;
    this.totalrating1 +=this.ratingcontrol1?.value || 0;
    this.FinalRating1=(this.totalrating1/this.ratingcount1).toFixed(2);
  }
ratingcount2=0;
totalrating2=0;

FinalRating2:any;
bookauthor2="Paulo Coelho";
newauthor2!: string;
bookdesc2="Santiago's journey across deserts and oases teaches profound lessons about following one's dreams and discovering life's treasures.";
newdesc2!: string;
bookname2="The Alchemist";
newbookname2!: string;
onSubmit2() {
  this.bookname2=this.newbookname2;
}
onSubmitDesc2() {
  this.bookdesc2=this.newdesc2;
}
onSubmitAuthor2() {
  this.bookauthor2=this.newauthor2;
}

  ratingcontrol2= new FormControl(0);
  GetRating2(){
    this.ratingcount2++;
    this.totalrating2 +=this.ratingcontrol2?.value || 0;

    this.FinalRating2=(this.totalrating2/this.ratingcount2).toFixed(2);
  }
  ratingcount3=0;
totalrating3=0;

FinalRating3:any;
bookauthor3="Gillian Flynn:";
newauthor3!: string;
bookdesc3="Nick's search for his missing wife, Amy, unveils dark secrets and twists in a thrilling psychological thriller.";
newdesc3!: string;
bookname3="Gone Girl";
newbookname3!: string;
onSubmit3() {
  this.bookname3=this.newbookname3;
}
onSubmitDesc3() {
  this.bookdesc3=this.newdesc3;
}
onSubmitAuthor3() {
  this.bookauthor3=this.newauthor3;
}

  ratingcontrol3= new FormControl(0);
  GetRating3(){
    this.ratingcount3++;
    this.totalrating3 +=this.ratingcontrol3?.value || 0;
 
    this.FinalRating3=(this.totalrating3/this.ratingcount3).toFixed(2);
  }
  ratingcount4=0;
totalrating4=0;

FinalRating4:any;
bookauthor4="Gone Girl";
newauthor4!: string;
bookdesc4="Nick's search for his missing wife, Amy, unveils dark secrets and twists in a thrilling psychological thriller.";
newdesc4!: string;
bookname4="The Great Gatsby";
newbookname4!: string;
onSubmit4() {
  this.bookname4=this.newbookname4;
}
onSubmitDesc4() {
  this.bookdesc4=this.newdesc4;
}
onSubmitAuthor4() {
  this.bookauthor4=this.newauthor4;
}

  ratingcontrol4= new FormControl(0);
  GetRating4(){
    this.ratingcount4++;
    this.totalrating4 +=this.ratingcontrol4?.value || 0;
 
    this.FinalRating4=(this.totalrating4/this.ratingcount4).toFixed(2);
  }
}
