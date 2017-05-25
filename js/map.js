$(function(){
	//创建地图
     var map = new AMap.Map('container', {
        center: [116.39,39.9],
        zoom: 13
     });
    
    AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker){
        var lngLats = getGridLngLats(map.getCenter(), 5, 5);

        new SimpleMarker({
            iconLabel: '',
            //自定义图标地址
           iconStyle: document.getElementById('myslfBg'),

            //设置基点偏移
            offset: new AMap.Pixel(-19, -60),

            map: map,

            showPositionPoint: true,
            position: lngLats[0],
            zIndex: 100
        });

        new SimpleMarker({
            iconLabel: '',
            //自定义图标节点(img)的属性
            iconStyle: document.getElementById('stronghold'),
            //设置基点偏移
            offset: new AMap.Pixel(-10, -30),

            map: map,
            showPositionPoint: true,
            position: lngLats[1],
            zIndex: 200
        });

        new SimpleMarker({
            iconLabel: '',
            //自定义图标节点(img)的属性
            iconStyle: {

                src: '//webapi.amap.com/theme/v1.3/markers/b/mark_b.png',
                style: {
                    width: '20px',
                    height: '60px'
                }
            },

            //设置基点偏移
            offset: new AMap.Pixel(-10, -60),

            map: map,
            showPositionPoint: true,
            position: lngLats[2]
        });

        new SimpleMarker({
            iconLabel: '',
            //直接设置html(需要以"<"开头并且以">"结尾)
            iconStyle: '<div style="background:red;width:20px;height:60px;"></div>',

            //设置基点偏移
            offset: new AMap.Pixel(-10, -60),

            map: map,
            showPositionPoint: true,
            position: lngLats[3]
        });

        new SimpleMarker({
            iconLabel: '',
            //直接使用dom节点
            iconStyle: document.getElementById('myIcon'),

            //设置基点偏移
            offset: new AMap.Pixel(-10, -60),

            map: map,
            showPositionPoint: true,
            position: lngLats[4]
        });
    });

    AMap.plugin(['AMap.ToolBar'], function() {
        map.addControl(new AMap.ToolBar({
            map: map
        }));
    });

         /**
          * 返回一批网格排列的经纬度

          * @param  {AMap.LngLat} center 网格中心
          * @param  {number} colNum 列数
          * @param  {number} size  总数
          * @param  {number} cellX  横向间距
          * @param  {number} cellY  竖向间距
          * @return {Array}  返回经纬度数组
          */
         function getGridLngLats(center, colNum, size, cellX, cellY) {

             var pxCenter = map.lnglatToPixel(center);

             var rowNum = Math.ceil(size / colNum);

             var startX = pxCenter.getX(),
                 startY = pxCenter.getY();

             cellX = cellX || 70;

             cellY = cellY || 70;


             var lngLats = [];

             for (var r = 0; r < rowNum; r++) {

                 for (var c = 0; c < colNum; c++) {

                     var x = startX + (c - (colNum - 1) / 2) * (cellX);

                     var y = startY + (r - (rowNum - 1) / 2) * (cellY);

                     lngLats.push(map.pixelToLngLat(new AMap.Pixel(x, y)));

                     if (lngLats.length >= size) {
                         break;
                     }
                 }
             }
             return lngLats;
         }
})