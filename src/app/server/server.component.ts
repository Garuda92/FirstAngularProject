import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    AllowNewServer = false;
    serverCreationStatus = 'No server was Created';
    ServerName ='Sanyika';
    serverID: number = 10;
    ServerStatus:string  = 'offline';
    serverCreated = false;

    constructor(){
        setTimeout(()=>{
            this.AllowNewServer = true;
        },2000);
    }
    getServerStatus(){
        return this.ServerStatus;
    }
    onCreateServer(){
        this.serverCreated = true;
      this.serverCreationStatus = 'Server was Created!';  
    }
    onUpdateServerName(event: Event){
        this.ServerName = (<HTMLInputElement>event.target).value;

    }

}