<template>
    <Row>
      <Col span="18" offset="3">
    <Menu mode="horizontal"  active-name="1">
      <Menu-item name="1">
        <Icon type="ios-paper"></Icon>
        <router-link to="/home">首页</router-link>
    </Menu-item>
      <Menu-item name="2">
        <Icon type="ios-people"></Icon>
        <router-link to="/list">书单</router-link>
    </Menu-item>
      <Menu-item name="3">
        <Icon type="ios-people"></Icon>
        <router-link to="/manger/add">管理图书</router-link>
    </Menu-item>
    </Menu>
    <div>
    </div>
    <div><router-view></router-view></div>
      </Col>
    </Row>
</template>

<script>

export default {
  name: 'app',

}
</script>


