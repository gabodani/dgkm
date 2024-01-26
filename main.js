// დავალება 1
let arr=['a','b','c'];
arr[3]="d";
arr[1]="x";
console.log(arr)
// დავალება 2
let array=[];
array.push(["a","b","c"]);
console.log(array)
// დავალება 3
let masivi=[1,2,3,4,5];
let key1=1;
let key2=2;
let mimateba=masivi[key1]+masivi[key2];
console.log(mimateba)
// დავალება 4
let saxelebi=['ხვიჩა','გოგა','მაკა','ანა','ინა',];
saxelebi.sort();
saxelebi.reverse();
console.log(saxelebi);
// დავალება 6
let fasebi=[10,20,8,19,];
let priceSum=function(fasebi){
    for(let i=0;i<fasebi.length;i++){
        console.log("i=",i,fasebi[i]);
    }
    let jami=fasebi[0]+fasebi[1]+fasebi[2]+fasebi[3];
    return jami
}
console.log(priceSum(fasebi));
// დავალება 11
let arr3 = [10.8, 7.227, 9, 17.34, 10.34, 3, 7.9, -8, 20, 100, 77,345.67];
let jjami=0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i]<0){
        break;
    }
    if(arr3[i]>=0){
        jjami=arr3[i]+jjami
    }
}
console.log(jjami)
// დავალება 12
let names = ['ხვიჩა',
 'გოგა', 
 'მაკა', 
 'ანა',
 'ინა', 
 'მაიკლი', 
 'ფანტომასი',
 'ბონდო',
 'ობამა',
 'მესი',
 'მარადონა'];       
 for(let  i=0;i<names.length;i++){
if(names[i]=="ფანტომასი"){
    console.log(i)
}
 }
// დავალება 14
let arr1 = [1, -77, 9, 17, -4, 3, 9, -8, 20];
let dadebiti=[];
for(let a=0;a<arr1.length;a++){
    if(arr1[a]>0){
        dadebiti.push(arr1[a]);
        console.log("a=",a,arr1[a]);
    }
}
console.log(dadebiti);