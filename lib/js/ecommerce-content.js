Vue.component("ecommerce-content", {
	template: `
	<div>
		<ecommerce-content-jumbotron></ecommerce-content-jumbotron>
		<ecommerce-content-productlist :loggedin="loggedin" @item-obj="additemstocart"  :frontpageitems="frontpageitems"></ecommerce-content-productlist>
	</div>
	`,
	props:["frontpageitems", "loggedin"],
	methods:{
		additemstocart: function(itemObj){
			console.log("content emited", itemObj);
			this.$emit("item-obj", itemObj);
		}
	}
});
