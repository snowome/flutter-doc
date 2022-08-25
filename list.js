var list = {

    "参考手册": {
        "StatelessWidget": [
            // [ "创建一个场景(Scene)", "html/Widgets/StatelessWidget/aaa", 1 ],
        ],
        "StatefulWidget": [
            // [ "创建一个场景(Scene)", "html/Widgets/StatelessWidget/aaa", 1 ],
        ],
        "布局widget（单个子元素）": [
            ["Container", "html/布局widget（单个子元素）/Container", 1],
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
        "布局widget（多个子元素）": [
            ["Stack", "html/布局widget（多个子元素）/Stack", 1],
            ["Positioned（搭配Stack使用）", "html/布局widget（多个子元素）/Positioned", 1],
            ["Column", "html/布局widget（多个子元素）/Column", 1],
            ["Row", "html/布局widget（多个子元素）/Row", 1],
            ["Wrap", "html/布局widget（多个子元素）/Wrap", 1],
        ],
        "ParentDataWidget": [
        ]
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
