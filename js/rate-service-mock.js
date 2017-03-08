/**
 * Created by Hasani on 3/8/2017.
 */
let rates =[
    {
        "name":'Dalban',
        "rate":'13',
        "years":'30'
    },
    {
        "name":'Hasani',
        "rate":'2.6',
        "years":'24'
    },
    {
        "name":'Abdul',
        "rate":'5.6',
        "years":'19'
    }
];
 export let findAll = () => new Promise((resolve,reject) => {
   if(rates){
        resolve(rates);
   }else{
       reject('no rates');
   }
});



