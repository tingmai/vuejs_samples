const app=Vue.createApp({
    data(){
        return {
	        id:0,
          qty:0,

          tempCategory:'',
          orderList:[],
          indexList:[],
          total:0,
        
          category:[
            {id:1,name:"All Items"},
            {id:2,name:"Coffee"},
            {id:3,name:"Juice"},
            {id:4,name:"Soda"},
            {id:5,name:"Smoothie"},
           
          ],
          items:[
            {id:1,name:"Americano",price:3500,photo:"assets/images/americano.png",category:"Coffee",qty:1},
            {id:2,name:"Latte",price:3500,photo:"assets/images/latte.png",category:"Coffee",qty:1},
            {id:3,name:"Cappuccino",price:5000,photo:"assets/images/cappuccino.png",category:"Coffee",qty:1},
            {id:4,name:"Expresso",price:3500,photo:"/assets/images/expresso.png",category:"Coffee",qty:1},
            {id:5,name:"Orange",price:2500,photo:"assets/images/orangejuice.png",category:"Juice",qty:1},	
    	      {id:6,name:"Lime",price:2500,photo:"assets/images/limejuice.png",category:"Juice",qty:1},
            {id:7,name:"Strawberry",price:2500,photo:"assets/images/strawberry.png",category:"Juice",qty:1},
            {id:8,name:"Lime",price:2500,photo:"assets/images/limejuice.png",category:"Juice",qty:1},
            {id:9,name:"Apple",price:2500,photo:"assets/images/applejuice.png",category:"Juice",qty:1},
            {id:10,name:"Coke",price:1000,photo:"assets/images/coke.png",category:"Soda",qty:1},
            {id:11,name:"Sprite",price:1000,photo:"assets/images/sprite.png",category:"Soda",qty:1},
            {id:12,name:"Pepsi",price:1000,photo:"assets/images/pepsi.png",category:"Soda",qty:1},
            {id:13,name:"Green-Smoothie",price:3500,photo:"assets/images/greensmoothie.png",category:"Smoothie",qty:1},
            {id:14,name:"Orange-Smoothie",price:3500,photo:"assets/images/orangesmoothie.png",category:"Smoothie",qty:1},
            {id:15,name:"Strawberry-Smoothie",price:3500,photo:"assets/images/strawberrysmoothie.png",category:"Smoothie",qty:1},
            
          ],
          
           
        }
    },

    methods:{


       selectCategory(cat){ 

          this.tempCategory=cat.name
          cat.selected=true

       },
       addOrder(item,index){

        console.log("id =",index)
        
        if(!this.orderList.includes(item)) { 
         
          this.orderList.push(item)

        } else {
           
          let myitem=this.orderList.find((item)=>item.id==index)
          myitem.qty++
          
            
        }
       
        console.log(this.orderList)
          
       


       },
       totalOrder: function (orders) {
        return orders.reduce((acc, val) => {
          return acc + (parseInt(val.price) * parseInt(val.qty));
        }, 0);
      }

    },
    computed:{

     
      filterItems(){
        if(this.tempCategory=="All Items" || this.tempCategory=='')
           return this.items
        return this.items.filter((item)=> item.category == this.tempCategory)
      }

     }
        
        
    
   
   
})
app.mount('#app')
