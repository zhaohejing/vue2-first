<template>
    <div>
        <Table border   :columns="title" :data="rows" stripe></Table>
        <div class="page">
            <div class="right">
                <Page :total="page.total" :current="page.index" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import api from './../../../fetch/api'
export default {
    data() {
        return {
            rows:[],
            title:[
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '轮播图名称',
                    key: 'shuffling_name',
                },
                {
                    title: 'URL',
                    key: 'url'
                },
                {
                    title: '分类',
                    key: 'cate',
                    render :(h,parms)=>{
                        let row=parms.row;
                        return row.cate==1?'轮播图':'banner图'
                    }
                },
                 {
                    title: '上线时间',
                    key: 'online_time'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            page:{
                index:1,size:10,total:0
            }
        }
    },
    created:function(){
         this.changePage();
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.rows[index].shuffling_name}<br>年龄：${this.rows[index].url}<br>地址：${this.rows[index].address}`
            })
        },
        remove(index) {
            this.rows.splice(index, 1);
        },
        changePage(){
         api.commonApi("api/shuffling/list",{
                pageNum:this.page.index,
                pageSize:this.page.size,
                cate:1
            }).then(r=>{
                if(r.success){
                this.rows=r.result;
                this.page.total=r.total;
                }
            } )
        } 
        // setActive(){
        //   console.log('g');
        //   console.log(this.$parent.data);
        //   this.$emit()
        // }
    },
    // mounted() {
    //   this.$nextTick(function() {
    //     this.setActive()
    //   })
    // }
}
</script>
<<style  scoped>
    .page{
        margin: 10px;
        overflow: hidden
    }
    .right{
float: right;
    }
</style>
