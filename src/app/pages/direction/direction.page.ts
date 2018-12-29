import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../shared/services/direction.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  constructor(private directionService: DirectionService) { }

  ngOnInit() {
  }

}
