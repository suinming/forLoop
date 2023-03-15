
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let result = []
    for(const item of array){
        let calBalance 
        let calDeposit = 0
        let calWithdraw= 0
        if(item.deposits){
            for(const num of item.deposits){
                calDeposit += num
            }
        }
        if(item.withdrawals){
            for(const num of item.withdrawals){
                calWithdraw += num
            }
        }
        calBalance = calDeposit - calWithdraw 
        if(item.balance !== calBalance){
            result.push(item)
        }
    }
    return result
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
