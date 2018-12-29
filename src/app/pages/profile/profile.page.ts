import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss', './profile.page.css'],
})
export class ProfilePage implements OnInit {
  helloService: any;
  isEdit: boolean = false;
  constructor(private profService: ProfileService, private router: Router) { }
  userProfile: any = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@email.com',
    pictureURL: '../../../../assets/images/wt.jpg',
    rating: 5,
    age: 24,
    gender: 'male',
    isActive: true,
    type: 'Customer',
    address: [
      {
        id: 1,
        city: 'New York',
        state: 'United State',
        street: '125E00',
        zip: 58065
      }
    ]
  }

  ngOnInit() {
    this.helloService = this.profService.helloService();

  }

  onEditProfile() {
    this.isEdit = true;
  }
  onUpdateProfile() {

  }
  onCancelEdit() {
    this.isEdit = false;

  }



}
