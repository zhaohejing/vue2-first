<template>
    <div>
        <Row>
            <Col span="8">
            <Input v-model="page.name">
            <Button slot="append" icon="ios-search" @click="search"></Button>
            </Input>
            </Col>

            <Col span="12">
            <Button type="info" @click="add">添加</Button>
            <Button type="success" @click="mutileDelete">批量删除</Button>
            </Col>
        </Row>
        <br>
        <Table border :columns="title" :data="rows" stripe></Table>
        <div class="page">
            <div class="right">
                <Page :total="total" :current="page.index" show-total  show-sizer @on-page-size-change="ChangeSize"
                 @on-change="Init"></Page>
            </div>
        </div>

 <Modal
        v-model="model"
        title="添加banner"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>a</p>
        <p>a</p>
        <p>a</p>
    </Modal>

    </div>
</template>
<script>
import api from '@/fetch/api';
export default {
    data() {
        return {
            model:false,
            rows: [],
            title: [
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
                    render: (h, parms) => {
                        let row = parms.row;
                        return row.cate == 1 ? '轮播图' : 'banner图'
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
                                        this.show(params.row)
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
                                        this.remove(params.row)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            total: 0,
            page: {
                index: 1,
                size: 10,
                name: ""
            }
        }
    },
    created: function () {
        this.Init();
    },
    methods: {
        ok(){},
        cancel(){},
        mutileDelete(){},

        add(){
        this.model=!this.model;
        },
        
        //详情
        show(row) {
            api.commonGet(`api/shuffling/get?id=${row.id}`).then(r => {
                if (r.success) {
                    this.$Modal.info({
                        title: '用户信息',
                        content: `姓名：${r.result.shuffling_name}<br>年龄：${r.result.url}<br>地址：${r.result.address}`
                    });
                }
            });

        },
        //删除
        remove(row) {
            api.commonPost("api/shuffling/delete", { list: [row.id] }).then(r => {
                if (r.success) {
                    this.Init();
                }
            })
        },
        //分页
        Init(page) {
            this.page.index = page || 1;
            api.commonPost("api/shuffling/list", {
                pageNum: this.page.index,
                pageSize: this.page.size,
                name: this.page.name,
                cate: 1
            }).then(r => {
                if (r.success) {
                    this.rows = r.result;
                    this.total = r.total;
                }
            })
        },
        ChangeSize(size){
        this.page.size=size;
        this.Init(this.page.index);
        },
        search() {
            this.Init(this.page.index);
        }
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
