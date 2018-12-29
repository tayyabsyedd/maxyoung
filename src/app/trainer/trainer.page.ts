import { Component, OnInit, OnChanges } from '@angular/core';

import { Router } from '@angular/router';
import { trainerService } from '../shared/trainer.service';
import { LoadingController } from '@ionic/angular';
import { zip } from 'rxjs/operators';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss'],
})
export class TrainerPage implements OnInit {
  trainderId: any;
  selectedTrainer: any;
  // fullName: any; email: string; address: string; age: number; gender: string; pictureURL: string; startDate: string;
  // skills: [
  //   {
  //     name: string,
  //     detail: string,
  //     certification: string,
  //     level: number,
  //     type: string,
  //     subtype: string
  //   }
  // ];
  constructor(private trainerService: trainerService, private router: Router, public loadingController: LoadingController) { }


  ngOnInit() {

    this.getTrainer();
    this.trainderId = this.trainerService.getTrainerID();

    console.log(this.trainerService.getSelectedTrainer());
    // this.fullName = this.selectedTrainer.firstName + " " + this.selectedTrainer.lastName;
    // this.email = this.selectedTrainer.email;
    // this.address = this.selectedTrainer.address[0].state + ", " + this.selectedTrainer.address[0].city + ", " + this.selectedTrainer.address[0].street + ", " + this.selectedTrainer.address[0].zip;
    // this.gender = this.selectedTrainer.gender;
    // this.pictureURL = this.selectedTrainer.pictureURL;
    // this.skills[0].name = this.selectedTrainer.skills[0].name;
    // this.skills[0].detail = this.selectedTrainer.skills[0].detail;
    // this.skills[0].certification = this.selectedTrainer.skills[0].certification;
    // this.skills[0].level = this.selectedTrainer.skills[0].level;
    // this.startDate = this.selectedTrainer.startDate;
    // this.age = this.selectedTrainer.age;

  }
  async getTrainer() {
    const loading = await this.loadingController.create({
      message: 'Loading Trainer...',
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    await loading.present();
    await this.trainerService.getTrainerByID(this.trainderId)
      .subscribe(res => {
        this.selectedTrainer = res;
        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }









  goBack() {
    this.router.navigateByUrl('tabs/tab1');
  }
  onBookClient() {
    this.router.navigateByUrl('book-client');
  }



}
