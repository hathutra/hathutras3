let item=['t-shirt',"sweater"]
let chon=prompt('Nhập C/R/U/D').toLowerCase();
if(chon=="r"){
    item.forEach((v,i)=>{
    console.log(`${i+1}.${v}`)})
}else if(chon=="c"){
    let them=prompt("ban muon them item nào vào ?")
    item.push(them)
    item.forEach((v,i)=>{
        console.log(`${i+1}.${v}`)})
}else if(chon=="u"){
    let thay=prompt("bạn muốn update bằng index hay value?")
    if(thay=="i"){
        let iU=Number(prompt("nhập index đi bạn ơi!"))
        if(iU<0 || iU>item.length){
            alert("không tồn tại item này!")
        }else{
            let noidung=prompt('nhap vao noi dung ban  muon update')
            item[iU-1]=noidung
            item.forEach((v,i)=>{console.log(`${i+1}.${v}`)
            })
        }
    }else if(thay=="v"){
        let vU=prompt("bạn muốn thay item nào?")
        if(item.includes(vU)){
            let iV=item.indexOf(vU)
            let ten=prompt('ten tiem ma ban muon thay')
            item[iV]=ten
            item.forEach((v,i)=>{console.log(`${i+1}.${v}`)
        })

        }
    }else{
        alert('lỗi')
    }

}else if(chon=="d"){
    let xoa=prompt('bạn muốn xóa theo index hay value?')
    if(xoa=="i"){
        iD=Number(prompt("nhap index bạn muốn xóa"))
        if(iD<0 || iD>item.length){
            alert("không tồn tại item này!")
        }else{
           item.splice(iD-1,1)
           item.forEach((v,i)=>{console.log(`${i+1}.${v}`)
        })

    } 
     } else if(xoa=="v"){
        let vD=prompt('item mà bạn muốn xóa')
        if(item.includes(vD)){
            let iV=item.indexOf(vD)
            item.splice(iV,1)
            item.forEach((v,i)=>{console.log(`${i+1}.${v}`)
        })
        }else{
            alert('lỗi ')
        }
    }
}
