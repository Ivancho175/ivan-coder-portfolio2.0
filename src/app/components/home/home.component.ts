import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/@core/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: any = {};

  constructor(private coreService: CoreService) {
    this.data = coreService.getData();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
