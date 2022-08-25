import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  header="Welcome to our bank!!"
  accPlcaeholder="Account Number Please"

  acno=""
  pswd=""

  //property or variable
  database:any={
    1000:{acno:1000,username:'Benson',password:1000,balance:50000},
    1001:{acno:1001,username:'Nibin',password:1001,balance:60000},
    1002:{acno:1002,username:'Neer',password:1002,balance:55000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  //user defined fun
  acnoChange(event:any){
    this.acno=event.target.value
    //console.log(event.target.value);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    // console.log(this.pswd)
  }

  login(){
    var acno=this.acno
    var pswd=this.pswd

    let userDetails=this.database
    if(acno in userDetails)
    {
      if(pswd==userDetails[acno].password){
        alert('Login Successful')

      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User doesnot exist')
    }
    

    //alert('login clicked')
  }

}
