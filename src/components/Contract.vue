// Contract.vue

<template>
  <div>
    <div class="col-md-12">
      <h1>Add a contract</h1>
      <form  v-on:submit="addContract" action="#">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Contract address:</label>
              <input type="text" class="form-control" required v-model="contract.address">
            </div>
          </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Add Contract</button>
          </div>
      </form>
    </div>
    <div class="col-md-12">
      <table class="table table-hover">
          <thead>
              <tr>
                  <td>Addres</td>
                  <td>Date added</td>
              </tr>
          </thead>

          <tbody>
             <tr v-for="contract in contracts">
                      <td>{{ contract.address }}</td>
                      <td>{{ contract.createdAt }}</td>
                      <td></td>
                      <td><button class="btn btn-danger" v-on:click="deleteContract(contract._id)">Delete</button></td>
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
          contract:{},
          contracts:[]
        }
    },
    created: function()
        {
            this.fetchContracts();
        },
    sockets:{
    connect: function(){
      console.log('socket connected')
    },
    contractAdded: function(val){
        this.contracts.push(val);
    },
   contractDeleted:function(id){
       this.contracts.splice(id,1);
    }},
    methods: {
      addContract(){
        console.log(process.env.BACKEND);
        let uri = process.env.BACKEND+'/contracts/add';
        this.axios.post(uri, this.contract).then((response) => {
          this.contract={};
        })
      }, fetchContracts()
      {
        let uri = process.env.BACKEND+'/contracts';
              this.axios.get(uri).then((response) => {
                  this.contracts = response.data;
              });
      },
        deleteContract(id)
      {
              let uri = process.env.BACKEND+'/contracts/delete/'+id;
              this.axios.get(uri);
      }
}
}
</script>