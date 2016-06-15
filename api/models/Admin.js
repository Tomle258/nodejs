
module.exports = {
   autoCreatedAt:false,
   autoUpdatedAt:false,
	attributes:{
      name:{
         type:'string'
      },
      password:{
         type:'string',
         required:true
      },
      email:{
         type:'string',
         required:true,
      },
      toJSON: function() {
         var obj = this.toObject();
         delete obj.password;
         return obj;
       }
   }
};