import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-bolletta',
  templateUrl: './bolletta.component.html',
  styleUrls: ['./bolletta.component.css']
})
export class BollettaComponent {
  public isProsumer : boolean = true;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.isProsumer = this.userService.getUser().prosumer
  }
}
