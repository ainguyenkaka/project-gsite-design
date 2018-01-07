(function () {
    'use strict';
    angular
        .module('gsiteApp')
        .factory('MyQuestionService', MyQuestionService);

    MyQuestionService.$inject = [];

    function MyQuestionService() {
        var instance = {
            all: all,
            get: get,
            del: del,
            add: add
        };

        var list = [
            {
                id: '2as121a',
                title: 'What is the best feature ?',
                answer: 'Share web management'
            },
            {
                id: '2as121a',
                title: 'How I can create beautiful website ?',
                answer: 'Just get the beautiful template'
            }
        ];

        var hashMap = {};
        hashMap[list[0].id] = list[0];
        hashMap[list[1].id] = list[1];

        function all() {
            return list;
        }

        function get(id) {
            return hashMap[id];
        }

        function del(id) {
            var index = getIndex(id);
            list.splice(index, 1);
            delete hashMap[id];
        }

        function getIndex(id) {
            var entity = hashMap[id];
            return list.indexOf(entity);
        }

        function add(entity){
            list.push(entity);
            hashMap[entity.id] = entity;
        }

        return instance;
    }
})();