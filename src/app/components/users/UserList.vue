<template>
    <div id="products" class="box">
        <div class="products--header has-text-centered">
            <i class="fa fa-2x fa-user-circle"></i>
        </div>
        <div class="product-list" v-for="userItem in productItems" :key="userItem.id">
      <ProductListItem :productItem="productItem" />
        </div>
        <div class="product-count has-text-right">
            <span class="has-text-weight-bold"># of products: {{userItemsCount}}</span>
        </div>
    </div>
</template>

<script>
    // import { mapGetters } from "vuex";
    import UserListItem from "./UserListItem";
    export default {
        name: "UserList",
        components: {
            UserListItem
        },
        computed: {
            userItems() {
                return this.$store.getters.userItems;
            },
            userItemsCount() {
                return this.$store.getters.userItemsCount;
            }
            // ...mapGetters(["productItems", "productItemsCount"])
        },
        created() {
            this.$store.dispatch("getuserItems");
        }
    };
</script>

<style>
    .box .products--header {
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 15px;
    }

    .box .product-list {
        padding-top: 10px;
    }
</style>
