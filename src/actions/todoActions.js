let itemId = 0;

export default {
    addItem : (item) => {
        return {
            type : 'ADD_ITEM',
            item,
            itemId : itemId++
        }
    },
    changeItemStatus : (itemId) => {
        return {
            type : 'CHANGEITEM_STATUS',
            itemId
        }
    },
    removeItem : (itemId) => {
        return {
            type : 'REMOVE_ITEM',
            itemId
        }
    }
};