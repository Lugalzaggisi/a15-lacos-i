let coxinha = prompt(`quer mais uma coxinha? digite S para sim e N para não`).toUpperCase()
let conta= 0
while(coxinha === "S"){
    conta=conta+2.50
    coxinha = prompt(`quer mais uma coxinha? digite S para sim e N para não`).toUpperCase()
}
console.log(`a conta de um total de R$`, conta)