let fve = document.querySelector("#five_per")
let tnp = document.querySelector('#ten_per')
let fif = document.querySelector('#fif_per')
let twe = document.querySelector('#twe_per')
let fit = document.querySelector('#fitf_per')
let rst = document.querySelector('#reset')
let cst = document.querySelector('#custom')

fve.addEventListener('click',()=>{
    let inp = document.querySelector('#amt_mod').value
    
    
    let no_ple = document.querySelector('#no_person').value
   
    let mod = 5/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1)
   
})

tnp.addEventListener('click',()=>{
    let inp = document.querySelector('#amt_mod').value
    let mod = 10/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let no_ple = document.querySelector('#no_person').value
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1)
})

fif.addEventListener('click',()=>{
    let inp = document.querySelector('#amt_mod').value
    let mod = 15/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let no_ple = document.querySelector('#no_person').value
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1)
})

twe.addEventListener('click',()=>{
    let inp = document.querySelector('#amt_mod').value
    let mod = 20/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let no_ple = document.querySelector('#no_person').value
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1)
})

fit.addEventListener('click',()=>{
    let inp = document.querySelector('#amt_mod').value
    let mod = 50/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let no_ple = document.querySelector('#no_person').value
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1) 
})

rst.addEventListener('click',()=>{
    document.querySelector('#amt_mod').value = document.querySelector('#amt_mod').defaultValue
    document.querySelector('#no_person').value = document.querySelector('#no_person').defaultValue
    document.querySelector('#tip_amt').textContent = "$00.0"
    document.querySelector('#total_amt').textContent = "$00.0"
    document.querySelector('#custom').value =  document.querySelector('#custom').defaultValue
})
cst.addEventListener('focusout',()=>{
    let cst = document.querySelector('#custom').value
    let inp = document.querySelector('#amt_mod').value
    let mod = cst/100 * inp
    document.querySelector('#tip_amt').textContent = "$"+Math.floor(mod)
    let no_ple = document.querySelector('#no_person').value
    let mod1 = mod* no_ple
    document.querySelector('#total_amt').textContent = "$"+Math.floor(mod1) 
})

