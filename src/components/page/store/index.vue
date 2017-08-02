<template>
    <div>
        <Table border  :columns="columns" :data="data"></Table>
        <div class="page">
            <div class="right">
                <Page :total="total" :current="current" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import api from './../../../fetch/api'
export default {
    data() {
        return {
           // self: this,
            current:1,
            total:100,
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '姓名',
                    key: 'name',
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
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
            data: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }, {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }, {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                }
            ]
        }
    },
    created:function(){
            api.commonApi("api/shuffling/list",{
                pageNum:current,pageSize:10
            }).then(function(res){
                if(res.success){
                // this.data=res.result;
                // this.total=res.total;
                }
              
            })
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
            })
        },
        remove(index) {
            this.data6.splice(index, 1);
        },
        changePage(){

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
