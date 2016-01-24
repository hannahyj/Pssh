var request = {
  client_id: "56a421e17119b3e14ad4a1dc",
  secret: "5f6022fc4eb5bb3da4482814f1cb5f",
  username: "plaid_test",
  password: "plaid_good",
  type: "wells"
};

function createFutureBalanceObject(balance, subtotal) {
  var table = $('<table></table>').addClass('summary-box bordered');
  var initialBalance = $('<tr></tr>').append(
    "<td>Initial Balance: </td><td class='amount'>$" + balance + "</td>"
  );
  initialBalance.addClass()
  table.append(initialBalance);

  var newBalance = balance - subtotal;
  var afterBalance = $('<tr></tr>').append(
    "<td>End Balance: </td><td class='amount special-amount-color'>$"
    + newBalance +"</td>"
  );
  table.append(afterBalance);
  return table;
}

$.post("https://tartan.plaid.com/connect", request, function( data ) {
    // change DOM of current page
    var balance = data["accounts"][0]["balance"]["available"];
    console.log("test1");
    var subtotal = $(".sc-subtotal").children('p').find(
      '.a-size-medium .a-color-price .sc-price'
    ).text();
    var balanceObject = createFutureBalanceObject(balance, subtotal.replace(/[$]+/g,""));
    var subtotalDom = $(".sc-subtotal").append(balanceObject);

  })
  .fail(function() {
    alert("error");
});
