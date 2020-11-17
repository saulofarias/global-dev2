import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderService} from 'src/app/shared/services/json-placeholder.service';
import {Album} from '../albuns/album';

@Component({
  selector: 'alb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
  }


}
