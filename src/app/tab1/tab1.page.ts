import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {
  trainers: any;
  trainerId: string;

  constructor(private trainerService: trainerService, private router: Router, public loadingController: LoadingController) { }


  ngOnInit() {
    this.getAllTrainers();
  }

  loadTrainer(id: any) {
    this.trainerService.setTrainerID(id);
    this.router.navigateByUrl('/trainer');
  }


  //getAllTrainers
  async getAllTrainers() {
    const loading = await this.loadingController.create({
      message: 'Finding Trainers in your Area',
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    await loading.present();
    await this.trainerService.getAllTrainers()
      .subscribe(res => {
        console.log(res);
        this.trainers = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }







}
