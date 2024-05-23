import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  messageForm: FormGroup;

  constructor(private formBuilder:FormBuilder, 
              private messageService : MessageService,
              private snackbar : MatSnackBar
             ){

    this.messageForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\+91)?[6-9]\d{9}$/)]],
      message: ['', Validators.required]
    });
  }

  sendTextMsg(){
    if(this.messageForm.valid){
      let phoneNumber = this.messageForm.get('phoneNumber')?.value;
      const message = this.messageForm.get('message')?.value;

      // if a user does not provide country code then append it
      if(phoneNumber[0] != '+'){
        phoneNumber = '+91'+phoneNumber;
      }

      this.messageService.sendTextMessage(phoneNumber, message).subscribe(res =>{

       this.snackbar.open('text message delivered successfully','',{
        duration: 10000,
      });
        console.log('text message delivered successfully',res);
      }, err=>{
        this.snackbar.open('text message failed to deliver','',{
          duration: 3000,
        });
        console.log('error->',err);
      });
    }
  }

  sendWhatsAppMsg(){
    if(this.messageForm.valid){
      let phoneNumber = this.messageForm.get('phoneNumber')?.value;
      const message = this.messageForm.get('message')?.value;


      // if a user does not provide country code then append it
      if(phoneNumber[0] != '+'){
        phoneNumber = '+91'+phoneNumber;
      }

      this.messageService.sendWhatsAppMessage(phoneNumber, message).subscribe(res =>{
        this.snackbar.open('whatsapp message delivered successfully','',{
          duration: 10000,
        });
      }, err=>{
        this.snackbar.open('Whatsapp message failed to deliver','',{
          duration: 3000,
        });
        console.log('error->',err);
      });
    }
  }

  sendPersonalisedWhatsAppMsg(){
    if(this.messageForm.valid){
      let phoneNumber = this.messageForm.get('phoneNumber')?.value;
      const message = this.messageForm.get('message')?.value;


      // if a user does not provide country code then append it
      if(phoneNumber[0] != '+'){
        phoneNumber = '91'+phoneNumber;
      }
      else if(phoneNumber[0] == '+'){
        phoneNumber = phoneNumber.substring(1);
      }

      this.messageService.sendPersonalisedWhatsAppMsg(phoneNumber, message).subscribe(res =>{
        this.snackbar.open('whatsapp message delivered successfully','',{
          duration: 10000,
        });
      }, err=>{
        this.snackbar.open('Whatsapp message failed to deliver','',{
          duration: 3000,
        });
        console.log('error->',err);
      });
    }
  }

}
