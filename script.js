let input1=document.querySelector(".input-field1")
let input2=document.querySelector(".input-field2")
let input3=document.querySelector("#input-field3")
let vrijednos
let p1=document.querySelector(".cijena1")
let p2=document.querySelector(".cijena2")
let gumbi=document.querySelectorAll(".gumb")
let reset=document.getElementById("reset-btn")
let broj=0
let placanje=0;
let tip
let tipPoOsovi
let placanjePoOsobi
input1.value="0"
input2.value="0"
input3.value="Custom"

gumbi.forEach(summary2 => {
    summary2.addEventListener("click", event => {
        vrijednos=summary2.innerHTML;
        if(vrijednos==="5%"){
            broj=1.05
        }
        if(vrijednos==="10%"){
            broj=1.10
        }
        if(vrijednos==="15%"){
            broj=1.15
        }
        if(vrijednos==="25%"){
            broj=1.25
        }
        if(vrijednos==="50%"){
            broj=1.50
        }
        placanje=(input1.value)*broj
        tip=placanje-input1.value
        tipPoOsovi=tip/input2.value
        tipPoOsovi=Math.round(tipPoOsovi * 100) / 100
        placanjePoOsobi=placanje/input2.value
        placanjePoOsobi=Math.round(placanjePoOsobi * 100) / 100
        p1.innerHTML="$"+ tipPoOsovi
        p2.innerHTML="$"+ placanjePoOsobi
    })
  })

reset.addEventListener("click",function(){
    p1.innerHTML="$0"
    p2.innerHTML="$0"
})