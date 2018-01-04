// Transaction.vue

<template>
  <div>
    <h1>Transactions from contracts</h1>
      <div class="col-md-12">
      <table class="table table-hover">
          <thead>
              <tr>
                  <td>Datetime</td>
                  <td>Contract Address</td>
                  <td>Qty</td>
                  <td>TxHash</td>
              </tr>
          </thead>

          <tbody>
             <tr v-for="transaction in transactions">
                      <td>{{ transaction.dateTime }}</td>
                      <td>{{ transaction.addres }}</td>
                      <td>{{ transaction.qty }}</td>
                      <td>{{ transaction.txhash }}</td>
                      
                  </tr>
              </tbody>
          </table>
    </div>    
  </div>
</template>

<script>
export default {
    data(){
        return{
          transactions:[]
        }
    },
    sockets:{
    transaction: function(transaction){
      this.transactions.unshift(transaction);
    }}
}
</script>