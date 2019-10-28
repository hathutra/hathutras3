let cuu=[5,7,300,90,24,50,75]
console.log(`hello,my name is Tra and these are my ship sizes\n ${cuu}`)
let nangnhat=Math.max.apply(Math,cuu);
console.log(`Now my biggest sheep let size ${nangnhat} let shear it! `)
let index=cuu.indexOf(nangnhat)
let macdinh=8
cuu[index]=macdinh
console.log(`After shearing,here is my flock:${cuu} `)
let plus=50
for(let i=0;i<cuu.length;i++){
    cuu[i]=plus+cuu[i]
}
console.log(`One month has passed,now here is my flock:${cuu}`)

