import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SendButtonAnimations } from './send-button.animations';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: SendButtonAnimations,
})
export class SendButtonComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ---------


  // --------------- LOCAL UI STATE ----------------------


  constructor() { }

  ngOnInit(): void {
  }

  // --------------- DATA BINDING FUNCTIONS ----------------


  // --------------- EVENT BINDING FUNCTIONS ---------------


  // --------------- OTHER -------------------------------
}
