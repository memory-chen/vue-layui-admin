<template>
  <div id="tableData">
    <table class="layui-table">
      <colgroup>
        <col width="50">
        <col>
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="15%">
      </colgroup>
      <thead>
        <tr>
          <th>
            <div @click="allChecked(AllcheckClick.flag)" v-show="AllcheckClick.flag" class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="allChecked(AllcheckClick.flag)" v-show="!AllcheckClick.flag" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </th>
          <th v-for="(table,index) in tableData.headTh" :key="table" style="text-align:left;">{{table}}</th>
        </tr>
      </thead>
      <tbody class="news_content">
        <tr v-for="(tabcont,index) in tableData.tableContent" :key="tabcont.title">
          <td>
            <div @click="CheckClick(index)" v-show="tabcont.checked" class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="CheckClick(index)" v-show="!tabcont.checked" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">{{tabcont.title}}</td>
          <td>{{tabcont.publisher}}</td>
          <td>{{tabcont.examine}}</td>
          <td>{{tabcont.jurisdiction}}</td>
          <td >
            <input type="checkbox" name="show" lay-skin="switch" lay-text="是|否">
            <!-- 变成是，绿色：layui-form-onswitch -->
            <div class="layui-unselect layui-form-switch" lay-skin="_switch" :class="{'layui-form-onswitch':tabcont.show}" @click="isShow(tabcont)"><em>{{showText}}</em><i></i></div>
          </td>
          <td>{{tabcont.time}}</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="1"><i class="layui-icon"></i> 删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: {
          headTh: ["文章标题", "发布人", "审核状态", "浏览权限", "是否展示", "发布时间", "操作"],
          // Allchecked: false,
          tableContent: [{
              title: "css3用transition实现边框动画效果",
              publisher: "请叫我马哥",
              examine: "审核通过",
              jurisdiction: "开放浏览",
              exhibition: "1",
              time: "2017-04-14",
              checked: false,
              show:false
            },
            {
              title: "css3用transition实现边框动画效果",
              publisher: "请叫我马哥",
              examine: "审核通过",
              jurisdiction: "开放浏览",
              exhibition: "1",
              time: "2017-04-14",
              checked: false,
              show:false
            }
          ]          
        }
      };
    },
    methods: {
      // 选中或取消选中
      CheckClick(index) {
        this.tableData.tableContent[index].checked = !this.tableData.tableContent[index].checked;
      },
      // 全选、全不选
      allChecked(bool) {
        // if()
        console.log(bool)
        var array = this.tableData.tableContent;
        if(bool===true){
          array.forEach(element => {
            element.checked = false;
          })
        }else{
          array.forEach(element => {
            element.checked = true;
          })
        }
      },
      // 是否的按钮
      isShow(tabcont) {
        tabcont.show = ! tabcont.show;
      }
    },
    computed: {
      //计算是否全部的属性；
      AllcheckClick() {
        var array = this.tableData.tableContent;
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if (element.checked === false) {
            return {
              flag: false
            }
          }
        }
        return {
          flag: true
        };
      },
      showText(){
        var array = this.tableData.tableContent;
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          return element.show ? '是':'否'
        }
      }
    },
  };
</script>

<style scoped>

</style>
