import assert from "assert"
import findItemsOver from "../functions/findItemsOver.js"

describe('test my findItemsOver function', function () {
    it('it should return products that have quantity higher than the threshold 50.', function () {

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ];

        var results = [];


        assert.deepEqual(results, findItemsOver(itemList, 50));

    })


    it('it should return products that have quantity higher than the threshold 20.', function () {

        var itemList2 = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ];

        var results2 = [];


        assert.deepEqual(results2, findItemsOver(itemList2, 20));

    })

    it('it should return products that have quantity higher than the threshold 100.', function () {

        var itemList3 = [
            { name: 'apples', qty: 110 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ];

        var results3 = [
            { name: 'apples', qty: 110 }
        ];


        assert.deepEqual(results3, findItemsOver(itemList3, 100));

    })
})
