/**
 * Created by Administrator on 2016/11/23.
 */
requirejs.config({
   baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-3.1.1'
    }
});

requirejs(['app/demo']);