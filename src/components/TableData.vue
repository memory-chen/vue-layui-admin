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
          <th><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose" id="allChoose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </th>
          <th style="text-align:left;">文章标题</th>
          <th>发布人</th>
          <th>审核状态</th>
          <th>浏览权限</th>
          <th>是否展示</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody class="news_content">
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">css3用transition实现边框动画效果</td>
          <td>请叫我马哥</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow">
            <div class="layui-unselect layui-form-switch" lay-skin="_switch"><em>否</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="1"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">自定义的模块名称可以包含/吗</td>
          <td>请叫我马哥</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="2"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui.tree如何ajax加载二级菜单</td>
          <td>admin</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="3"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui.upload如何带参数？像jq的data:{}那样</td>
          <td>admin</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="4"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">表单元素长度应该怎么调整才美观</td>
          <td>请叫我马哥</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="5"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui 利用ajax冲获取到json 数据后 怎样进行渲染</td>
          <td>admin</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="6"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">微信页面中富文本编辑器LayEdit无法使用</td>
          <td>请叫我马哥</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow">
            <div class="layui-unselect layui-form-switch" lay-skin="_switch"><em>否</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="7"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui 什么时候发布新的版本呀</td>
          <td>请叫我马哥</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="8"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui上传组件不支持上传前的图片预览嘛？</td>
          <td>admin</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="9"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">关于layer.confirm点击无法关闭的疑惑</td>
          <td>admin</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="10"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layui form表单提交成功如何拿取返回值</td>
          <td>请叫我马哥</td>
          <td>审核通过</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="11"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">layer mobileV2.0 yes回调函数无法用？</td>
          <td>请叫我马哥</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" checked="">
            <div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>是</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="12"><i class="layui-icon"></i> 删除</a></td>
        </tr>
        <tr>
          <td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">关于layer中自带的btn回调弹层页面的内容</td>
          <td>admin</td>
          <td style="color:#f00">待审核</td>
          <td>开放浏览</td>
          <td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow">
            <div class="layui-unselect layui-form-switch" lay-skin="_switch"><em>否</em><i></i></div>
          </td>
          <td>2017-04-14</td>
          <td><a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a><a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon"></i> 收藏</a><a class="layui-btn layui-btn-danger layui-btn-mini news_del"
              data-id="13"><i class="layui-icon"></i> 删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

</style>
