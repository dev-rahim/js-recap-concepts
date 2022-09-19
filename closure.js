// const bank = owner => {
//     balance = 0;
//     return diposit = ammount => {
//         return balance += ammount;
//     }
// }
// const rahimBank = bank('mofiz');
// console.log(rahimBank(500));
// console.log(rahimBank(500));
// console.log(rahimBank(500));
// console.log(rahimBank.balance);
// console.log(rahimBank(500));

const bank2 = owner => {
    balance = 0;
    return {
        diposit: ammount => {
            return balance += ammount;
        },
        withdrow: ammount => {
            return balance -= ammount;
        }
    }
}
const rahimBank = bank2('Rahim');
console.log(rahimBank.diposit(1000));
console.log(rahimBank.withdrow(500));