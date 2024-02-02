import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estadoled1 : boolean=false;
  estadoled2 : boolean=false;
  estadoled3 : boolean=false;


  rutaTabla: any;

  constructor(private db:Firestore) {
    this.PersistanceData();
  }

  //HOME.PAGE.TS
async encender(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  this.estadoled1=true;
  await setDoc(this.rutaTabla, { encender:this.estadoled1});//CAMBIA EL ATRIBUTO DE LA TABLA
}
async apagar(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  this.estadoled1=false;
  await setDoc(this.rutaTabla, { encender:this.estadoled1 });//CAMBIA EL ATRIBUTO DE LA TABLA
}
async encender2(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  this.estadoled2=true;
  await setDoc(this.rutaTabla, { encender2:this.estadoled2});//CAMBIA EL ATRIBUTO DE LA TABLA
}
async apagar2(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  this.estadoled2=false;
  await setDoc(this.rutaTabla, { encender2:this.estadoled2 });//CAMBIA EL ATRIBUTO DE LA TABLA
}
async encender3(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  this.estadoled3=true;
  await setDoc(this.rutaTabla, { encender3:this.estadoled3});//CAMBIA EL ATRIBUTO DE LA TABLA
}
async apagar3(led:string) {
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  this.estadoled3=false;
  await setDoc(this.rutaTabla, { encender3:this.estadoled3 });//CAMBIA EL ATRIBUTO DE LA TABLA
}
async encendertodas(led:string) {
  this.encender,
  this.encender2,
  this.encender3
}
async apagartodas(led:string) {
  this.apagar,
  this.apagar2,
  this.apagar3
}

getColor(state:boolean){
  if(state){
    return "success";
  }else{
    return "danger"
  }
}

async PersistanceData(){
  const docref= doc(this.db,"controlLED", 'LED1','LED2','LED3');
  const snap = await getDoc(docref);
  if(snap.exists()){
    this.estadoled1=snap.data()['encender'];
  }
}

}
