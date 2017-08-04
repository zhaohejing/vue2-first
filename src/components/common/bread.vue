<<template>
     <Breadcrumb>
        <Breadcrumb-item href="/dashboard">首页</Breadcrumb-item>
         <Breadcrumb-item v-for="(v,i) in $route.meta" :key="i" :href="$route.path||''">{{v.name||v}}</Breadcrumb-item>
          <!-- <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item> -->
      </Breadcrumb>
</template>
<<script >
export default {
    
}
</script>
<<style  scoped>
    .layout-breadcrumb {
    padding: 10px 15px 0;
}
</style>
