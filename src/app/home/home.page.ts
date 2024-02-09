import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { DocumentSnapshot, doc, getDoc, setDoc } from 'firebase/firestore'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estadoled1 : boolean=false;
  estadoled2 : boolean=false;
  estadoled3 : boolean=false;
  estadoleds : boolean=false;


  rutaTabla: any;

  constructor(private db:Firestore) {
  }

  ngOnInit(){
    this.PersistanceData();
    this.PersistanceData2();
    this.PersistanceData3();
    this.PersistanceData4();
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
async encendertodas() {
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  this.estadoled1=true;
  await setDoc(this.rutaTabla, { encender:this.estadoled1});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  this.estadoled2=true;
  await setDoc(this.rutaTabla, { encender2:this.estadoled2});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  this.estadoled3=true;
  await setDoc(this.rutaTabla, { encender3:this.estadoled3});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.estadoleds=true;

}
async apagartodas() {
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  this.estadoled1=false;
  await setDoc(this.rutaTabla, { encender:this.estadoled1});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  this.estadoled2=false;
  await setDoc(this.rutaTabla, { encender2:this.estadoled2});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  this.estadoled3=false;
  await setDoc(this.rutaTabla, { encender3:this.estadoled3});//CAMBIA EL ATRIBUTO DE LA TABLA
  this.estadoleds=false;
}

getColor(state:boolean){
  if(state){
    return "success";
  }else{
    return "danger"
  }
}


async PersistanceData(){
  const docref= doc(this.db,"controlLED", 'LED1');
  const snap :DocumentSnapshot<any> = await getDoc(docref)
  if(snap.exists()){
    const estadotp1=snap.data()?.encender;
    if(estadotp1==true){
      this.estadoled1=true;
    }else{
      this.estadoled1=false;
    }
  }
}
async PersistanceData2(){
  const docref= doc(this.db,"controlLED", 'LED2');
  const snap :DocumentSnapshot<any> = await getDoc(docref)
  if(snap.exists()){
    const estadotp2=snap.data()?.encender2;
    if(estadotp2==true){
      this.estadoled2=true;
    }else{
      this.estadoled2=false;
    }
  }
}
async PersistanceData3(){
  const docref= doc(this.db,"controlLED", 'LED3');
  const snap :DocumentSnapshot<any> = await getDoc(docref)
  if(snap.exists()){
    const estadotp3=snap.data()?.encender3;
    if(estadotp3==true){
      this.estadoled3=true;
    }else{
      this.estadoled3=false;
    }
  }
}
async PersistanceData4(){
  const docref= doc(this.db,"controlLED", 'LED1', );
  const snap :DocumentSnapshot<any> = await getDoc(docref)
  const docref2= doc(this.db,"controlLED", 'LED2', );
  const snap2 :DocumentSnapshot<any> = await getDoc(docref)
  const docref3= doc(this.db,"controlLED", 'LED3', );
  const snap3 :DocumentSnapshot<any> = await getDoc(docref)
  if(snap.exists() && snap2.exists() && snap3.exists()){
    const estadotp1=snap.data()?.encender;
    const estadotp2=snap.data()?.encender2;
    const estadotp3=snap.data()?.encender3;
    if(estadotp1==true && estadotp2==true && estadotp3==true ){
      this.estadoleds=true;
    }else{
      this.estadoleds=false;
    }
  }
}



}
