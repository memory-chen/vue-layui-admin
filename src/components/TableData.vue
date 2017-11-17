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
            <div @click="allChecked" v-show="!AllcheckClick"  class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="allChecked" v-show="AllcheckClick" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </th>
          <th v-for="(table,index) in tableData.headTh" :key="table" style="text-align:left;">{{table}}</th>
        </tr>
      </thead>
      <tbody class="news_content">
        <tr v-for="(tabcont,index) in tableData.tableContent" :key="tabcont.title">
          <td>
            <div @click="CheckClick(index)" v-show="tabcont.checked"  class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="CheckClick(index)" v-show="!tabcont.checked" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">{{tabcont.title}}</td>
          <td>{{tabcont.publisher}}</td>
          <td>{{tabcont.examine}}</td>
          <td>{{tabcont.jurisdiction}}</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow">
            <div class="layui-unselect layui-form-switch" lay-skin="_switch"><em>否</em><i></i></div>
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
        tableContent: [
          {
            title: "css3用transition实现边框动画效果",
            publisher: "请叫我马哥",
            examine: "审核通过",
            jurisdiction: "开放浏览",
            exhibition: "1",
            time: "2017-04-14",
            checked: false
          },
          {
            title: "css3用transition实现边框动画效果",
            publisher: "请叫我马哥",
            examine: "审核通过",
            jurisdiction: "开放浏览",
            exhibition: "1",
            time: "2017-04-14",
            checked: false
          }
        ]
      }
    };
  },
  methods: {
    // 选中或取消选中
    CheckClick(index) {
      this.tableData.tableContent[index].checked = !this.tableData.tableContent[index].checked;
      console.log(this.tableData.tableContent[index].checked)
        // this.tableData.tableContent.forEach(element => {
        //   if (element.checked === false) {
        //     this.tableData.Allchecked = false;
        //     return false;
        //   }else {
        //     alert(1)
        //     this.tableData.Allchecked = true;
        //   }
        // });
    },
    // 全选、全不选
    allChecked() {
      // this.tableData.Allchecked = !this.tableData.Allchecked;
        this.tableData.tableContent.forEach(element => {
          element.checked = true;
          // alert(elementchecked)
        });
    },
    
  },
  computed: {
      AllcheckClick() {
        this.tableData.tableContent.forEach(element => {
          if (element.checked === false) {
            return false;
          }else {
            return true;
          }
        });
      }
    },
};
</script>

<style scoped>
input[type="checkbox"] {
  display: inline-block !important;
  position: relative;
  top: 0;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border: 1px solid #d2d2d2;
  font-size: 12px;
  border-radius: 2px;
  background-color: #fff !important;
  -webkit-transition: 0.1s linear;
  transition: 0.1s linear;
}
</style>
