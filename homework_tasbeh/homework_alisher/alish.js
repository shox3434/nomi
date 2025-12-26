let umumiy_harajat = 870
let kiritilgan_pul = +prompt("Bisotingizni kiriting: ")
let dollr_qilish = kiritilgan_pul / 11000

if (dollr_qilish >= umumiy_harajat){
    console.log(`oq yol yaxshi dam ob kelin sizi puliz ${Math.round(dollr_qilish)}$ ekan`)
}
else if (dollr_qilish < umumiy_harajat){
    console.log(`Jichcha aylanib turasiz. chunki puliz ${Math.round(dollr_qilish)} ekan`);
    
}