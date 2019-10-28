let cuu=[5,7,300,90,24,50,75]
console.log(`hello,my name is Tra and these are my ship sizes\n ${cuu}`)
for(let i=0;i<3;i++){
    let nangnhat=Math.max.apply(Math,cuu);
    console.log(`Now my biggest sheep let size ${nangnhat} let shear it! `)
    let index=cuu.indexOf(nangnhat)
    let macdinh=8
    cuu[index]=macdinh
console.log(`After shearing,here is my flock:${cuu} `)
for(let j=0;j<cuu.length;j++){
    cuu[j]=cuu[j]+50
    
}
console.log(`Month ${i+1} \n one month started,now here is my flock \n ${cuu}`)

}
let money=0
for(let i=0;i<cuu.length;i++){
    money=money+cuu[i]
}
console.log(`my flock has size in total:${money}\n I wold get money: ${money}*2$=${money*2}$`)