var list = {
    "参考手册": {
        "StatelessWidget": [
            ["Container", "html/StateLessWidget/Container", 1],
            ["Text", "html/StateLessWidget/Text", 1],
            ["Icon", "html/StateLessWidget/Icon", 1],
            ["CloseButton", "html/StateLessWidget/CloseButton", 1],
            ["BackButton", "html/StateLessWidget/BackButton", 1],
            ["Chip", "html/StateLessWidget/Chip", 1],
            ["Divider", "html/StateLessWidget/Divider", 1],
            ["Card", "html/StateLessWidget/Card", 1],
            ["AlertDialog", "html/StateLessWidget/AlertDialog", 1],
            ["FloatingActionButton", "html/StateLessWidget/FloatingActionButton", 1],
        ],
        "StatefulWidget": [
            ["MaterialApp", "html/StateFullWidget/MaterialApp", 1],
            ["Scaffold", "html/StateFullWidget/Scaffold", 1],
            ["AppBar", "html/StateFullWidget/AppBar", 1],
            ["BottomNavigationBar", "html/StateFullWidget/BottomNavigationBar", 1],
            ["RefreshIndicator", "html/StateFullWidget/RefreshIndicator", 1],
            ["Image", "html/StateFullWidget/Image", 1],
            ["TextField", "html/StateFullWidget/TextField", 1],
            ["PageView", "html/StateFullWidget/PageView", 1],
        ],
        "布局Widget（单个子元素）": [
            ["Opacity", "html/布局widget（单个子元素）/Opacity", 1],
            ["Clipoval", "html/布局widget（单个子元素）/Clipoval", 1],
            ["ClipRRect", "html/布局widget（单个子元素）/ClipRRect", 1],
            ["PhysicalModel", "html/布局widget（单个子元素）/PhysicalModel", 1],
            ["Align", "html/布局widget（单个子元素）/Align", 1],
            ["Center", "html/布局widget（单个子元素）/Center", 1],
            ["Padding", "html/布局widget（单个子元素）/Padding", 1],
            ["SizedBox", "html/布局widget（单个子元素）/SizedBox", 1],
            ["FractionallySizedBox", "html/布局widget（单个子元素）/FractionallySizedBox", 1],
        ],
        "布局Widget（多个子元素）": [
            ["Stack", "html/布局widget（多个子元素）/Stack", 1],
            ["Column", "html/布局widget（多个子元素）/Column", 1],
            ["Row", "html/布局widget（多个子元素）/Row", 1],
            ["Wrap", "html/布局widget（多个子元素）/Wrap", 1],
        ],
        "ParentDataWidget": [
            ["Expanded", "html/ParentDataWidget/Expanded", 1],
        ],
        "功能类": [
            ["路由和导航", "html/功能类/路由和导航", 1],
            ["手势、点击事件->GestureDetector", "html/功能类/用户手势、点击事件", 1],

        ],
        "常用函数": [
            ["EdgeInsets", "html/常用函数/EdgeInsets", 1],
            ["BoxDecoration", "html/常用函数/BoxDecoration", 1],
        ],
        "插件": [
            ["flutter-color-plugin", "html/插件/flutter_color_plugin", 1],
            ["url-launcher", "html/插件/url_launcher", 1],
        ],
        "扩展资料": [
            ["数据类型", "html/扩展资料/数据类型", 1],
            ["生命周期概述", "html/扩展资料/生命周期概述", 1],
            ["获取应用生命周期", "html/扩展资料/获取应用生命周期", 1],
            ["网址", "html/扩展资料/网址", 1],
        ],
    },

    // "参考手册": {
    //     "常量(Constants)": [
    //         [ "自定义混合方程(CustomBlendingEquation)", "api/constants/CustomBlendingEquations", 1 ],
    //         [ "GL状态(GLState)", "api/constants/GLState", 1 ],
    //         [ "材料(Materials)", "api/constants/Materials", 1 ],
    //         [ "阴影类型(ShadowingTypes)", "api/constants/ShadowingTypes", 1 ],
    //         [ "纹理(Textures)", "api/constants/Textures", 1 ]
    //     ],
    // }

};

var pages = {};

for (var section in list) {

    pages[section] = {};

    for (var category in list[section]) {

        pages[section][category] = {};

        for (var i = 0; i < list[section][category].length; i++) {

            var page = list[section][category][i];
            pages[section][category][page[0]] = page[1];
        }

    }

}
