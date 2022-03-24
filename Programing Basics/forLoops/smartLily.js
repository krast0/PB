function smartLily(input) {
    let lilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let priceForOneToy = Number(input[2]);
    let money = 0;
    let allMoney = 0;
    let toys = 0;
    let toysMoney = 0;
    let leftMoney = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if ([i] % 2 === 0) {
            money += 10;
            allMoney += money;
            allMoney -= 1;
        }
    }
    for (let i = 1; i <= lilyAge; i++) {
        if ([i] % 2 === 1) {
            toys += 1;
        }
    }
    toysMoney = toys * priceForOneToy;

    let sum = allMoney + toysMoney ;

    
    if (sum >= washingMachinePrice) {
        leftMoney = sum - washingMachinePrice;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    }else if (washingMachinePrice >= sum) {
        leftMoney = washingMachinePrice - sum;
        console.log(`No! ${leftMoney.toFixed(2)}`);
    }
}
smartLily(["26","1000","10"]);
