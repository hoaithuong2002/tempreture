 function tempreture(c) {
    this.c =c;
    this.getFa = function () {
         let Fa = (1.8* this.c  )   + 32 ;
        return Fa ;
    }
     this.getKevin = function () {
         let Kevin = (this.c  +273.15) ;
        return Kevin ;
    }
}
let tempreture1 = new tempreture(37);
let Fa = tempreture1.getFa();
let Kevin = tempreture1.getKevin();
alert('do F: '+Fa+'do K: '+Kevin);