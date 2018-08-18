Vue.component("ecommerce-content", {
	template: `
	<div>
		<ecommerce-content-jumbotron></ecommerce-content-jumbotron>
		<ecommerce-content-productlist @item-obj="additemstocart"  :frontpageitems="frontpageitems"></ecommerce-content-productlist>
	</div>
	`,
	props:["frontpageitems"],
	methods:{
		additemstocart: function(itemObj){
			console.log("content emited", itemObj);
			this.$emit("item-obj", itemObj);
		}
	}
});
