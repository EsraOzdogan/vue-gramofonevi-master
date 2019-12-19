<template>
    <div class="product-list--item">
        <div>
            <h2 class="has-text-weight-bold">
                {{userItems.name}}
                <span
                        class="tag is-primary is-pulled-right has-text-white"
                        @click="addCartItem(userItem)"
                >Add to Cart</span>
            </h2>
            <p>{{userItems.surname}}</p>
            <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-usd"></i>
        {{userItems.password}}
      </span>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "UserListItem",
        props: ["userItem"],
        methods: {
            // addToCart(productItem) {
            //   this.$store.dispatch("addCartItem", productItem);
            // }
            ...mapActions(["addCartItem"])
        }
    };
</script>

<style>
    .product-list--item {
        padding: 10px 0;
    }
    .product-list--item .tag {
        cursor: pointer;
    }
</style>
