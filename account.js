module.exports = function account() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (parseInt(customerAccount.checking) === 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
    deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount
  debugger
  openAccount(customerAccount, deposit)
  //debugger
  setAccountType()
  //debugger
  output['Account after opening'] = customerAccount
  //debugger
  console.log(output)
  return output
}

//account()
